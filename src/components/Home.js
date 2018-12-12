import React from 'react';
import Header from './Header';
import FeaturedPhoto from './FeatuedPhoto';
import Products from './Products';
import Testimonials from './Testimonials';

//Import css
import './App.css';

const Home = (props) => {

    return (
       
    <div>
        <Header />
        <FeaturedPhoto />
        <Products />
        <Testimonials />
    </div>

    );
}

export default Home;