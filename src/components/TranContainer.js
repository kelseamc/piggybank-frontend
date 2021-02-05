import React from 'react'
import { useSelector } from 'react-redux'
import TranRow from './TranRow'
import Table from 'react-bootstrap/Table'

function TranContainer() {

    const userTransactions = useSelector((state) => state.user.transactions)

  
    return (
        <Table  hover size="sm">
            <thead>
                <tr>
                <th>Date</th>
                <th>Account</th>
                <th>Account Number</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Remove</th>
                   
                </tr>
            </thead>
            <tbody>
            {userTransactions ? userTransactions.map((tran) => <TranRow key={tran.id} transaction={tran} />) : null}
            </tbody>
        </Table>
    )
}

export default TranContainer

