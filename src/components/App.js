import React, { Component } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import FeaturedPhoto from './FeatuedPhoto';
import Products from './Products';
import Testimonials from './Testimonials';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Header />
                <FeaturedPhoto />
                <Products />
                <Testimonials />
            </div>
        )
    }
}

export default App;