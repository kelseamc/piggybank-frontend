import React, { useState } from "react"
import PiggyContainer from '../PiggyContainer'
import DashboardHeader from '../DashboardHeader'



function Dashboard(){

    const[filter, setFilter] = useState("")


    return(
     
                <div className="dashboard">
                    <DashboardHeader setFilter={setFilter} filter={filter}/>
                    <PiggyContainer category={filter} />
                 </div>
    
    )
}

export default Dashboard