import React from "react"
import { push as Menu } from 'react-burger-menu'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



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
                            <Link to="/" > Home</Link>
                            
                        </div>  
                    <br />
                        <div className="bm-item">
                            <Link to="/dashboard" > Dashboard</Link>
                        </div> 
                    <br />
                        <div className="bm-item">
                            <Link to="/accounts" > Accounts</Link>
                        </div> 
                    </div>
            
                </Menu>
            </div>
        </div>    
        
    )
}

export default Nav