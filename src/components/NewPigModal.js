import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import PiggyBankForm from './PiggyBankForm'

function NewPigModal(props) {
  

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create a New Piggy Bank
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <PiggyBankForm />
            </Modal.Body>
      
            <Modal.Footer>
                <Button variant="outline-dark" onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NewPigModal
