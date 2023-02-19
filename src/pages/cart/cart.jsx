import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../layouts/product";
import CartItem from "./cart-Item";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart flex flex-col items-center justify-center">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart cart flex flex-col items-center justify-center">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button
            className="text-white border-0 w-[150px] h-12 bg-[rgb(19, 19, 19)] rounded-lg m-[10px] cursor-pointer"
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
