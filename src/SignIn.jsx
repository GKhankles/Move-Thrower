import React from 'react';
import './App.css';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import createFirebase from './firebase.js';
import {HomePage} from './HomePage.jsx';

export class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.sendLogIn = this.sendLogIn.bind(this);
        this.sendSignUp = this.sendSignUp.bind(this);
        this.sendSignOut = this.sendSignOut.bind(this);
        this.signInDisplay = this.signInDisplay.bind(this);
        this.loggedInDisplay = this.loggedInDisplay.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.resetErrors = this.resetErrors.bind(this);
		this.updateUserInfo = this.updateUserInfo.bind(this);
        this.savePokemon = this.savePokemon.bind(this);
        let fbInitialized = false;

		if (this.props.state) {
			fbInitialized = true;
		}

        this.state = {
            signedIn: false,
            uid: "",
            username: "",
            password: "",
            loginError: "",
            signUpError: "",
            preference: "",
            current:"",
            fireBaseInitialized: fbInitialized,
            isButtonDisabled: false,
        };
    }

    //function that will bring the user info back to App.js through a passed in function
    updateUserInfo() {
        //Call the callback function here
    }

    updateEmail(event) {
        this.setState({
            username: event.target.value,
            isButtonDisabled: false
        });
    }

    //Updates the password whenever the user changes it
    updatePassword(event) {
        this.setState({
            password: event.target.value,
            isButtonDisabled: false
        });
    }

    resetErrors() {
        this.setState({
            logInError: false,
            signUpError: false
        });
    }

    sendLogIn(){
        this.resetErrors();
        //TODO Redirect user to user page, where they can change account info.
        firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                let userInfo;
                firebase.database().ref('users/' + user.uid).once('value', (snap)=>{
                    userInfo = snap.val();
                });
                this.setState({
                    signedIn: true,
                    uid: user.uid,
                    preference: ""
                });
                
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                this.setState({
                    logInError: errorMessage,
                    isButtonDisabled: true
                });
            });
    
    }

    sendSignUp() {
        this.resetErrors();
        firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                var database = firebase.database();
                firebase.database().ref('users/' + user.uid).set(this.state);
                this.setState({
                    signedIn: true,
                    uid: user.uid,
                    preference: ""
                });

                //TODO Redirect user to finish signing up here
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                this.setState({
                    signUpError: errorMessage,
                    isButtonDisabled: true
                });
            });
    }

    sendSignOut(){
        this.resetErrors();
        //TODO Redirect user to user page, where they can change account info.
        firebase.auth().signOut()
            .then(() => {
                this.setState({
                    signedIn: false,
                    uid: "",
                    username: "",
                    password: "",
                    preference: "",
                    isButtonDisabled: false,
                });
                
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                this.setState({
                    logInError: errorMessage,
                    isButtonDisabled: true
                });
            });
    }

    componentDidMount() {
        if (this.state.fireBaseInitialized === false) {
            createFirebase();
            this.setState({
                fireBaseInitialized: true
            });
        }
    }

    savePokemon(){
        this.setState({
            preference: this.props.preference
        })
        if(this.state.signedIn){
            firebase.database().ref('users/' + this.state.uid).set(this.state)
        }
    }

    //function returning display for the sign in display
    signInDisplay() {

        let signUpErrorMessage = this.state.signUpError;
        const signUpError = signUpErrorMessage !== "" ? <p>{signUpErrorMessage}</p> : null;

        let logInErrorMessage = this.state.logInError;
        const logInError = logInErrorMessage !== "" ? <p>{logInErrorMessage}</p> : null;

        let signIn = this.state.signedIn;
        const signInRedirect = signIn ? <Redirect push to={{ pathname: "/", state: { uid: this.state.uid, username: this.state.username, password: this.state.password, 
             fireBaseInitialized: this.state.fireBaseInitialized }}} /> : null;

        return (
            <div classname="signInDisplay">
                <b>Email: </b>
                <input type="text" onChange={this.updateEmail} onBlur={this.updateEmail} />
				<br/>
                <b>Password: </b>
                <input type="password" onChange={this.updatePassword} onBlur={this.updatePassword}/>
                <div className="signInButtons">
                    <button onClick={this.sendLogIn} disabled={this.state.isButtonDisabled}>Log In</button>
                    <button onClick={this.sendSignUp} disabled={this.state.isButtonDisabled}>Sign Up</button>
                </div>
                <div style={{fontSize: 15}}>
                    {logInError}
                    {signUpError}
                    {signInRedirect}
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
                    <button onClick = {this.sendSignOut} disabled={this.state.isButtonDisabled}>Log Out</button>
                </div>
                <div className="loggedInButtons">
                    <button onClick = {this.savePokemon} disabled={this.state.isButtonDisabled}>Save</button>
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