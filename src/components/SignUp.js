import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { useDispatch } from 'react-redux'
import { setId, setAccounts, setPiggy, setTransactions, setName } from '../redux/userSlice'
import { setAssign, setTotal } from "../redux/balanceSlice";



function SignUp() {

/*********************  Redux  ******************************/
    const dispatch = useDispatch()

    function handleRedux(id){
        fetch(`http://localhost:3000/api/v1/users/${id}`)
        .then((r) => r.json())
        .then((userObj) => {
          console.log(userObj)
          dispatch(setId(userObj.id))
          dispatch(setAccounts(userObj.accounts))
          dispatch(setPiggy(userObj.piggy_banks))
          dispatch(setTransactions(userObj.transactions))
          dispatch(setName(userObj.name))
          handleMoney(userObj)
        })
    }

    function handleMoney(userObj){
        let savings = 0
        userObj.accounts.map((account) => savings += account.total)
        dispatch(setTotal(savings))
        let inPiggy = 0 
        userObj.piggy_banks.map((piggy) => inPiggy += piggy.current_balance)
        let toBeAssigned = savings - inPiggy
        dispatch(setAssign(toBeAssigned))
    
      }

/*********************  Event Handlers  ******************************/

    const [newName, setNewName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [accName, setAccName] = useState("")
    const [accNum, setAccNum] = useState("")
    const [balance, setBalance] = useState("")

    const newUser = {name: newName, username, password}

    function handleNewUser(e){
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/users`, {
           method: "POST",
           headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
       })
       .then((r) => r.json())
       .then((newDbUser) => {
      
            handleNewAccount(newDbUser.id)
          
       })
    }

    function handleNewAccount(userId){
        const newUserAccount = {account_number: accNum, name: accName, total: balance, user_id: userId}

        fetch(`http://localhost:3000/api/v1/accounts`, {
           method: "POST",
           headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUserAccount),
       })
       .then((r) => r.json())
       .then((newDbAccount) => {
            
            handleRedux(newDbAccount.user_id)
       })
    }

/*********************  JSX  ******************************/


    return (
       <Container className="form">
        <Form id="signup" onSubmit={handleNewUser}>
        <h4>Create and Account</h4>

          
                <Form.Group  controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    
                    placeholder="Enter Your Name" 
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control  
                    placeholder="Create Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>
        

                <Form.Group controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Create Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>

      
            <h4> Add an Account to get started!</h4>
            
            
            <Form.Group >
            <Form.Label>Account Name</Form.Label>
            <Form.Control 
                
                placeholder="Account Name"
                value={accName}
                onChange={(e) => setAccName(e.target.value)} />
            </Form.Group>
     
            <Form.Group >
            <Form.Label>Account Number</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Account Number"
                value={accNum}
                onChange={(e) => setAccNum(e.target.value)} />
            </Form.Group>
    

            <Form.Group >
                <Form.Label>Current Balance</Form.Label>
                <Form.Control
                type="number" 
                step="0.01"
                placeholder=" Balance"
                value={balance}
                onChange={(e) => setBalance(parseFloat(e.target.value))} />
            </Form.Group>

       
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>  
    )
}

export default SignUp
