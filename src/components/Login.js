import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useHistory } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

function Login({setCurrentUser}) {
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const loginInfo = {username: username, password: password}

  
    function handleLoginSubmit(e) {
       e.preventDefault()
       setLoading(true)
        fetch('https://pigbankk.herokuapp.com/api/v1/login', {
           method: "POST",
           headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginInfo),
       })
       .then((r) => r.json())
       .then((data) => {
           if (data.error){
                
                setError(data.error)
           }
           else {
           setCurrentUser(data.user)
           localStorage.setItem("token", data.token)
           history.push("/dashboard")

           }
        setLoading(false)
       })
    }

    return (
        <Container className="form">
        
        <Form onSubmit={handleLoginSubmit}>
            {loading ? <Spinner animation="border" variant="success"/> : null}
                {error ? <p className="error" >{error}</p> : null}
                <Form.Group >
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    required
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>
    

            <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control 
                     required
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            

            
            <Button variant="outline-primary" type="submit">
                Submit
            </Button>
        </Form>
        
        </Container>
    )
}

export default Login
