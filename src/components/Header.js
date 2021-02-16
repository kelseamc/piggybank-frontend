import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from './headerLogo.png'

function Header() {

    const history = useHistory()
    function handleClick(){
        history.push("/dashboard")
    }
    return (
        <div>
            <img  onClick={handleClick} className="head-logo" src={logo} alt="piggybank logo" />
          
        </div>
    )
}

export default Header
