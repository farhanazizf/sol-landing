"use client";

import { useState, useEffect } from "react";
import { database } from "@/lib/firebase";
import { ref, onValue, set, get } from "firebase/database";
import { useShopAnalytics } from "./useShopAnalytics";

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

  const addToCart = async (item: {
    name: string;
    brand: string;
    price: number;
  }) => {
    if (!database || !userId) return;

    const cartRef = ref(database, `fhi/${userId}/cart`);
    const existingItemIndex = cart.findIndex(
      (cartItem) =>
        cartItem.item_name === item.name && cartItem.brand === item.brand
    );

    let updatedCart: CartItem[];

    if (existingItemIndex >= 0) {
      // Update existing item
      updatedCart = cart.map((cartItem, index) => {
        if (index === existingItemIndex) {
          const newQuantity = cartItem.quantity + 1;
          return {
            ...cartItem,
            quantity: newQuantity,
            total_price: item.price * newQuantity,
          };
        }
        return cartItem;
      });
    } else {
      // Add new item
      const newItem: CartItem = {
        item_name: item.name,
        brand: item.brand,
        price: item.price,
        quantity: 1,
        total_price: item.price,
      };
      updatedCart = [...cart, newItem];
    }

    const totalCartPrice = updatedCart.reduce(
      (total, item) => total + item.total_price,
      0
    );
    const reff = ref(database, `fhi/${userId}`);

    // await set(reff, { grand_total: totalCartPrice });
    await set(cartRef, updatedCart);

    const snapshot = await get(reff);

    if (snapshot.exists()) {
      console.log("here");
      let updated = snapshot.val();
      await set(reff, { ...updated, grand_total: totalCartPrice });
    }

    trackAddToCart(item.name, 1);
  };

  const updateQuantity = async (
    itemName: string,
    brand: string,
    quantity: number
  ) => {
    if (!database || !userId || quantity < 1) return;

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
  };

  const removeFromCart = async (itemName: string, brand: string) => {
    if (!database || !userId) return;

    const cartRef = ref(database, `fhi/${userId}/cart`);
    const updatedCart = cart.filter(
      (item) => !(item.item_name === itemName && item.brand === brand)
    );
    await set(cartRef, updatedCart);
  };

  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
  };
};
