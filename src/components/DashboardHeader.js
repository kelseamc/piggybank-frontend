import React from 'react'
import { useSelector } from 'react-redux'
import DashChart from './DashChart'

function DashboardHeader({setFilter, filter}) {
    const userName = useSelector((state) => state.user.name)
    const toBe = useSelector((state) => state.balance.assign)
   
    return (
        <div className="dash-top">
           
            <div className="header-tile" id="chart">
                <DashChart setFilter={setFilter} filter={filter}/>
            </div>
            <div className="header-tile" id="head-text">
                <h1>Welcome {userName}!</h1>
                <br />
                <h3>Left to be Assigned: ${toBe.toFixed(2)}</h3>
            </div>
        </div>
    )
}

export default DashboardHeader
