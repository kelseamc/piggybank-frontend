import React, {useState} from "react"
import Button from "react-bootstrap/Button"
import Login from "../Login"
import SignUp from "../SignUp"


function HomePage({setCurrentUser}){
    const [logoShow, setLogoShow] = useState(true)
    const [form, setForm] = useState(<Login setCurrentUser={setCurrentUser} />)

    function handleLoginClick(){
        setLogoShow(false)
        setForm(<>
                <Login setCurrentUser={setCurrentUser} />   
                <span>Don't have an account?</span><Button variant="link" onClick={handleSignupClick}>Sign Up</Button>
                </>)
    }

    function handleSignupClick(){
        setLogoShow(false)
        setForm(<>
                <SignUp setCurrentUser={setCurrentUser} />  
                <span>Already have an account?</span><Button variant="link" onClick={handleLoginClick}>Login</Button>
                </>)
    }
    


    return(
        <div className="homepage">
            <div className="background">
               
                <div className="logo">
                    {logoShow ? 
                     <>
                        <img src="https://media.istockphoto.com/vectors/piggy-bank-with-coin-symbol-of-new-year-2019-vector-illustration-vector-id1080435824?k=6&m=1080435824&s=612x612&w=0&h=5VdUB_2S7y2MYL70XHnpbgr0Kq5m6C7LjPQNERrA6o0=" alt="piggybank"/> 
                        <div className="button-login" >
                        <Button variant="outline-dark" onClick={handleLoginClick}>Login</Button>
                        </div>
                        <div className="button-login" >
                        <span>Don't have an account?</span><Button variant="link" onClick={handleSignupClick}>Sign Up</Button>
                        </div>
                     </>
                    :
                    form 
                    }
                </div>  
            </div>

         
        </div>
    )
}

export default HomePage