import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import Head from '../Head/Head';

const Home = () => {
    const carts = useLoaderData();
    // console.log(carts)
    const { data } = carts;
    console.log(data);

    return (
        <div>

            <Head></Head>
            <div className='flex p-8 m-6 align-middle '>
                {
                    data.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;