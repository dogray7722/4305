import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
            <Router>
                <div>
                    <Navigation />
                    <Header />
                    <FeaturedPhoto />
                    <Products />
                    <Testimonials />
                    <Footers />
                </div>
            </Router>
        )
    }
}

export default App;