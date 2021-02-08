import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux'
import { addAccount } from '../redux/userSlice'
import { addAssign, addTotal } from '../redux/balanceSlice'



function NewAccount(props) {

/*******************  Redux  ***********************/

    const userId = useSelector((state) => state.user.id)
    const dispatch = useDispatch()

    function handelReduxAccount(accObj){
        dispatch(addAccount(accObj))
        dispatch(addTotal(accObj.total))
        dispatch(addAssign(accObj.total))
    }

/*******************  Event Handlers  ***********************/
    const [name, setName] = useState("")
    const [accNum, setAccNum] = useState("")
    const [accTotal, setAccTotal] = useState(0)
    

    const newAccount = {name: name, 
                        account_number: accNum,
                        total: accTotal,
                        user_id: userId}

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/accounts`, {
           method: "POST",
           headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAccount),
       })
       .then((r) => r.json())
       .then((newDbAcc) => {
          handelReduxAccount(newDbAcc)
       })
    }
                      

    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                    Create A New Account
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                            <Form.Group  controlId="formGridName">
                            <Form.Label>Account Name</Form.Label>
                            <Form.Control 
                                type="account-name" 
                                placeholder="Enter Account Name" 
                                value={name}
                                onChange={((e) => setName(e.target.value))}
                            />
                            </Form.Group>

                            <Form.Group  controlId="formGridPassword">
                            <Form.Label>Account Number</Form.Label>
                            <Form.Control 
                                type="account-number" 
                                placeholder="Enter Account Number" 
                                value={accNum}
                                onChange={(e) => setAccNum(e.target.value)}
                            />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group  controlId="formGridPassword">
                            <Form.Label>Current Balance: $</Form.Label>
                            <Form.Control 
                                type="number" 
                                step="0.01"
                                placeholder="0.00" 
                                value={accTotal}
                                onChange={(e) => setAccTotal(parseFloat(e.target.value))}
                            />
                        </Form.Group>

                       

                        
                     <Modal.Footer>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                  </Modal.Footer>
                </Form>

            </Modal.Body>
           
            </Modal>
    )
}

export default NewAccount
