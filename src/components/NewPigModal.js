import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'

import PiggyBankForm from './PiggyBankForm'
import Spinner from 'react-bootstrap/Spinner'


function NewPigModal(props) {
  const [submit, setSubmit] = useState(false)

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
                {submit ? <Spinner animation="border" variant="success" /> :
                <PiggyBankForm setSubmit={setSubmit} onHide={props.onHide} />}
            </Modal.Body>
      
           
            </Modal>
        </div>
    )
}

export default NewPigModal
