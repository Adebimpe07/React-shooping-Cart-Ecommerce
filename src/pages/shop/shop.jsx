import React from "react";
import { PRODUCTS } from "../../layouts/product";
import Product from "./product";

const shop = () => {
  return (
    <div className="shop">
      <div className="shoptitle mt-24 text-center text-4xl">
        <h1>PedroTech Shop</h1>
      </div>
      <div className="products w-full h-auto grid grid-cols-3 place-items-center">
        {PRODUCTS.map((product, id) => {
          return <Product data={product} key={id} />;
        })}
      </div>
    </div>
  );
};

export default shop;
