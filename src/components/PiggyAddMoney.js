import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import { useDispatch } from 'react-redux'
import { updatePiggy } from '../redux/userSlice'
import { subtractAssign } from '../redux/balanceSlice'




function PiggyAddMoney(props) {

/**************** Redux  **********************/
    const dispatch = useDispatch()


    function handleReduxUpdate(pigObj){
        dispatch(updatePiggy(pigObj))
        let addedMoney = pigObj.current_balance - props.piggy.current_balance
        dispatch(subtractAssign(addedMoney))
    }

/**************** Event Handlers  **********************/

    const [addAmount, setAddAmount] = useState(0)
    const [submit, setSubmit] = useState(false)

    const newBalance = props.piggy.current_balance + parseInt(addAmount)

  

    function handleSubmit(e){
        e.preventDefault()
        setSubmit(true)
       fetch(`https://pigbankk.herokuapp.com/api/v1/piggy_banks/${props.piggy.id}`, {
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
          setAddAmount(0)
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
                Assign Money to:  {props.piggy.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
           
                {submit ? <Spinner animation="border" variant="success" />:
                <Form onSubmit={handleSubmit}>
                    <Form.Group  controlId="formGridPassword">
                    <Form.Label>Add to Balance $:</Form.Label>
                        <Form.Control 
                            required
                            type="number" 
                            step="0.01"
                            placeholder="0.00" 
                            value={addAmount}
                            onChange={(e) => setAddAmount(e.target.value)}/>
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="outline-dark"  type="submit">
                            Add
                        </Button>
                    </Modal.Footer>
                  
                </Form>
                }
                
            </Modal.Body>
           
            </Modal>
     
    )
}

export default PiggyAddMoney
