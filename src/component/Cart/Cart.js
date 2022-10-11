import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = ({ cart }) => {
    const { id, name, logo, total } = cart;
    return (
        <div className='style border-2 border-indigo-600 m-8 border-none '>
            <div>
                <img className='image' src={logo} alt='' />
            </div>
            <div className='flex justify-around items-center py-3 text-xl'>
                <h1>{name}</h1>
                <h2>Total: {total}</h2>
                <button><Link to={`/${id}`}>Start quiz</Link></button>
            </div>
        </div>
    );
};

export default Cart;