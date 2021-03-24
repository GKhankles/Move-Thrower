import React from 'react';
import Dropdown from './Dropdown.jsx';

export class Pokemon extends React.Component {
    constructor(props) {
        super(props);
		this.retrievePkmnFromList = this.retrievePkmnFromList.bind(this);
		this.updatePkmnInfo = this.updatePkmnInfo.bind(this);

		let emptyStats = {
			HP: 0,
			Atk: 0,
			SpAtk: 0,
			Def: 0,
			SpDef: 0,
			Spd: 0
		}

        this.state = {
            uid: "",
			curPkmn: "",
			baseStats: emptyStats,
			ivInfo: emptyStats,
			evInfo: emptyStats,
			totalStats: emptyStats,
			nature: "", //Should probably set to a neutral nature for now
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

    render() {
		let tempList = ["Pikachu", "Squirtle", "Caterpie"];
        return (
            <div className = "pokemon">
                		{/* We should find a better way to space these things 
						besides using 7 br elements in a row, doesn't necessarily have to be
						done for this iteration*/}
						<Dropdown names={tempList}/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<br/>
						<div classname="pkmnLevel">
							<b>Level:</b>
							<input type="text" />
						</div>
						<br/>
						<b>HP: {this.state.totalStats.HP}</b>
						<br/>
						<b>ATK: {this.state.totalStats.Atk}</b>
						<br/>
						<b>DEF: {this.state.totalStats.Def}</b>
						<br/>
						<b>SP ATK: {this.state.totalStats.SpAtk}</b>
						<br/>
						<b>SP DEF: {this.state.totalStats.SpDef}</b>
						<br/>
						<b>SPD: {this.state.totalStats.Spd}</b>
            </div>
        );
    }
}

export default Pokemon;