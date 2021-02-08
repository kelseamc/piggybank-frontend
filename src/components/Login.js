import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function Login() {
    return (
        <Container className="form">
        <Form >
            
                <Form.Group >
                <Form.Label>Username</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
    

            <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )
}

export default Login
