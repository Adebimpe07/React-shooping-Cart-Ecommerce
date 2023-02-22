import React, { useContext } from 'react'
import {ShopContext} from '../../context/shop-context'

const Product = (props) => {
    const {id, productName, price, productImage} =props.data;
  const {addToCart, cartItems} = useContext(ShopContext);
  const cartItemAmount = cartItems[id]
  
    return (
    <div className='product rounded-2xl w-72 h-96 flex flex-col justify-center items-center m-20'>
        <img className='w-[400px]' src={productImage} alt=""/>
        <div className='description text-center hover:cursor-pointer hover:transition duration-[0.8s] ease-in'>
            <p className='font-bold'>{productName}</p>
            <p>${price}</p>
        </div>
        <button className='bg-transparent border-[2px] border-[rgb(19,19,19)] rounded-[15px] py-[5px] px-[10px] ' onClick={()=>addToCart(id)}>
          Add to Cart {cartItemAmount>0 && <> ({cartItemAmount})</>}</button>
        </div>
  )
}

export default Product