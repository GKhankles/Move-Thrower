import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';
import SignIn from './SignIn.jsx';
import Pokemon from './Pokemon.jsx';
import Gen1Pokemon from './gen1pokemon.txt';
import Gen2Pokemon from './gen2pokemon.txt';
import Gen3Pokemon from './gen3pokemon.txt';
import Gen4Pokemon from './gen4pokemon.txt';
import Gen5Pokemon from './gen5pokemon.txt';
import Gen6Pokemon from './gen6pokemon.txt';
//import firebase from 'firebase';
//import createFirebase from './firebase.js';

export class HomePage extends React.Component {
    constructor (props) {
        super(props);

		this.state = {
		
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
		this.readPokemonFromFile(Gen3Pokemon);
    }

	//May have to change to George's CSV file with all pokemon later
    readPokemonFromFile(fileName) {
        fetch(fileName).then(response => response.text()).then(text => this.getPokemonHelper(text));
		//console.log("HERE");
    }

    getPokemonHelper(text) {
        let pokemonNames = [];
        pokemonNames = text.split("\n"); //if this breaks at some point, change split parameter
        //might need to remove below code when running on github
		for (let i = 0; i < pokemonNames.length; i++) {
			pokemonNames[i] = pokemonNames[i].substring(0, pokemonNames[i].length - 1);
		}
		//above snippet
		this.setState({
			pokemonList: pokemonNames
		});
        return pokemonNames;
    }

    render () {
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
						<Pokemon />
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