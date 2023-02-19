import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
const CartItem = (props) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="cartItem w-[700px] rounded-3xl h-64 flex items-center shadow-3xl m-8 ">
      <img className="w-[200px]" src={productImage} alt="" />
      <div className="description w-full text-3xl ">
        <p className="font-bold">{productName}</p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
          className="w-10 text-center font-extrabold"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
