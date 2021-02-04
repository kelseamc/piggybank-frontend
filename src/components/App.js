import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import HomePage from "./pages/HomePage"
import Dashboard from "./pages/Dashboard"
import Accounts from "./pages/Accounts"
import { Route, Switch } from "react-router-dom"

import Nav from "./Nav"
import { setAccounts, setPiggy, setTransactions, setName } from "../redux/userSlice";
import { setAssign, setTotal } from "../redux/balanceSlice";


function App() {

const dispatch = useDispatch() 
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/users/1')
    .then((r) => r.json())
    .then((userObj) => {
      dispatch(setAccounts(userObj.accounts))
      dispatch(setPiggy(userObj.piggy_banks))
      dispatch(setTransactions(userObj.trasactions))
      dispatch(setName(userObj.name))
      handleMoney(userObj)
    })
  })

  function handleMoney(userObj){
    let savings = 0
    userObj.accounts.map((account) => savings += account.total)
    dispatch(setTotal(savings))
    let inPiggy = 0 
    userObj.piggy_banks.map((piggy) => inPiggy += piggy.current_balance)
    let toBeAssigned = savings - inPiggy
    dispatch(setAssign(toBeAssigned))

  }

 return (
  <div className="app">
     <div id="outer-container">
        <div className="right"> 
            <div>
                <div className="bm-overlay"></div>
            </div>
  
            <Nav />
            
          </div>
       
 
          <Switch>

            <Route exact path="/" >
              <HomePage />
            </Route>

            <Route exact path="/dashboard" >
              <Dashboard />
            </Route>

            <Route exact path="/accounts" >
              <Accounts />
            </Route>

          </Switch>
      </div>
  </div>
 )

}

export default App;
