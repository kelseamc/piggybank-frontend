import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTransaction, updateAccountTotal } from '../redux/userSlice'
import { addAssign, addTotal, subtractAssign, subtractTotal } from '../redux/balanceSlice'


function TranRow({transaction}) {


/***************   Redux    ***********************/
    const dispatch = useDispatch()
    const account = useSelector((state) => state.user.accounts).find((acc) => acc.id === transaction.account_id)
    function handleReduxDeleteTran(){
         dispatch(deleteTransaction(transaction))
    }

    function handleReduxBalance(account){
        dispatch(updateAccountTotal(account))
        if (transaction.category === "Deposit") {
            dispatch(subtractAssign(transaction.amount))
            dispatch(subtractTotal(transaction.amount))
         }
         else { 
             
            dispatch(addAssign(transaction.amount))
            dispatch(addTotal(transaction.amount))
         }
    }


/*************** Event Handlers    ***********************/
    

    function handleDelete(){
        
        fetch(`https://pigbankk.herokuapp.com/api/v1/transactions/${transaction.id}`, {
            method: "DELETE"
        })
        .then((r) => r.json())
        .then(() => {
            
            updateAccount()
            
        })

    }
    
    let newBalance = 0

    function updateAccount(){
        (transaction.category === "Deposit" ? 
            newBalance = parseFloat(account.total) - parseFloat(transaction.amount) 
            : 
            newBalance = parseFloat(account.total) + parseFloat(transaction.amount) )

            
        fetch(`https://pigbankk.herokuapp.com/api/v1/accounts/${transaction.account_id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
             },
            body: JSON.stringify({total: newBalance}),
        })
        .then((r) => r.json())
        .then((account) => {
           
            handleReduxBalance(account)
            handleReduxDeleteTran()
        })
    }

/***************   JSX    ***********************/

    return (
        <>
            <tr className={transaction.category}>
                <td>{transaction.created_at.slice(0,10)}</td>
                <td>{transaction.account.name}</td> 
                 <td>{transaction.account.account_number}</td>
                <td>${(transaction.amount).toFixed(2)}</td>
                <td>{transaction.category}</td>
                <td>
                    <Button onClick={handleDelete} variant="outline-dark">X</Button>
                </td>
             </tr>
        </>
    )
}

export default TranRow
