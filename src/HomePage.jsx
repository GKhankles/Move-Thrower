import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';
import SignIn from './SignIn.jsx';
import Pokemon from './Pokemon.jsx';
import moveCalculator from './moveCalculator.js';
import MoveList from './MoveList.jsx';
import './global.js';
import Dropdown from './Dropdown';
//import firebase from 'firebase';
//import createFirebase from './firebase.js';

export class HomePage extends React.Component {
    constructor (props) {
        super(props);
		this.retrieveAtkPokemonInfo = this.retrieveAtkPokemonInfo.bind(this);
		this.retrieveDefPokemonInfo = this.retrieveDefPokemonInfo.bind(this);
		this.calculateMoves = this.calculateMoves.bind(this);
		this.switchPokemon = this.switchPokemon.bind(this);
		this.advancedOptions = this.advancedOptions.bind(this);
		this.changeGeneration = this.changeGeneration.bind(this);
		this.getAtkPokemon = this.getAtkPokemon.bind(this);
		this.retrieveWeatherFromList = this.retrieveWeatherFromList.bind(this);
		this.retrieveTerrainFromList = this.retrieveTerrainFromList.bind(this);

		this.moveCalculator = new moveCalculator();
		
		this.weather_types = {
			"Clear": 1,
            "Harsh Sunlight": 2,
            "Rain": 3,
            "Sandstorm": 4,
            "Hail": 5,
            "Shadowy Aura": 6,
            "Fog": 7,
            "Strong Winds": 8,
			"Extremely Harsh Sunlight": 9,
			"Heavy Rain": 10
		};

		this.terrain_types = {
            "Normal" : 1,
            "Electric" : 2,
            "Grassy" : 3,
            "Misty" : 4,
            "Psychic" : 5
        };

		this.weatherList1 = ["Clear"];
		this.weatherList2 = ["Clear", "Harsh Sunlight", "Rain", "Sandstorm"];
		this.weatherList3 = ["Clear", "Harsh Sunlight", "Rain", "Sandstorm", "Hail", "Shadowy Aura"];
		this.weatherList45 = ["Clear", "Harsh Sunlight", "Rain", "Sandstorm", "Hail", "Fog"];
		this.weatherList678 = ["Clear", "Harsh Sunlight", "Rain", "Sandstorm", "Hail", "Fog", "Heavy Rain", "Extremely Harsh Sunlight", "Strong Winds"];

		this.weatherList = null;

		this.terrainList = ["Normal","Electric","Grassy","Misty","Psychic"]

		this.state = {
			atkPkmnInfo: {},
			defPkmnInfo: {},
			isAdvanced: false,
			calculatedMoves: null,
			calculating: false,
			weather: "Clear",
			weatherList: null
		};
		global.advancedToggle = false;
		global.curGeneration = 3;
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
		global.curGeneration = 3;
    }

	//Callback function sent to the Attacking Pokemon component to retrieve pokemon info
	retrieveAtkPokemonInfo(pkmnInfo) {
		this.setState({
			atkPkmnInfo: {...pkmnInfo}
		});
	}

	//Callback function sent to Defending Pokemon component to retrieve pokemon info
	retrieveDefPokemonInfo(pkmnInfo) {
		this.setState({
			defPkmnInfo: {...pkmnInfo}
		});
	}

	retrieveWeatherFromList(selectedWeather){
		this.setState({
			weather: selectedWeather
		});
	}
	
	retrieveTerrainFromList(selectedTerrain){
		this.setState({
			terrain: selectedTerrain
		});
	}

	switchPokemon() {
		console.log("Placeholder for next iteration.");
		console.log(global.pkmn1);
		console.log(global.pkmn2);
		var tempState = global.pkmn1.state;
		global.pkmn1.setState({
		    uid: global.pkmn2.state.uid,
			curPkmn: global.pkmn2.state.curPkmn,
			baseStats: global.pkmn2.state.baseStats,
			ivInfo: global.pkmn2.state.ivInfo,
			evInfo: global.pkmn2.state.evInfo,
			totalStats: global.pkmn2.state.totalStats,
			level: global.pkmn2.state.level,
			nature: global.pkmn2.state.nature,
			status: global.pkmn2.state.status,
			moves: global.pkmn2.state.moves,
			types: global.pkmn2.state.types,
			pkmnImg: global.pkmn2.state.pkmnImg,
			isAdvanced: global.pkmn2.state.isAdvanced,
			readySwap: global.pkmn2.state.readySwap
		});
		global.pkmn2.setState({
			uid: tempState.uid,
			curPkmn: tempState.curPkmn,
			baseStats: tempState.baseStats,
			ivInfo: tempState.ivInfo,
			evInfo: tempState.evInfo,
			totalStats: tempState.totalStats,
			level: tempState.level,
			nature: tempState.nature,
			status: tempState.status,
			moves: tempState.moves,
			types: tempState.types,
			pkmnImg: tempState.pkmnImg,
			isAdvanced: tempState.isAdvanced,
			readySwap: tempState.readySwap
		});
	}
	
	getAtkPokemon(){
		console.log(this.state.atkPkmnInfo);
		return this.state.atkPkmnInfo;
	}

	//Returns a list of the best possible moves that can be used
	calculateMoves(event) {
		console.log("Hello there, inside of calculateMoves");
		/*this.setState({
			calculatedMoves: undefined
		});*/
		this.setState({
			calculating: true
		});
		let calcMoves = this.moveCalculator.moveCalculator(this.state.atkPkmnInfo, this.state.defPkmnInfo, global.curGeneration, {weather: this.weather_types[this.state.weather], terrain: this.terrain_types[this.state.terrain]});
		console.log("calcMoves", calcMoves);
		this.setState({
			calculatedMoves: calcMoves,
			calculating: false
		});
	}

	advancedOptions() {
		global.advancedToggle = !global.advancedToggle;
		this.forceUpdate();
	}

	changeGeneration(event) {
		global.curGeneration = event.target.value;
		console.log("cur generation", global.curGeneration);
		this.setState({
			weather: "Clear"
		});
		this.forceUpdate();
	}

    render () {
		console.log(this.state.atkPkmnInfo);
		let moveList = this.state.calculatedMoves ? <MoveList calculatedMoves={this.state.calculatedMoves} /> : null;
		let calculateButton = !this.state.calculating ? <button className="button" onClick={this.calculateMoves} >CALCULATE</button> : <button className="button" isDisabled={true}>Calculating...</button>;
		let generationSelection = global.advancedToggle ? <div className="App-body">
						<div className="generationRadio" onChange={this.changeGeneration} value={global.curGeneration}>
							<h4>Current Generation {global.curGeneration}</h4>
							<input defaultChecked type="radio" value={3} name="generation"/> 3
							<input type="radio" value={4} name="generation"/> 4
							<input type="radio" value={5} name="generation"/> 5
							<input type="radio" value={6} name="generation"/> 6
							<input type="radio" value={7} name="generation"/> 7
						</div>
					</div>: null;

		let weatherSelection1 = global.advancedToggle && global.curGeneration == 1? 
					<div className="App-body">
						<div className="weatherDropDown" onChange={this.changeWeather}>
							<h4>Weather</h4>
							<Dropdown initial={this.state.weather} names={this.weatherList1} getOption={this.retrieveWeatherFromList}/>
						</div>
					</div>: null;

		let weatherSelection2 = global.advancedToggle && global.curGeneration == 2? 
					<div className="App-body">
						<div className="weatherDropDown" onChange={this.changeWeather}>
							<h4>Weather</h4>
							<Dropdown initial={this.state.weather} names={this.weatherList2} getOption={this.retrieveWeatherFromList}/>
						</div>
					</div>: null;

		let weatherSelection3 = global.advancedToggle && global.curGeneration == 3? 
					<div className="App-body">
						<div className="weatherDropDown" onChange={this.changeWeather}>
							<h4>Weather</h4>
							<Dropdown initial={this.state.weather} names={this.weatherList3} getOption={this.retrieveWeatherFromList}/>
						</div>
					</div>: null;

		let weatherSelection45 = global.advancedToggle && global.curGeneration == 4 || global.curGeneration == 5? 
					<div className="App-body">
						<div className="weatherDropDown" onChange={this.changeWeather}>
							<h4>Weather</h4>
							<Dropdown initial={this.state.weather} names={this.weatherList45} getOption={this.retrieveWeatherFromList}/>
						</div>
					</div>: null;

		let weatherSelection678 = global.advancedToggle && global.curGeneration == 6 || global.curGeneration == 7 || global.curGeneration == 8? 
					<div className="App-body">
						<div className="weatherDropDown" onChange={this.changeWeather}>
							<h4>Weather</h4>
							<Dropdown initial={this.state.weather} names={this.weatherList678} getOption={this.retrieveWeatherFromList}/>
						</div>
					</div>: null;
		
		let terrainSelection = global.advancedToggle ? 
		<div className="App-body">
			<div className="terrainDropDown" onChange={this.changeTerrain}>
				<h4>Terrain</h4>
				<Dropdown initial={this.state.terrain} names={this.terrainList} getOption={this.retrieveTerrainFromList}/>
			</div>
		</div>: null;

        return (
			<div className = "App" style={{fontSize: 25}}>
				<div className="App-hcontainer">
					<header className="App-header">
						<h1>Pokemon Move Thrower!</h1>
					</header>
					<div className="App-login">
						<SignIn preference = {this.state.atkPkmnInfo}/>
					</div>
				</div>
				<div className="App-mid">
					<div className="App-body">
						<b>Attacking Pokemon</b>
						<Pokemon getPkmnInfo={this.retrieveAtkPokemonInfo}/>
					</div>
					<div className="App-body">
						<br/>
						<br/>
						<button className="button" style={{fontSize: 18, backgroundColor:"white"}} onClick={this.switchPokemon}>Switch Roles</button>
						<br/>
						<br/>
						<br/>
						{calculateButton}
						<br/>
						<br/>
						<b>Advanced Options</b>
						<input type="checkbox" style={{height: 20, width: 20, backgroundColor:"white"}} onChange={this.advancedOptions} />
						<br/>
						<div> 
							{generationSelection}
							{weatherSelection1}
							{weatherSelection2}
							{weatherSelection3}
							{weatherSelection45}
							{weatherSelection678}
							{terrainSelection}
						</div>
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
						<Pokemon getPkmnInfo={this.retrieveDefPokemonInfo}/>
					</div>
				</div>
				<div className="App-body" style={{display:"flex", minWidth: "100%"}}>
					{moveList}
				</div>
			</div>
        );
    }
}

export default HomePage;