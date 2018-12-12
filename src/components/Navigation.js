import React from 'react';
import logo from '../images/logo.png';
import english from '../images/uk.png';
import spanish from '../images/spain.png';
import {Navbar, NavItem} from 'react-materialize';
import { Link } from 'react-router-dom';

const Navigation = (props) => {

    const imgStyle = {
        width: '120px',
        height: '120px',
        marginTop: '-20%'
    }

    const flagStyle = {
        width: '30px',
        height: '30px',
        marginBottom: '-30%'
    }

    var Img = <img src={logo} style={imgStyle} alt="blabberly log"></img>
    var EnglishFlag = <img src={english} style={flagStyle} alt="Spanish Flag"></img>
    var SpanishFlag = <img src={spanish} style={flagStyle} alt="Union Jack"></img>

    return (
            
        <Navbar className = "grey lighten-1" brand={Img} right>
            <NavItem><Link to="/support">Support</Link></NavItem>
            <NavItem><Link to="/blog">Blog</Link></NavItem>
            <NavItem><Link to="/products">Products</Link></NavItem>
            <NavItem><Link to="/login">Login</Link></NavItem>
            <NavItem><Link to="/">{EnglishFlag}</Link></NavItem>
            <NavItem><Link to="/índice">{SpanishFlag}</Link></NavItem>
        </Navbar>
    );
}

export default Navigation;