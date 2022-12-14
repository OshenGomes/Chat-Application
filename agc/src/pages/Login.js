import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import {Link} from "react-router-dom";
import {useState} from "react";

function Login() {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    function handleLogin(e){
        e.preventDefault();
    }

    return (
        <Container>
            <Row>
                <Col md={6} className="login_bg">

                </Col>
                <Col md={5} className="d-flex align-items-center justify-content-center flex-direction-column">
        <Form style={{width:"80%", maxWidth:500}} onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required/>

            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
            <div className="py-4">
                <p className="text-center">
                    Don't have an account ? <Link to="/signup">Signup</Link>
                </p>
            </div>
        </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;