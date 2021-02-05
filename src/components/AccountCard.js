import React, { useState } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import LogTran from './LogTran'

function AccountCard({account}) {
    const [modalLogShow, setModalLogShow] = useState(false)
  

    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <h3>
                    {account.name}
                    </h3>
                    <h2>Current Balance: ${account.total}</h2>
                </Container>
                <Button onClick={() => setModalLogShow(true)} variant="outline-dark"> Log Transaction </Button>
            </Jumbotron>

            <LogTran key={account.id} account={account} show={modalLogShow} onHide={() => setModalLogShow(false)} />
        </>
    )
}

export default AccountCard
