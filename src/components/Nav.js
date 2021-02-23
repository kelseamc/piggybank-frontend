import React from "react"
import Button from "react-bootstrap/esm/Button";
import Menu from 'react-burger-menu/lib/menus/stack'
import { useDispatch, useSelector } from "react-redux";
import {  NavLink, useHistory } from "react-router-dom";
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
       
            <div >
                <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }  >
                   
                {isLoggedIn ? (<div className="nav-header" >
                       <h2>Hello, {userName}!</h2>
                        <h3>Total Savings: ${totalSavings.toFixed(2)}</h3>
                    </div> ) : (<h2>Please Login or Sign Up</h2>) }
                    
                    <div className="bm-item-list">
                       
                       
                        {isLoggedIn ? ( <NavLink 
                                            className="bm-item" 
                                            style={{ textDecoration: 'none' }} 
                                            to="/dashboard" > 
                                        Dashboard
                                        </NavLink> ) : null }
                      
                        <br />
                        
                        {isLoggedIn ? (<NavLink 
                                            className="bm-item" 
                                            to="/accounts"
                                            style={{ textDecoration: 'none' }}  > 
                                        Accounts
                                        </NavLink>) : null }
                     
                        <div>
                        {isLoggedIn ? (<Button className="log-out" variant="light" onClick={handleLogOut}>Log Out</Button>) : null }
                            
                        </div>
                    </div>
            
                </Menu>
            </div>
        </div>    
        
    )
}

export default Nav