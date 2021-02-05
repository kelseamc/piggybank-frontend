import React from 'react'
import { useSelector } from 'react-redux'
import AccountCard from './AccountCard'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import TranContainer from "./TranContainer"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


function AccountContainer() {

    const totalSavings = useSelector((state) => state.balance.total)
    const assign = useSelector((state) => state.balance.assign)

    const assigned = totalSavings - assign


    const userAccounts = useSelector(state => state.user.accounts).map((acc) => <AccountCard key={acc.id} account={acc} />)
    return (
        <>
            <Jumbotron>
                <h1>Total Savings: $ {totalSavings.toFixed(2)}</h1>
                <p>
                    Amount of Money Assigned to Piggy Banks: ${assigned.toFixed(2)}
                </p>
                <p>
                    Amount of Money Available to be Assigned: ${assign.toFixed(2)}
                    
                </p>
                <Button variant="primary">Add New Account</Button>
            </Jumbotron>
            <Tabs defaultActiveKey="Account" id="uncontrolled-tab-example">
                <Tab eventKey="Account" title="Accounts">
                    {userAccounts}
                </Tab>
                <Tab eventKey="transaction" title="Transactions">
                    <TranContainer />
                </Tab>
                
            </Tabs>
            
        </>
  
    )
}

export default AccountContainer
