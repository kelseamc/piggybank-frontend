import React, {useState} from "react"
import Button from "react-bootstrap/Button"
import Login from "../Login"
import SignUp from "../SignUp"

function HomePage({setCurrentUser}){
    const [logoShow, setLogoShow] = useState(true)
    const [form, setForm] = useState()

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
                <h1>PiggyBank</h1>
                <div className="logo">
                    
                    
                    {logoShow ? <img src="https://i.pinimg.com/736x/31/ec/8f/31ec8f7305fdc8311548f633dcf16a38.jpg" alt="piggybank" />
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