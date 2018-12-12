import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Support from './Support';
import Prods from './Prods';
import Blog from './Blog';
import Login from './Login';
import Footers from './Footers';

//Import css
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/support" component={Support}/>
                        <Route path="/blog" component={Blog}/>
                        <Route path="/products" component={Prods}/>
                        <Route path="/login" component={Login}/>
                    </Switch>
                    <Footers />
                </div>
            </Router>
        )
    }
}

export default App;