import React from 'react';
import './Head.css'

const Head = () => {
    return (
        <div>
            <div className='img bg-gradient-to-r from-sky-200 to-indigo-400 md:flex items-center'>
                <div>
                    <h1 className='text-6xl font-bold p-6'>Welcome To My Website</h1>
                    <p className='font-semibold'>This page is
                        for web developers. Here are some important
                        questions and blogs for web developers that can be
                        useful in interviews.</p>
                </div>
                <div>
                    <img src='https://tse1.mm.bing.net/th?id=OIP.6hbH7XYDjqIOiTeNccUQ_gHaC9&pid=Api&P=0' alt=''></img>
                </div>
            </div>

        </div>
    );
};

export default Head;