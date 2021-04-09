import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Pokemon from './Pokemon.jsx';
import Dropdown from './Dropdown.jsx';
import HomePage from './HomePage.jsx';

let stateToSet = {
  "uid": "",
  "curPkmn": "Charizard",
  "baseStats": {
    "HP": 78,
    "Atk": 84,
    "SpAtk": 109,
    "Def": 78,
    "SpDef": 85,
    "Spd": 100
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
    "HP": 253,
    "Atk": 164,
    "Def": 153,
    "SpAtk": 212,
    "SpDef": 166,
    "Spd": 195
  },
  "level": 95,
  "nature": "Hardy",
  "status": "Healthy",
  "moves": [
  ],
  "types": [
    "Fire",
    "Flying"
  ],
  "pkmnImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  "isAdvanced": true,
  "readySwap": false,
  "savedName": "Insert Name",
  "display": false,
  "pokemonList": [
    "Charizard",
  ]
}

//Snapshot Test
test('PokemonJSX Snapshot Test', () => {
  const wrapper = shallow(<Pokemon />);
  wrapper.setState(stateToSet)
  expect(wrapper).toMatchSnapshot();
})

//Load Pokemon Test
test('Load Pokemon Test', () => {
  const wrapper = shallow(<Pokemon />);
  wrapper.setState({
    "uid": "",
    "curPkmn": "Charizard",
    "baseStats": {
      "HP": 78,
      "Atk": 84,
      "SpAtk": 109,
      "Def": 78,
      "SpDef": 85,
      "Spd": 100
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
      "HP": 253,
      "Atk": 164,
      "Def": 153,
      "SpAtk": 212,
      "SpDef": 166,
      "Spd": 195
    },
    "level": 95,
    "nature": "Hardy",
    "status": "Healthy",
    "moves": [
    ],
    "types": [
      "Fire",
      "Flying"
    ],
    "pkmnImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "isAdvanced": true,
    "readySwap": false,
    "savedName": "Insert Name",
    "display": false,
    "pokemonList": [
      "Charizard",
    ]
  })
  expect(wrapper.instance().savePokemon()).toBe(false)
})

//Type Color Test
test('Type Color Tests', () => {
  const wrapper = shallow(<Pokemon />);
  wrapper.setState({
    "uid": "",
    "curPkmn": "Charizard",
    "baseStats": {
      "HP": 78,
      "Atk": 84,
      "SpAtk": 109,
      "Def": 78,
      "SpDef": 85,
      "Spd": 100
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
      "HP": 253,
      "Atk": 164,
      "Def": 153,
      "SpAtk": 212,
      "SpDef": 166,
      "Spd": 195
    },
    "level": 95,
    "nature": "Hardy",
    "status": "Healthy",
    "moves": [
    ],
    "types": [
      "Fire",
      "Flying"
    ],
    "pkmnImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "isAdvanced": true,
    "readySwap": false,
    "savedName": "Insert Name",
    "display": false,
    "pokemonList": [
      "Charizard",
    ]
  })
  expect(wrapper.instance().getTypeColor(wrapper.instance().state.types[0])).toBe("#EE8130") &&
    expect(wrapper.instance().getTypeColor(wrapper.state.types[1])).toBe("#A98FF3")
})