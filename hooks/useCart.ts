"use client";

import { useState, useEffect } from "react";
import { database } from "@/lib/firebase";
import { ref, onValue, set } from "firebase/database";
import { useShopAnalytics } from "./useShopAnalytics";
import { toast } from "sonner";

interface CartItem {
  item_name: string;
  brand: string;
  price: number;
  quantity: number;
  total_price: number;
}

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { trackAddToCart } = useShopAnalytics();
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("shopUserId") : null;

  useEffect(() => {
    if (!database || !userId) return;

    const cartRef = ref(database, `fhi/${userId}/cart`);

    const unsubscribe = onValue(cartRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setCart(data);
      } else {
        setCart([]);
      }
    });

    return () => unsubscribe();
  }, [userId]);

  const addToCart = async (
    item: { name: string; brand: string; price: number },
    quantity: number = 1
  ) => {
    if (!database || !userId) return;

    try {
      const cartRef = ref(database, `fhi/${userId}/cart`);
      const existingItemIndex = cart.findIndex(
        (cartItem) =>
          cartItem.item_name === item.name && cartItem.brand === item.brand
      );

      let updatedCart: CartItem[];

      if (existingItemIndex >= 0) {
        updatedCart = cart.map((cartItem, index) => {
          if (index === existingItemIndex) {
            const newQuantity = cartItem.quantity + quantity;
            return {
              ...cartItem,
              quantity: newQuantity,
              total_price: item.price * newQuantity,
            };
          }
          return cartItem;
        });
        toast.success(`Updated quantity of ${item.name} in cart`);
      } else {
        const newItem: CartItem = {
          item_name: item.name,
          brand: item.brand,
          price: item.price,
          quantity: quantity,
          total_price: item.price * quantity,
        };
        updatedCart = [...cart, newItem];
        toast.success(`Added ${item.name} to cart`);
      }

      await set(cartRef, updatedCart);
      trackAddToCart(item.name, quantity);
    } catch (error) {
      toast.error("Failed to add item to cart");
      console.error("Error adding to cart:", error);
    }
  };

  const updateQuantity = async (
    itemName: string,
    brand: string,
    quantity: number
  ) => {
    if (!database || !userId || quantity < 1) return;

    try {
      const cartRef = ref(database, `fhi/${userId}/cart`);
      const updatedCart = cart.map((item) => {
        if (item.item_name === itemName && item.brand === brand) {
          return {
            ...item,
            quantity,
            total_price: item.price * quantity,
          };
        }
        return item;
      });

      await set(cartRef, updatedCart);
      toast.success(`Updated quantity of ${itemName}`);
    } catch (error) {
      toast.error("Failed to update quantity");
      console.error("Error updating quantity:", error);
    }
  };

  const removeFromCart = async (itemName: string, brand: string) => {
    if (!database || !userId) return;

    try {
      const cartRef = ref(database, `fhi/${userId}/cart`);
      const updatedCart = cart.filter(
        (item) => !(item.item_name === itemName && item.brand === brand)
      );
      await set(cartRef, updatedCart);
      toast.success(`Removed ${itemName} from cart`);
    } catch (error) {
      toast.error("Failed to remove item from cart");
      console.error("Error removing from cart:", error);
    }
  };

  const clearCart = async () => {
    if (!database || !userId) return;

    try {
      const cartRef = ref(database, `fhi/${userId}/cart`);
      await set(cartRef, []);
    } catch (error) {
      console.error("Error clearing cart:", error);
      throw error;
    }
  };

  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  };
};
