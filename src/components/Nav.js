import React from "react"
import Button from "react-bootstrap/esm/Button";
import { push as Menu } from 'react-burger-menu'
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { initialize, login } from "../redux/userSlice";




function Nav(){

  const totalSavings = useSelector((state) => state.balance.total)
  const userName = useSelector((state) => state.user.name)
  const isLoggedIn = useSelector((state) => state.user.loggedIn)
  const dispatch = useDispatch()
  const history = useHistory()

    function handleLogOut(){
        localStorage.removeItem("token")
        dispatch(login(false))
        dispatch(initialize())
        history.push("/")
    }
    return(
        <div>
       
            <div className="bm-menu-wrap">
                <Menu >
                   
                {isLoggedIn ? (<div className="bm-item-list">
                       <h2>Welcome {userName}!</h2>
                        <h3>Total Savings: ${totalSavings}</h3>
                    </div> ) : (<h2>Please Login or Sign Up</h2>) }
                    <div className="bm-item-list">
                        <div >
                           {/* {isLoggedIn ? null : (<Link to="/" > Home</Link>) } */}
                            
                          
                        </div>  
                    <br />
                        <div className="bm-item">
                        {isLoggedIn ? ( <Link to="/dashboard" > Dashboard</Link> ) : null }
                        </div> 
                        <br />
                        <div className="bm-item">
                        {isLoggedIn ? (<Link to="/accounts" > Accounts</Link>) : null }
                        </div>
                        <div>
                        {isLoggedIn ? (<Button onClick={handleLogOut}>Log Out</Button>) : null }
                            
                        </div>
                    </div>
            
                </Menu>
            </div>
        </div>    
        
    )
}

export default Nav