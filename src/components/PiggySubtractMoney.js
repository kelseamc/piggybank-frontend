import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import { useDispatch } from 'react-redux'
import { updatePiggy } from '../redux/userSlice'
import { addAssign } from '../redux/balanceSlice'

function PiggySubtractMoney(props) {



/**************** Redux  **********************/

    const dispatch = useDispatch()

    function handleReduxUpdate(pigObj){
       dispatch(updatePiggy(pigObj))
       let returnedMoney = props.piggy.current_balance - pigObj.current_balance
       dispatch(addAssign(returnedMoney))
    }



/**************** Event Handlers  **********************/

    const [removeAmount, setRemoveAmount] = useState(0)
    const [submit, setSubmit] = useState(false)
   
    const newBalance = props.piggy.current_balance - removeAmount

    function handleSubmit(e){
        e.preventDefault()
        setSubmit(true)
       fetch(`http://localhost:3000/api/v1/piggy_banks/${props.piggy.id}`, {
           method: "PATCH",
           headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({current_balance: newBalance}),
       })
       .then((r) => r.json())
       .then((updatedPiggy) => {
           handleReduxUpdate(updatedPiggy)
           props.onHide()
           setSubmit(false)
           setRemoveAmount(0)
       })
    }


/**************** JSX  **********************/

    return (
        
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Remove Money From:  {props.piggy.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {submit ? <Spinner animation="border" variant="success" />
                :
                <Form onSubmit={handleSubmit}>
                    <Form.Group  controlId="formGridPassword">
                    <Form.Label>Remove From Balance $:</Form.Label>
                        <Form.Control 
                            required
                            type="number" 
                            step="0.01"
                            placeholder="0.00" 
                            value={removeAmount}
                            onChange={(e) => setRemoveAmount(e.target.value)}/>
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="outline-dark"  type="submit">
                            Remove
                        </Button>
                    </Modal.Footer>
                    
                </Form>
                }
            </Modal.Body>
           
            </Modal>
    )
}

export default PiggySubtractMoney
