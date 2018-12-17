import React from 'react';
import logo from '../images/logo.png';
import english from '../images/uk.png';
import spanish from '../images/spain.png';
import {Navbar} from 'react-materialize';
import { Link } from 'react-router-dom';

const Navigation = (props) => {

    const imgStyle = {
        width: '120',
        height: '120',
        marginTop: '-15%',
        marginLeft: '30px'
    }

    const flagStyle = {
        width: '30',
        height: '30',
        marginBottom: '-30%'
    }

    var Img = <img src={logo} style={imgStyle} alt="blabberly login"></img>
    var EnglishFlag = <img src={english} style={flagStyle} alt="Spanish Flag"></img>
    var SpanishFlag = <img src={spanish} style={flagStyle} alt="Union Jack"></img>

    return (
            
        <Navbar className = "grey lighten-1" brand={Img} right>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/">{EnglishFlag}</Link></li>
            <li><Link to="/índice">{SpanishFlag}</Link></li>
        </Navbar>
    );
}

export default Navigation;