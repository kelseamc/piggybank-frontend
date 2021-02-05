import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'

import Button from 'react-bootstrap/Button'
import LogTran from './LogTran'



function AccountCard({account}) {
    const [modalLogShow, setModalLogShow] = useState(false)
  

    return (
        <>
             <Card className="text-center">
                <Card.Header>{account.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Current Balance: ${account.total}</Card.Title>
                  
                    <Button onClick={() => setModalLogShow(true)} variant="outline-dark"> Log Transaction </Button>
                </Card.Body>
             </Card>
            <LogTran key={account.id} account={account} show={modalLogShow} onHide={() => setModalLogShow(false)} />
        </>
    )
}

export default AccountCard
