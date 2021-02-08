import React from "react"

import HomePage from "./pages/HomePage"
import Dashboard from "./pages/Dashboard"
import Accounts from "./pages/Accounts"
import { Route, Switch } from "react-router-dom"

import Nav from "./Nav"



function App() {




  // const dispatch = useDispatch() 
  //  useEffect(() => {
  //     fetch(`http://localhost:3000/api/v1/users/4`)
  //     .then((r) => r.json())
  //     .then((userObj) => {
  //       console.log(userObj)
  //       dispatch(setId(userObj.id))
  //       dispatch(setAccounts(userObj.accounts))
  //       dispatch(setPiggy(userObj.piggy_banks))
  //       dispatch(setTransactions(userObj.transactions))
  //       dispatch(setName(userObj.name))
  //       handleMoney(userObj)
  //     })
  //   },[])

  // function handleMoney(userObj){
  //   let savings = 0
  //   userObj.accounts.map((account) => savings += account.total)
  //   dispatch(setTotal(savings))
  //   let inPiggy = 0 
  //   userObj.piggy_banks.map((piggy) => inPiggy += piggy.current_balance)
  //   let toBeAssigned = savings - inPiggy
  //   dispatch(setAssign(toBeAssigned))

  // }


  
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
