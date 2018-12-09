import React from 'react';
import logo from '../images/logo.png';
import {Navbar, NavItem} from 'react-materialize';

const Navigation = (props) => {

    const imgStyle = {
        width: '120px',
        height: '120px',
        marginTop: '-20%'
    }

    var Img = <img src={logo} style={imgStyle}></img>

    return (
        <Navbar className = "grey lighten-1" brand={Img} right>
            <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
            <NavItem href='components.html'>Components</NavItem>
        </Navbar>
    );
}

export default Navigation;