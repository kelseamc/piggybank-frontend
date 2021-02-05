import React from "react"
import PiggyContainer from '../PiggyContainer'
import DashboardHeader from '../DashboardHeader'


function Dashboard(){



    return(
        <div className="dashboard">
           
                <div className="dash-top">
                    <DashboardHeader />
                </div>
                <div className="bank-container">
                    <PiggyContainer />
                </div>
           
        </div>
    )
}

export default Dashboard