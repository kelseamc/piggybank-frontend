import React, {useState} from "react"
import Button from "react-bootstrap/Button"
import Login from "../Login"
import SignUp from "../SignUp"


function HomePage({setCurrentUser}){
    const [logoShow, setLogoShow] = useState(true)
    const [form, setForm] = useState(<Login setCurrentUser={setCurrentUser} />)

    function handleLoginClick(){
        setLogoShow(false)
        setForm(<Login setCurrentUser={setCurrentUser} />)
    }

    function handleSignupClick(){
        setLogoShow(false)
        setForm(<SignUp setCurrentUser={setCurrentUser} />)
    }
    


    return(
        <div className="homepage">
            <div className="background">
               
                <div className="logo">
                    
                    
                    {logoShow ? null
                    :
                    form }
                </div>
                <div className="button-login" >
                <Button variant="outline-dark" onClick={handleLoginClick}>Login</Button>
              
                <Button variant="outline-dark" onClick={handleSignupClick}>Sign Up</Button>
                </div>
            </div>

         
        </div>
    )
}

export default HomePage