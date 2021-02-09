import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useHistory } from 'react-router-dom'

function Login({setCurrentUser}) {
    const history = useHistory()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const loginInfo = {username: username, password: password}

    function handleLoginSubmit(e) {
        e.preventDefault()
        console.log(loginInfo)
        fetch('http://localhost:3000/api/v1/login', {
           method: "POST",
           headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginInfo),
       })
       .then((r) => r.json())
       .then((data) => {
           setCurrentUser(data.user)
           localStorage.setItem("token", data.token)
           history.push("/dashboard")
        
       })
    }

    return (
        <Container className="form">
        <Form onSubmit={handleLoginSubmit}>
            
                <Form.Group >
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Password" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>
    

            <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )
}

export default Login
