import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar w-full h-20 bg-[rgb(19,19,19)] flex justify-end items-center">
        <div className='links mr-12 flex items-center'>
           <Link to="/" className='text-white ml-5 text-2xl'>Shop</Link>
           <Link to="/cart"  className='text-white ml-5 text-2xl'><ShoppingCart size={32}/></Link>
        </div>
    </div>
  )
}

export default Navbar
