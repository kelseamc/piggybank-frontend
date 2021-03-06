import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useHistory } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'



function SignUp({setCurrentUser}) {

  

/*********************  Event Handlers  ******************************/
    const [loading, setLoading] = useState(false)
    const [newName, setNewName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [accName, setAccName] = useState("")
    const [accNum, setAccNum] = useState("")
    const [balance, setBalance] = useState("")

    const newUser = {name: newName, username, password}

    let history = useHistory()

    function handleNewUser(e){
        setLoading(true)
        e.preventDefault()
        fetch(`https://pigbankk.herokuapp.com/api/v1/register`, {
           method: "POST",
           headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
       })
       .then((r) => r.json())
       .then((data) => {
           if (data.error){
               alert(data.error)
           }
           else {
            handleNewAccount(data.user)
            localStorage.setItem("token", data.token)
            }
            setLoading(false)
           
       })
    }

    function handleNewAccount(userObj){
        const newUserAccount = {account_number: accNum, name: accName, total: balance, user_id: userObj.id}

        fetch(`https://pigbankk.herokuapp.com/api/v1/accounts`, {
           method: "POST",
           headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUserAccount),
       })
       .then((r) => r.json())
       .then((newDbAccount) => {
           handleUserInfo()
       })
    }

    function handleUserInfo(){
        const token = localStorage.getItem("token")

        fetch(`https://pigbankk.herokuapp.com/api/v1/profile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((r) => r.json())
        .then((userObj) => {
          setCurrentUser(userObj)
          setLoading(false)
          history.push("/dashboard")
        })
    }

/*********************  JSX  ******************************/


    return (
       <Container className="form">
        <Form id="signup" onSubmit={handleNewUser}>
            {loading ? <Spinner /> : null}
                 <h4>Create an Account</h4>

          
                <Form.Group  controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    required
                    placeholder="Enter Your Name" 
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control  
                    required
                    placeholder="Create Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>
        

                <Form.Group controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        required
                        type="password" 
                        placeholder="Create Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>

      
            <h4> Add an Account to get started!</h4>
            
            
            <Form.Group >
            <Form.Label>Account Name</Form.Label>
            <Form.Control 
                required
                placeholder="Account Name"
                value={accName}
                onChange={(e) => setAccName(e.target.value)} />
            </Form.Group>
     
            <Form.Group >
            <Form.Label>Account Number</Form.Label>
            <Form.Control 
                required
                type="password" 
                placeholder="Account Number"
                value={accNum}
                onChange={(e) => setAccNum(e.target.value)} />
            </Form.Group>
    

            <Form.Group >
                <Form.Label>Current Balance</Form.Label>
                <Form.Control
                required
                type="number" 
                step="0.01"
                placeholder=" Balance"
                value={balance}
                onChange={(e) => setBalance(parseFloat(e.target.value))} />
            </Form.Group>

       
            <Button variant="outline-primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>  
    )
}

export default SignUp
