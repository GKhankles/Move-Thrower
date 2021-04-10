import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import HomePage from './HomePage.jsx';
import global from './global.js';

var copyState = {
    "atkPkmnInfo": {
        "uid": "",
        "curPkmn": "Bulbasaur",
        "baseStats": {
            "HP": 45,
            "Atk": 49,
            "SpAtk": 65,
            "Def": 49,
            "SpDef": 65,
            "Spd": 45
        },
        "ivInfo": {
            "HP": 31,
            "Atk": 0,
            "SpAtk": 0,
            "Def": 0,
            "SpDef": 0,
            "Spd": 0
        },
        "evInfo": {
            "HP": 0,
            "Atk": 0,
            "SpAtk": 0,
            "Def": 0,
            "SpDef": 0,
            "Spd": 0
        },
        "totalStats": {
            "HP": 11,
            "Atk": 5,
            "Def": 5,
            "SpAtk": 6,
            "SpDef": 6,
            "Spd": 5
        },
        "level": 1,
        "nature": "Hardy",
        "status": "Healthy",
        "moves": [],
        "types": [
            "Grass",
            "Poison"
        ],
        "pkmnImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "pokemonList": [
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"]
        ],
        "isAdvanced": true,
        "readySwap": false,
        "savedName": "Insert Name",
        "display": false,
        "nameList": [],
        "pkmnList": []
    },
    "defPkmnInfo": {
        "uid": "",
        "curPkmn": "Bulbasaur",
        "baseStats": {
            "HP": 45,
            "Atk": 49,
            "SpAtk": 65,
            "Def": 49,
            "SpDef": 65,
            "Spd": 45
        },
        "ivInfo": {
            "HP": 0,
            "Atk": 0,
            "SpAtk": 0,
            "Def": 0,
            "SpDef": 0,
            "Spd": 0
        },
        "evInfo": {
            "HP": 0,
            "Atk": 0,
            "SpAtk": 0,
            "Def": 0,
            "SpDef": 0,
            "Spd": 0
        },
        "totalStats": {
            "HP": 11,
            "Atk": 5,
            "Def": 5,
            "SpAtk": 6,
            "SpDef": 6,
            "Spd": 5
        },
        "level": 1,
        "nature": "Hardy",
        "status": "Healthy",
        "moves": [],
        "types": [
            "Grass",
            "Poison"
        ],
        "pkmnImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "pokemonList": [
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"]
        ],
        "isAdvanced": true,
        "readySwap": false,
        "savedName": "Insert Name",
        "display": false,
        "nameList": [],
        "pkmnList": []
    },
    "isAdvanced": false,
    "calculatedMoves": null,
    "calculating": false,
    "weather": "Clear",
    "weatherList": null
};

var normalState = {
    "atkPkmnInfo": {
        "uid": "",
        "curPkmn": "Bulbasaur",
        "baseStats": {
            "HP": 45,
            "Atk": 49,
            "SpAtk": 65,
            "Def": 49,
            "SpDef": 65,
            "Spd": 45
        },
        "ivInfo": {
            "HP": 31,
            "Atk": 0,
            "SpAtk": 0,
            "Def": 0,
            "SpDef": 0,
            "Spd": 0
        },
        "evInfo": {
            "HP": 0,
            "Atk": 0,
            "SpAtk": 0,
            "Def": 0,
            "SpDef": 0,
            "Spd": 0
        },
        "totalStats": {
            "HP": 11,
            "Atk": 5,
            "Def": 5,
            "SpAtk": 6,
            "SpDef": 6,
            "Spd": 5
        },
        "level": 1,
        "nature": "Hardy",
        "status": "Healthy",
        "moves": [],
        "types": [
            "Grass",
            "Poison"
        ],
        "pkmnImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "pokemonList": [
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"]
        ],
        "isAdvanced": true,
        "readySwap": false,
        "savedName": "Insert Name",
        "display": false,
        "nameList": [],
        "pkmnList": []
    },
    "defPkmnInfo": {
        "uid": "",
        "curPkmn": "Bulbasaur",
        "baseStats": {
            "HP": 45,
            "Atk": 49,
            "SpAtk": 65,
            "Def": 49,
            "SpDef": 65,
            "Spd": 45
        },
        "ivInfo": {
            "HP": 0,
            "Atk": 0,
            "SpAtk": 0,
            "Def": 0,
            "SpDef": 0,
            "Spd": 0
        },
        "evInfo": {
            "HP": 0,
            "Atk": 0,
            "SpAtk": 0,
            "Def": 0,
            "SpDef": 0,
            "Spd": 0
        },
        "totalStats": {
            "HP": 11,
            "Atk": 5,
            "Def": 5,
            "SpAtk": 6,
            "SpDef": 6,
            "Spd": 5
        },
        "level": 1,
        "nature": "Hardy",
        "status": "Healthy",
        "moves": [],
        "types": [
            "Grass",
            "Poison"
        ],
        "pkmnImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "pokemonList": [
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"]
        ],
        "isAdvanced": true,
        "readySwap": false,
        "savedName": "Insert Name",
        "display": false,
        "nameList": [],
        "pkmnList": []
    },
    "isAdvanced": false,
    "calculatedMoves": null,
    "calculating": false,
    "weather": "Clear",
    "weatherList": null
}

test('HomePage Initial Snapshot Test', () => {
  const wrapper = shallow(<HomePage />);
  expect(wrapper).toMatchSnapshot();
});

/*test('HomePage ResetSettings Test', () => {
    const wrapper = shallow(<HomePage />);
    let newState = {...copyState};
    global.pkmn1 = {
        "uid": "",
        "curPkmn": "Bulbasaur",
        "baseStats": {
            "HP": 45,
            "Atk": 49,
            "SpAtk": 65,
            "Def": 49,
            "SpDef": 65,
            "Spd": 45
        },
        "ivInfo": {
            "HP": 0,
            "Atk": 0,
            "SpAtk": 0,
            "Def": 0,
            "SpDef": 0,
            "Spd": 0
        },
        "evInfo": {
            "HP": 0,
            "Atk": 0,
            "SpAtk": 0,
            "Def": 0,
            "SpDef": 0,
            "Spd": 0
        },
        "totalStats": {
            "HP": 11,
            "Atk": 5,
            "Def": 5,
            "SpAtk": 6,
            "SpDef": 6,
            "Spd": 5
        },
        "level": 1,
        "nature": "Hardy",
        "status": "Healthy",
        "moves": [],
        "types": [
            "Grass",
            "Poison"
        ],
        "pkmnImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "pokemonList": [
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"],
            ["Bulbasaur"]
        ],
        "isAdvanced": true,
        "readySwap": false,
        "savedName": "Insert Name",
        "display": false,
        "nameList": [],
        "pkmnList": []
    };
    wrapper.setState({newState});
    wrapper.instance().changeGeneration({target: {value: 3}});
    wrapper.instance().resetSettings();
    expect(wrapper.state).toBe(normalState);
});*/

test('Test Create Move List', () => {
    const wrapper = shallow(<HomePage />);
    let newState = {...copyState};
    wrapper.setState({newState});
    wrapper.setState({ calculatedMoves: [{move_type: "Flying", move:"Fly", min_dmg:45, max_dmg:68}, {move_type: "Fairy", move:"Fly", min_dmg:45, max_dmg:75}, {move_type: "Rock", move:"Fly", min_dmg:45, max_dmg:89}, {move_type: "Bug", move:"Fly", min_dmg:45, max_dmg:122}] });
    wrapper.instance().createMoveList();
    expect(wrapper).toMatchSnapshot();
});

