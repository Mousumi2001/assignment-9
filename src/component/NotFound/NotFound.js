import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='bg-gray-800 bgd text-white'>
            <div className='text'>
                <h1 className='text-9xl'>404</h1>
                <h3 className='text-5xl'>Sorry</h3>
                <h5 className='text-xl'>The page you're looking for was not found.</h5>

            </div>
        </div>
    );
};

export default NotFound;