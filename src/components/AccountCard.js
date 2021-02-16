import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import { Icon } from '@iconify/react';
import deleteForeverOutline from '@iconify-icons/mdi/delete-forever-outline';
import Button from 'react-bootstrap/Button'
import LogTran from './LogTran'
import { useDispatch } from 'react-redux';
import { deleteAccount, deleteAccountTransactions } from '../redux/userSlice';
import { subtractAssign, subtractTotal } from '../redux/balanceSlice';



function AccountCard({account}) {
    const [modalLogShow, setModalLogShow] = useState(false)
    const dispatch = useDispatch()

    function  handelReduxRemoveAccount(){
        dispatch(deleteAccount(account))
        dispatch(subtractTotal(account.total))
        dispatch(subtractAssign(account.total))
        dispatch(deleteAccountTransactions(account.id))
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
             <Card className="account-card">
                <Card.Header className="text-center">
                <Card.Title>{account.name}</Card.Title>
                   
                 
                 </Card.Header>
                <Card.Body className="text-center">
                    <h6>Current Balance: ${account.total}</h6>
                  
                    <span className="log-btn">
                    <Button  onClick={() => setModalLogShow(true)} variant="outline-dark"> Log Transaction </Button>
                    </span>
                </Card.Body>
                <Card.Footer>
                    <span className="account-remove">
                        <Icon 
                            onClick={handleRemove} 
                            icon={deleteForeverOutline} 
                            color="grey" 
                            height="2em" 
                        />
                    </span>
                   
                </Card.Footer>
             </Card>
            <LogTran key={account.id} account={account} show={modalLogShow} onHide={() => setModalLogShow(false)} />
      </>
    )
}

export default AccountCard
