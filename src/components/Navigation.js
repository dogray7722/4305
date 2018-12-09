import React from 'react';
import logo from '../images/logo.png';
import english from '../images/uk.png';
import spanish from '../images/spain.png';
import {Navbar, NavItem} from 'react-materialize';

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

    var Img = <img src={logo} style={imgStyle} alt=""></img>
    var EnglishFlag = <img src={english} style={flagStyle} alt=""></img>
    var SpanishFlag = <img src={spanish} style={flagStyle} alt=""></img>

    return (
            
        <Navbar className = "grey lighten-1" brand={Img} right>
            <NavItem href='support.html' onClick={() => console.log('test click')}>Support</NavItem>
            <NavItem href='blog.html'>Blog</NavItem>
            <NavItem href='products.html'>Products</NavItem>
            <NavItem href='login.html'>Login</NavItem>
            <NavItem href='index.html'>{EnglishFlag}</NavItem>
            <NavItem href='índice.html'>{SpanishFlag}</NavItem>
        </Navbar>
    );
}

export default Navigation;