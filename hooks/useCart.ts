"use client";

import { useState, useEffect } from "react";
import { database } from "@/lib/firebase";
import { ref, onValue, set } from "firebase/database";
import { useShopAnalytics } from "./useShopAnalytics";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const useCart = (userId: string) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { trackAddToCart } = useShopAnalytics();

  useEffect(() => {
    if (!database || !userId) return;

    const cartRef = ref(database, `carts/${userId}`);

    const unsubscribe = onValue(cartRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setCart(Object.values(data));
      } else {
        setCart([]);
      }
    });

    return () => unsubscribe();
  }, [userId]);

  const addToCart = async (
    item: Omit<CartItem, "quantity">,
    quantity: number
  ) => {
    if (!database || !userId) return;

    const cartRef = ref(database, `carts/${userId}`);
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    let updatedCart: CartItem[];

    if (existingItem) {
      updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
    } else {
      updatedCart = [...cart, { ...item, quantity }];
    }

    await set(cartRef, updatedCart);
    trackAddToCart(item.id, quantity);
  };

  const removeFromCart = async (itemId: string) => {
    if (!database || !userId) return;

    const cartRef = ref(database, `carts/${userId}`);
    const updatedCart = cart.filter((item) => item.id !== itemId);
    await set(cartRef, updatedCart);
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    if (!database || !userId) return;

    const cartRef = ref(database, `carts/${userId}`);
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    );
    await set(cartRef, updatedCart);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
  };
};
