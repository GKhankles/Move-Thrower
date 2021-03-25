import React from 'react';
import Dropdown from './Dropdown.jsx';
import StatCalculator from './StatCalculator.js';
import Gen1Pokemon from './gen1pokemon.txt';
import Gen2Pokemon from './gen2pokemon.txt';
import Gen3Pokemon from './gen3pokemon.txt';
import Gen4Pokemon from './gen4pokemon.txt';
import Gen5Pokemon from './gen5pokemon.txt';
import Gen6Pokemon from './gen6pokemon.txt';

export class Pokemon extends React.Component {
    constructor(props) {
        super(props);
		this.retrievePkmnFromList = this.retrievePkmnFromList.bind(this);
		this.updatePkmnInfo = this.updatePkmnInfo.bind(this);
		this.retrievePkmnInfo = this.retrievePkmnInfo.bind(this);
		this.updatePkmnEV = this.updatePkmnEV.bind(this);
		this.updatePkmnIV = this.updatePkmnInfo.bind(this);
		this.updatePkmnLevel = this.updatePkmnLevel.bind(this);

		let emptyStats = {
			HP: 0,
			Atk: 0,
			SpAtk: 0,
			Def: 0,
			SpDef: 0,
			Spd: 0
		}

		this.natureList = ["Hardy", "Lonely", "Brave", "Adamant", "Naughty", "Bold", "Docile", 
			"Relaxed", "Impish", "Lax", "Timid", "Hasty", "Serious", "Jolly", "Naive", "Modest", 
			"Mild", "Quiet", "Bashful", "Rash", "Calm", "Gentle", "Sassy", "Careful", "Quirky"];

		this.statCalculator = new StatCalculator();

        this.state = {
            uid: "",
			curPkmn: "",
			baseStats: emptyStats,
			ivInfo: emptyStats,
			evInfo: emptyStats,
			totalStats: emptyStats,
			level: 0,
			nature: "Hardy", //Should probably set to a neutral nature for now,
			moves: [],
			types: [],
			pkmnImg: "",
			isAdvanced: true
        };
    }

	componentDidMount() {
		this.readPokemonFromFile(Gen3Pokemon);
	}

	//Callback function passed to Dropdown to retrieve pokemon selected from the list
	retrievePkmnFromList(selectedPkmn) {
		this.setState({
			curPkmn: selectedPkmn
		});
		this.retrievePkmnInfo(selectedPkmn);
	}

	//Called after retrievePkmnFromList is called to update pokemon stats
	retrievePkmnInfo(pkmn) {
		//Call the PokeAPI here to update pokemon info
		let pokemonName = pkmn.toLowerCase();
        let stats = [];
        let url = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
        let pokemonInfo = {};
        fetch(url)
        .then(response => response.json())
        .then(pokemonInfo => pokemonInfo = this.updatePkmnInfo(pokemonInfo));
	}

	updateTotalStats(newTotalStats) {
		this.setState({
			totalStats: newTotalStats
		});
	}

	updatePkmnInfo(pkmnInfo) {
		console.log("This is the returned object", pkmnInfo);
		let stats = pkmnInfo.stats;
		let newBaseStats = {
			HP: stats[0].base_stat,
			Atk: stats[1].base_stat,
			SpAtk: stats[3].base_stat,
			Def: stats[2].base_stat,
			SpDef: stats[4].base_stat,
			Spd: stats[5].base_stat,
		}

		let newMoves = pkmnInfo.moves;
		let newImg = pkmnInfo.sprites.front_default;
		let newTypes = pkmnInfo.types;
		this.setState({
			baseStats: newBaseStats,
			moves: newMoves,
			pkmnImg: newImg,
			types: newTypes
		});

		this.updateTotalStats(this.statCalculator.getStatTotals(newBaseStats, this.state.evInfo, this.state.ivInfo, this.state.level, this.state.nature));
	}

	//Updates the pokemons level, limit from 1-100
	updatePkmnLevel(event) {
		let nature = this.state.nature;
		let ivInfo = this.state.ivInfo;
		let baseStats = this.state.baseStats;
		let evInfo = this.state.evInfo;
		let tempLevel = parseInt(event.target.value);
		if (tempLevel >= 100) {
			tempLevel = 100;
		} else if (tempLevel <= 0) {
			tempLevel = 1;
		} else if (!tempLevel) {
			tempLevel = 1;
		}

		this.setState({
			level: tempLevel
		});

		this.updateTotalStats(this.statCalculator.getStatTotals(baseStats, evInfo, ivInfo, tempLevel, nature));
	}

	//Takes in event value as well as the stat it is to update PkmnEV value
	//Restricts EVs at 252 individually, with a minimum of 0. Then calls calculateStats
	updatePkmnEV(event, statType) {

		console.log("event.target.value", event.target.value);
		let level = this.state.level;
		let nature = this.state.nature;
		let ivInfo = this.state.ivInfo;
		console.log("ivInfo inside of updateev", ivInfo);
		let baseStats = this.state.baseStats;
		let tempEvInfo = this.state.evInfo;
		
		let newStat = parseInt(event.target.value);

		if(newStat >= 252) {
			newStat = 252;
		} else if (newStat < 0) {
			newStat = 0;
		} else if (!newStat) {
			newStat = 0;
		}

		console.log(newStat);

		if (statType === "HP") {
			tempEvInfo.HP = newStat;
		} else if (statType === "Atk") {
			tempEvInfo.Atk = newStat;
		} else if (statType === "SpAtk") {
			tempEvInfo.SpAtk = newStat;
		} else if (statType === "Def") {
			tempEvInfo.Def = newStat;
		} else if (statType === "SpDef") {
			tempEvInfo.SpDef = newStat;
		} else if (statType === "Spd") {
			tempEvInfo.Spd = newStat;
		}

		this.setState({
			evInfo: tempEvInfo
		});

		console.log("after evInfo got set in state", this.state.ivInfo);


		console.log("print this out", tempEvInfo);
		//Call function to update Total stats
		this.updateTotalStats(this.statCalculator.getStatTotals(baseStats, tempEvInfo, ivInfo, level, nature));
	}

	//Updates the Pokemon's IVs in state and calls calculateStats
	updatePkmnIV(event, statType) {
		console.log("Here is the event: ", event);
		console.log("And the statType: ", statType);

		let level = this.state.level;
		let nature = this.state.nature;
		let evInfo = this.state.evInfo;
		let baseStats = this.state.baseStats;
		let tempIvInfo = this.state.ivInfo;
		
		let newStat = parseInt(event.target.value);

		if(newStat >= 31) {
			newStat = 31;
		} else if (newStat < 0) {
			newStat = 0;
		} else if (!newStat) {
			newStat = 0;
		}

		if (statType === "HP") {
			tempIvInfo.HP = newStat;
		} else if (statType === "Atk") {
			tempIvInfo.Atk = newStat;
		} else if (statType === "SpAtk") {
			tempIvInfo.SpAtk = newStat;
		} else if (statType === "Def") {
			tempIvInfo.Def = newStat;
		} else if (statType === "SpDef") {
			tempIvInfo.SpDef = newStat;
		} else if (statType === "Spd") {
			tempIvInfo.Spd = newStat;
		}

		console.log("hI THERE", tempIvInfo);

		this.setState({
			ivInfo: tempIvInfo
		});

		//Call function to update Total stats
		this.updateTotalStats(this.statCalculator.getStatTotals(baseStats, evInfo, tempIvInfo, level, nature));
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

    render() {
		//Will have to fix this for later
		let dropDownMenu = this.state.pokemonList ? <Dropdown names={this.state.pokemonList} getOption={this.retrievePkmnFromList}/> : null;
		let pkmnImg = this.state.pkmnImg ? <img className="pkmnImg" src={this.state.pkmnImg} alt="pokemonImage"/> : null;
		let hpAdvanced = this.state.isAdvanced ? <div className="advancedHP">
							<input type="number" onChange={(e) => this.updatePkmnIV(e, "HP")} onBlur={(e) => this.updatePkmnIV(e, "HP")} />
							<input type="number" onChange={(e) => this.updatePkmnEV(e, "HP")} onBlur={(e) => this.updatePkmnEV(e, "HP")} />
						</div>: null;

        return (
            <div className = "pokemon">
                		{/* Image will eventually replace the 7 br here, and styling needs to be done
							for all of the stats below. Not sure if possible, but can try to shorten up
							the level input bar?*/}
						{dropDownMenu}
						<br/>
						{pkmnImg}
						<div className="pkmnLevel">
							<b>Level:</b>
							<input type="number" onChange={this.updatePkmnLevel} onBlur={this.updatePkmnLevel}/>
						</div>
						<div className="pkmnStat">
							<b>HP: {this.state.totalStats.HP}</b>
							{hpAdvanced}
						</div>
						<div className="pkmnStat">
							<b>ATK: {this.state.totalStats.Atk}</b>
							{}
						</div>
						<div className="pkmnStat">
							<b>DEF: {this.state.totalStats.Def}</b>
							{}
						</div>
						<div className="pkmnStat">
							<b>SP ATK: {this.state.totalStats.SpAtk}</b>
							{}
						</div>
						<div className="pkmnStat">
							<b>SP DEF: {this.state.totalStats.SpDef}</b>
							{}
						</div>
						<div className="pkmnStat">
							<b>SPD: {this.state.totalStats.Spd}</b>
							{}
						</div>
            </div>
        );
    }
}

export default Pokemon;