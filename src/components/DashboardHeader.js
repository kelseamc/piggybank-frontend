import React from 'react'
import { useSelector } from 'react-redux'
import DashChart from './DashChart'




function DashboardHeader() {
    const userName = useSelector((state) => state.user.name)
    const toBe = useSelector((state) => state.balance.assign)

    

    return (
        <>
            <div>
                <h1>Welcome {userName}!! </h1>
                <h3>Left to be Assigned: ${toBe}</h3>
            </div>
            <div>
                <DashChart />
            </div>
        </>
    )
}

export default DashboardHeader
