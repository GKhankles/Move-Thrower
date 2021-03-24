import React from 'react';
import Dropdown from './Dropdown.jsx';
import StatCalculator from './StatCalculator.js';

export class Pokemon extends React.Component {
    constructor(props) {
        super(props);
		this.retrievePkmnFromList = this.retrievePkmnFromList.bind(this);
		this.updatePkmnInfo = this.updatePkmnInfo.bind(this);
		this.updatePkmnEV = this.updatePkmnEV.bind(this);
		this.updatePkmnIV = this.updatePkmnInfo.bind(this);

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
			nature: "Hardy" //Should probably set to a neutral nature for now
        };
    }

	//Callback function passed to Dropdown to retrieve pokemon selected from the list
	retrievePkmnFromList(selectedPkmn) {
		this.setState({
			curPkmn: selectedPkmn
		});
		this.updatePkmnInfo(selectedPkmn);
	}

	//Called after retrievePkmnFromList is called to update pokemon stats
	updatePkmnInfo(pkmn) {
		//Call the PokeAPI here to update pokemon info
	}

	//Updates the pokemons level, limit from 0-100
	updatePkmnLevel(event) {
		let nature = this.state.nature;
		let ivInfo = this.state.ivInfo;
		let baseStats = this.state.baseStats;
		let evInfo = this.state.evInfo;
		let tempLevel = event.target.value;
		if (tempLevel >= 100) {
			tempLevel = 100;
		} else if (tempLevel < 0) {
			tempLevel = 0;
		}

		this.setState({
			level: tempLevel
		});

		this.statCalculator.getStatTotals(baseStats, evInfo, ivInfo, tempLevel, nature);
	}

	//Takes in event value as well as the stat it is to update PkmnEV value
	//Restricts EVs at 252 individually, with a minimum of 0. Then calls calculateStats
	updatePkmnEV(event, statType) {
		let level = this.state.level;
		let nature = this.state.nature;
		let ivInfo = this.state.ivInfo;
		let baseStats = this.state.baseStats;
		let tempEvInfo = this.state.evInfo;
		
		let newStat = event.target.value;

		if(newStat >= 252) {
			newStat = 252;
		} else if (newStat < 0) {
			newStat = 0;
		}

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
		//Call function to update Total stats
		this.statCalculator.getStatTotals(baseStats, tempEvInfo, ivInfo, level, nature);
	}

	//Updates the Pokemon's IVs in state and calls calculateStats
	updatePkmnIV(event, statType) {
		let level = this.state.level;
		let nature = this.state.nature;
		let evInfo = this.state.evInfo;
		let baseStats = this.state.baseStats;
		let tempIvInfo = this.state.ivInfo;
		
		let newStat = event.target.value;

		if(newStat >= 31) {
			newStat = 31;
		} else if (newStat < 0) {
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

		this.setState({
			ivInfo: tempIvInfo
		});

		//Call function to update Total stats
		this.statCalculator.getStatTotals(baseStats, evInfo, tempIvInfo, level, nature);
	}

    render() {
		let tempList = ["Pikachu", "Squirtle", "Caterpie"];
		let hpAdvanced = this.props.isAdvanced ? <div className="advancedHP">
							
						</div>: null;

        return (
            <div className = "pokemon">
                		{/* Image will eventually replace the 7 br here, and styling needs to be done
							for all of the stats below. Not sure if possible, but can try to shorten up
							the level input bar?*/}
						<Dropdown names={tempList}/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<div className="pkmnLevel">
							<b>Level:</b>
							<input type="number" />
						</div>
						<div className="pkmnStat">
							<b>HP: {this.state.totalStats.HP}</b>
							{}
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