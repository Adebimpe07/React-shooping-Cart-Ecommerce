import React, { createContext, useState } from "react";
import { PRODUCTS } from "../layouts/product";
export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find(
          (products) => products.id === Number(item)
        );
        totalAmount += cartItems[item] = itemInfo.price;
      }
      return totalAmount;
    }
  };
  const addTocart = (itemsId) => {
    setCartItems((prev) => ({ ...prev, [itemsId]: prev[itemsId] + 1 }));
  };
  const removeFromcart = (itemsId) => {
    setCartItems((prev) => ({ ...prev, [itemsId]: prev[itemsId] - 1 }));
  };
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const checkout = () => {
    setCartItems(getDefaultCart());
  };
  const contextValue = {
    cartItems,
    addTocart,
    removeFromcart,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
