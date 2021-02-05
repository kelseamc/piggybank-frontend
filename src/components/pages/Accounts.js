import React from "react"
import AccountContainer from "../AccountContainer"
import TranContainer from "../TranContainer"

function Accounts(){

    return(
        <div className="accounts">
            <div className="account-container">
                <AccountContainer />
            </div>
            <div className="transaction-container">
               <TranContainer />
            </div>
        </div>
    )
}

export default Accounts