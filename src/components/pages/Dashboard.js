import React from "react"
import { useSelector } from "react-redux";
import PiggyContainer from '../PiggyContainer'


function Dashboard(){

    const userName = useSelector((state) => state.user.name)
    const toBe = useSelector((state) => state.balance.assign)

    return(
        <div className="dashboard">
           
                <div className="dash-top">
                    <h1>Hello {userName}!</h1>
                    <h4>To Be Assigned: ${toBe}</h4>
                </div>
                <div className="bank-container">
                    <PiggyContainer />
                </div>
           
        </div>
    )
}

export default Dashboard