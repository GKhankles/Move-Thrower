import React from 'react';
import Pokemon from './Pokemon.jsx';

export class MoveCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uid: "",
            isAdvanced: false,
            atkPkmnInfo: {},
            defPkmnInfo: {},
            battlefieldInfo: {}
        };
    }


    //May have to change to George's CSV file with all pokemon later
    readPokemonFromFile(fileName) {
        fetch(fileName).then(response => response.text()).then(text => this.getPokemonHelper(text));
    }

    getPokemonHelper(text) {
        let pokemonNames = [];
        pokemonNames = text.split("\n"); //if this breaks at some point, change split parameter
        console.log(pokemonNames);
		// copy the getpokemonhelper from pokemon.jsx if we use this function.
        return pokemonNames;
    }

    //This function is responsible for grabbing info required for the damage calculations from each pokemon
    grabPokemon

    render() {
        return (
            <div className="moveCalculator">
                <div className="attackingPokemon">
                    {/*Need to include the variables below that we will need*/}
                    <Pokemon />
                </div>
                <div className="midCalc">
                </div>
                <div className="defendingPokemon">
                </div>
            </div>
        );
    }
}

export default MoveCalculator;
