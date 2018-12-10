import React, { Component } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import FeaturedPhoto from './FeatuedPhoto';
import Products from './Products';
import Testimonials from './Testimonials';
import Footers from './Footers';

//Import css
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Header />
                <FeaturedPhoto />
                <Products />
                <Testimonials />
                <Footers />
            </div>
        )
    }
}

export default App;