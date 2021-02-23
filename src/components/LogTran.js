import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { addTransaction, updateAccountTotal } from '../redux/userSlice'
import { addAssign, addTotal, subtractAssign, subtractTotal } from '../redux/balanceSlice'

function LogTran(props) {

 /*****************  Redux    *****************/
    const dispatch = useDispatch()
    const userId = useSelector((state) => state.user.id)
    

    function handleReduxTran(tranObj){
        dispatch(addTransaction(tranObj))
        if (tranObj.category === "Deposit") {
           dispatch(addAssign(tranObj.amount))
           dispatch(addTotal(tranObj.amount))
        }
        else { 
            dispatch(subtractAssign(tranObj.amount))
            dispatch(subtractTotal(tranObj.amount))
        }
    }

    function handleReduxBalance(account){
        dispatch(updateAccountTotal(account))
    }
   


 /*****************  Event Handlers    *****************/
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState()
    const [submit, setSubmit] = useState(false)
    const newTran = {user_id: userId, account_id: props.account.id, amount, category: type  }

    function handleSubmit(event){
        event.preventDefault()
        setSubmit(true)
        fetch("http://localhost:3000/api/v1/transactions", {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTran),
        })
        .then((r) => r.json())
        .then((newTranDb) => {
            
            updateAccount(newTranDb)
            handleReduxTran(newTranDb)
           
        })
    }

    let newBalance = 0

    function updateAccount(tranObj){
        (tranObj.category === "Deposit" ? 
            newBalance = parseFloat(props.account.total) + parseFloat(tranObj.amount)
             : 
            newBalance = parseFloat(props.account.total) - parseFloat(tranObj.amount) )
        fetch(`http://localhost:3000/api/v1/accounts/${tranObj.account_id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
             },
            body: JSON.stringify({total: newBalance}),
        })
        .then((r) => r.json())
        .then((account) => {
            handleReduxBalance(account)
            props.onHide()
            setAmount(0)
            setType(0)
            setSubmit(false)
        })
    }
    
 /*****************  JSX    *****************/

    return (
        <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Log Transaction
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {submit ? <Spinner animation="border" variant="success" />
            :
            <Form onSubmit={handleSubmit}>
            <Form.Label><h5>For Account: {props.account.name} </h5></Form.Label>
                
                <Form.Row>
          
                 
                        <Form.Group  >
                        <Form.Label>Amount $:</Form.Label>
                        <Form.Control 
                            required
                            type="number" 
                            placeholder="0.00"
                            step="0.01"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)} />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Type:</Form.Label>
                            <Form.Control 
                                required
                                as="select" 
                                value={type}
                                onChange={(e) => setType(e.target.value)}>
                                <option value="">Choose ...</option>
                                <option value="Withdrawal">Withdrawal</option>
                                <option value="Deposit">Deposit</option>

                            </Form.Control>
                        </Form.Group>
                </Form.Row>

                <Modal.Footer>
                    <Button variant="outline-dark"  type="submit">
                        Submit
                    </Button>
                </Modal.Footer>
            
            </Form>
            }   
        </Modal.Body>
   
      </Modal>
    )
}

export default LogTran
