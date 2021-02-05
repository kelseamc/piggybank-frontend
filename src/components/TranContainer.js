import React from 'react'
import { useSelector } from 'react-redux'
import TranRow from './TranRow'
import Table from 'react-bootstrap/Table'

function TranContainer() {

    const userTransactions = useSelector((state) => state.user.transactions)
    console.log(userTransactions)
  
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
              
                <th>Account</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Remove</th>
                   
                </tr>
            </thead>
            <tbody>
                {userTransactions}
            </tbody>
        </Table>
    )
}

export default TranContainer

