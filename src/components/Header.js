import React from 'react';
import { Row, Col, Container, Button, Input } from 'react-materialize';

const Header = (props) => {

    return (
        <Container>
            <Row>
                <Col s={12} className='center blue-text'>
                    <h1>Learn Another Language</h1>
                </Col>
            </Row>
            <Row>
                <Col s={5}></Col>
                <Col s={7}>
                    <Input type="email" label="Email" validate/>
                </Col> 
            </Row>
            <Row>
                <Col s={5}></Col>
                <Col s={7}>
                    <Button className='btn-large waves-effect waves-light light-green'>Get Started</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;