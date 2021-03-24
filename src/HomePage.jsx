import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';
import SignIn from './SignIn.jsx';
import Pokemon from './Pokemon.jsx';
//import firebase from 'firebase';
//import createFirebase from './firebase.js';

export class HomePage extends React.Component {
    constructor (props) {
        super(props);

		this.state = {
			pokemonList: []
		};
    }
    
    /*The Idea here is that since our website is technically only one page, there is nearly 
	* no way that we can encounter the error that we were getting with Badger-Bytes. I think
	* the only situation that could cause us to call more than once would be when the user needs
	* to reset their password.
	*/
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
		this.sampleFetch();
    }

	sampleFetch() {
		fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
		.then(response => response.json())
		.then(pokemon => console.log(pokemon));
	}

    render () {
		console.log("Pokemon List: ", this.state.pokemonList);
        return (
			<div className = "App" style={{fontSize: 25}}>
				<header className="App-header">
					<h1>Pokemon Move Thrower!</h1>
					{/*We also need a way to make this horizontal instead of vertical*/}
					<SignIn />
				</header>
				<div className="App-mid">
					<div className="App-body">
						<b>Attacking Pokemon</b>
						<Pokemon />
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
						<Pokemon pokemonList={this.state.pokemonList}/>
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