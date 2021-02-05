import React from 'react'
import { useSelector } from 'react-redux'
import AccountCard from './AccountCard'

function AccountContainer() {

    const userAccounts = useSelector(state => state.user.accounts).map((acc) => <AccountCard key={acc.id} account={acc} />)
    return (
        <div>
            {userAccounts}
        </div>
    )
}

export default AccountContainer
