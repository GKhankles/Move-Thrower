//import React from 'react';

export class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.signInDisplay = this.signInDisplay.bind(this);
        this.loggedInDisplay = this.loggedInDisplay.bind(this);
        this.state = {
            uid: "",
            username: "",
            password: ""
        };
    }

    //function that will bring the user info back to App.js through a passed in function
    updateUserInfo() {
        //Call the callback function here
    }

    //function returning display for the sign in display
    signInDisplay() {
    
        return (
            <div classname="signInDisplay">
                <p>Email: </p>
                <input type="text" />
                <p>Password: </p>
                <input type="password" />
                <div className="signInButtons">
                    <button>Log In</button>
                    <button>Sign Up</button>
                </div>
            </div>
        );
    }

    //function returning the display for the logged in display
    loggedInDisplay() {
        let displayUsername = this.state.username;
        return (
            <div classname="loggedInDisplay">
                <p>Hello, {displayUsername}!</p>
                <div className="loggedInButtons">
                    <button>Log Out</button>
                </div>      
            </div> 
        );
    }

    render() {
        
        let curUID = this.state.uid;
        let accountDisplay = curUID === "" ? this.signInDisplay() : this.loggedInDisplay();
        return (
            <div className = "signIn">
                {accountDisplay}
            </div>
        );
    }
}

export default SignIn;