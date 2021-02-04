import React from "react"
import { push as Menu } from 'react-burger-menu'
import { useSelector } from "react-redux";


function Nav(){

  const totalSavings = useSelector((state) => state.balance.total)
  const userName = useSelector((state) => state.user.name)

    return(
        <div>
       
            <div className="bm-menu-wrap">
                <Menu >
                    <div className="bm-item-list">
                        <h2>Welcome {userName}!</h2>
                        <h3>Total Savings: ${totalSavings}</h3>
                    </div>
                    <div className="bm-item-list">
                        <div >
                            <a className="bm-item" href="/">Home</a>
                        </div>  
                    <br />
                        <div className="bm-item">
                            <a  className="bm-item" href="/dashboard">Dashboard</a>
                        </div> 
                    <br />
                        <div className="bm-item">
                            <a  className="bm-item" href="/accounts">Accounts</a>
                        </div> 
                    </div>
            
                </Menu>
            </div>
        </div>    
        
    )
}

export default Nav