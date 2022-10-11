import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='text-orange-400 text-1xl flex justify-between bg-gray-900 p-3'>
            <div className='text-4xl pl-8 font-semibold'>
                <h1>Quiz Page</h1>
            </div>
            <div className='pr-8 font-medium flex items-center'>
                <Link to='/'>Home</Link>
                <Link to='/rechart'>Rechart</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;