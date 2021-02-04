import React from "react"

function HomePage(){

    return(
        <div className="homepage">
            <div className="background">
                <div className="logo">
                    <h1>PiggyBank</h1>
                    <img src="https://ak.picdn.net/shutterstock/videos/1006763956/thumb/9.jpg" alt="piggybank" />
                </div>
                <div className="button-login">
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </div>

        </div>
    )
}

export default HomePage