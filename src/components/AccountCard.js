import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import { Icon } from '@iconify/react';
import deleteForeverOutline from '@iconify-icons/mdi/delete-forever-outline';
import Button from 'react-bootstrap/Button'
import LogTran from './LogTran'
import { useDispatch } from 'react-redux';
import { deleteAccount } from '../redux/userSlice';
import { subtractAssign, subtractTotal } from '../redux/balanceSlice';



function AccountCard({account}) {
    const [modalLogShow, setModalLogShow] = useState(false)
    const dispatch = useDispatch()

    function  handelReduxRemoveAccount(){
        dispatch(deleteAccount(account))
        dispatch(subtractTotal(account.total))
        dispatch(subtractAssign(account.total))
    }
  
    function handleRemove(){
        fetch(`http://localhost:3000/api/v1/accounts/${account.id}`, {
           method: "DELETE"
       })
       .then((r) => r.json())
       .then(() => {
          handelReduxRemoveAccount()
       })
    }

    return (
        <>
            <br />
             <Card >
                <Card.Header className="text-center">
                    {account.name}
                   
                 
                 </Card.Header>
                <Card.Body className="text-center">
                    <Card.Title>Current Balance: ${account.total}</Card.Title>
                  
                    <Button onClick={() => setModalLogShow(true)} variant="outline-dark"> Log Transaction </Button>
                </Card.Body>
                <Card.Footer>
                <Icon 
                        className="account-remove"
                        onClick={handleRemove} 
                        icon={deleteForeverOutline} 
                        color="grey" 
                        height="2em" 
                        />
                 
                </Card.Footer>
             </Card>
            <LogTran key={account.id} account={account} show={modalLogShow} onHide={() => setModalLogShow(false)} />
      </>
    )
}

export default AccountCard
