import React, {useEffect, useState} from "react"
import Header from './Header'
import HomePage from "./pages/HomePage"
import Dashboard from "./pages/Dashboard"
import Accounts from "./pages/Accounts"
import Spinner from 'react-bootstrap/Spinner'
import { Redirect, Route, Switch } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { setId, setAccounts, setPiggy, setTransactions, setName, login } from '../redux/userSlice'
import { setAssign, setTotal } from "../redux/balanceSlice";

import Nav from "./Nav"

function App() {

  const dispatch = useDispatch() 
  const loggedIn = useSelector((state) => state.user.loggedIn)

   useEffect(() => {
     const token = localStorage.getItem("token")
      if (token){
        fetch('https://pigbankk.herokuapp.com/api/v1/profile', {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((r) => r.json())
        .then((userObj) => {
          setCurrentUser(userObj)
         
        })
      }
    })

    function setCurrentUser(userObj){
          dispatch(login(true))
          dispatch(setId(userObj.id))
          dispatch(setAccounts(userObj.accounts))
          dispatch(setPiggy(userObj.piggy_banks))
          dispatch(setTransactions(userObj.transactions))
          dispatch(setName(userObj.name))

          let savings = 0
          if (userObj.accounts){
                userObj.accounts.map((account) => savings += account.total)
              }
          dispatch(setTotal(savings))
          let inPiggy = 0 
          if (userObj.piggy_banks){
                userObj.piggy_banks.map((piggy) => inPiggy += piggy.current_balance)
              }
          let toBeAssigned = savings - inPiggy
          dispatch(setAssign(toBeAssigned))
  
    }
  
 return (
  <div  id="outer-container">
  

     
            <Nav />
            <div id="page-wrap">
            <Header />
          <Switch>
            

            <Route exact path="/" >
              {loggedIn ?
              (<Redirect to="/dashboard" />)
              :
              (<HomePage setCurrentUser={setCurrentUser}/>)}
            </Route>

            <Route exact path="/dashboard" >
              {loggedIn ?
              (<Dashboard />)
              :
              (<Redirect to="/" />)}
            </Route>

            <Route exact path="/accounts" >
              {loggedIn ?
              (<Accounts />)
              :
              (<Redirect to="/" />)}
            </Route>
       

          </Switch>
          </div>
         

  </div>
 )

}

export default App;
