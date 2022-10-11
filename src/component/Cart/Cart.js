import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = ({ cart }) => {
    const { id, name, logo, total } = cart;
    return (
        <div className='style border-2 border-indigo-600 md:m-8 border-none'>
            <div>
                <img className='image bg-gray-200' src={logo} alt='' />
            </div>
            <div className=' md:flex justify-around items-center py-3 text-xl font-bold'>
                <h1>{name}</h1>
                <h2>Total: {total}</h2>
            </div>
            <button><Link to={`/${id}`}>Start quiz</Link></button>
        </div>
    );
};

export default Cart;