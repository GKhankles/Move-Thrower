import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';
//import firebase from 'firebase';
//import createFirebase from './firebase.js';

export class HomePage extends React.Component {
    constructor (props) {
        super(props);
        /*this.updateMenuItem = this.updateMenuItem.bind(this);

		let userInfo = this.props.location.state;
        this.state = {
			hasUpdated: false,
            uid: userInfo.uid,
            email: userInfo.email,
            phone: userInfo.phone,
            address: userInfo.address,
            type: userInfo.type,
            paymentType: userInfo.paymentType,
            fireBaseInitialized: userInfo.fireBaseInitialized,
            isSignOut: false,
            cart: (userInfo.cart||[]),
            menu: [],
            cart: (this.props.cart||[])
        };*/
    }
    
    //When AdminMenu is first called, retrieves menu info from the backend
    componentDidMount() {
        /*let fbMenu = [];
        //call firebase here for menu info
        firebase.database().ref('Menu/').once('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                let menuItem = {
                    iid: childKey,
                    name: childData.name,
                    picture: childData.picture,
                    price: childData.price,
                    availability: childData.availability
                };
                fbMenu.push(menuItem);
                 // ...
            });
			this.setState({
				hasData: true,
				menu: fbMenu,
				hasUpdated: true
			});
        });*/
    }

    render () {
        return (
			<div className = "App" style={{fontSize: 25}}>
				<header className="App-header">
					<h1>Pokemon Move Thrower!</h1>
				</header>
				<div className="App-mid">
					<div className="App-body">
						<b>Attacking Pokemon</b>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<b>Level:</b>
						
						<br/>
						<b>HP: </b>
						<br/>
						<b>ATK: </b>
						<br/>
						<b>DEF: </b>
						<br/>
						<b>SP ATK: </b>
						<br/>
						<b>SP DEF: </b>
						<br/>
						<b>SPD: </b>
					</div>
					<div className="App-body">
						<br/>
						<br/>
						<button className="button" style={{fontSize: 18, backgroundColor:"white"}}>Switch Roles</button>
						<br/>
						<br/>
						<br/>
						<button className="button">CALCULATE</button>
						<br/>
						<br/>
						<b>Advanced Options</b>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<button className="button" style={{fontSize: 18, backgroundColor:"white"}}>Reset Settings</button>
						<br/>
						<br/>
						<b style={{textDecoration: "underline"}}>Recommended Moves</b>
					</div>
					<div className="App-body">
						<b>Defending Pokemon</b>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<b>Level:</b>
						
						<br/>
						<b>HP: </b>
						<br/>
						<b>ATK: </b>
						<br/>
						<b>DEF: </b>
						<br/>
						<b>SP ATK: </b>
						<br/>
						<b>SP DEF: </b>
						<br/>
						<b>SPD: </b>
					</div>
				</div>
				<div className="App-body" style={{display:"flex"}}>
					<b>final listings</b>
				</div>
			</div>
        );
    }
}

export default HomePage;