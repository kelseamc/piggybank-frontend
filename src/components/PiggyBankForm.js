import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addPiggy } from '../redux/userSlice'
import { subtractAssign } from '../redux/balanceSlice'

function PiggyBankForm() {
   
    /*************  Redux    *************/


    const userId = useSelector(state => state.user.id)
    const dispatch = useDispatch()

    function handleReduxPig(pigObj){
        dispatch(addPiggy(pigObj))
        dispatch(subtractAssign(pigObj.current_balance))
    }

    /*************  Form Handlers *************/

    const [name, setName] = useState("")
    const [goal, setGoal] = useState(0)
    const [currentBalance, setCurrentBalance] = useState(0)
    const [category,  setCategory] = useState("")


    const newPiggy = { 
        name, 
        goal: parseFloat(goal), 
        current_balance: parseFloat(currentBalance), 
        category, 
        user_id: userId
    }
   


    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/piggy_banks', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(newPiggy),
        })
        .then((r) => r.json())
        .then((pigDb) => {
           handleReduxPig(pigDb) 
        })
    }
    
    /*************  JSX  *************/



    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Piggy Bank Title</Form.Label>
                <Form.Control
                 
                 placeholder="Title" 
                 value={name}
                 onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            
            <Form.Row>
                <Form.Group  controlId="formGridEmail">
                <Form.Label>Goal Amount $:</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="0.00"
                    step="0.01"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)} />
                </Form.Group>

                <Form.Group  controlId="formGridPassword">
                <Form.Label>Assigned Amount $:</Form.Label>
                <Form.Control 
                    type="number" 
                    step="0.01"
                    placeholder="0.00" 
                    value={currentBalance}
                    onChange={(e) => setCurrentBalance(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Category:</Form.Label>
                    <Form.Control 
                        as="select" custom
                       
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        <option>Choose ...</option>
                        <option>Emergency</option>
                        <option>Personal</option>
                        <option>Retirement</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Button variant="outline-dark"  type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default PiggyBankForm
