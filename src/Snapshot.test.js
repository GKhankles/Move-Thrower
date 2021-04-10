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
  wrapper.setState(stateToSet)
  expect(wrapper.instance().savePokemon()).toBe(false)
})

//Fire Color Test
test('Fire Color Test', () => {
  const wrapper = shallow(<Pokemon/>);
  wrapper.setState(stateToSet)
  expect(wrapper.instance().getTypeColor("Fire")).toBe("#EE8130")
})

//Water Color Test
test('Water Color Test', () => {
  const wrapper = shallow(<Pokemon/>);
  wrapper.setState(stateToSet)
  expect(wrapper.instance().getTypeColor("Water")).toBe("#6390F0")
})

//Electric Color Test
test('Electric Color Test', () => {
  const wrapper = shallow(<Pokemon/>);
  wrapper.setState(stateToSet)
  expect(wrapper.instance().getTypeColor("Electric")).toBe("#F7D02C")
})

//Grass Color Test
test('Grass Color Test', () => {
  const wrapper = shallow(<Pokemon/>);
  wrapper.setState(stateToSet)
  expect(wrapper.instance().getTypeColor("Grass")).toBe("#7AC74C")
})

//Ice Color Test
test('Ice Color Test', () => {
  const wrapper = shallow(<Pokemon/>);
  wrapper.setState(stateToSet)
  expect(wrapper.instance().getTypeColor("Ice")).toBe("#96D9D6")
})

//Fighting Color Test
test('Fighting Color Test', () => {
  const wrapper = shallow(<Pokemon/>);
  wrapper.setState(stateToSet)
  expect(wrapper.instance().getTypeColor("Fighting")).toBe("#C22E28")
})

//Poison Color Test
test('Poison Color Test', () => {
  const wrapper = shallow(<Pokemon/>);
  wrapper.setState(stateToSet)
  expect(wrapper.instance().getTypeColor("Poison")).toBe("#A33EA1")
})

//Ground Color Test
test('Ground Color Test', () => {
  const wrapper = shallow(<Pokemon/>);
  wrapper.setState(stateToSet)
  expect(wrapper.instance().getTypeColor("Ground")).toBe("#E2BF65")
})

//Flying Color Test
test('Flying Color Test', () => {
  const wrapper = shallow(<Pokemon/>);
  wrapper.setState(stateToSet)
  expect(wrapper.instance().getTypeColor("Flying")).toBe("#A98FF3")
})

//Psychic Color Test
test('Psychic Color Test', () => {
  const wrapper = shallow(<Pokemon/>);
  wrapper.setState(stateToSet)
  expect(wrapper.instance().getTypeColor("Psychic")).toBe("#F95587")
})

//Bug Color Test
test('Bug Color Test', () => {
  const wrapper = shallow(<Pokemon/>);
  wrapper.setState(stateToSet)
  expect(wrapper.instance().getTypeColor("Bug")).toBe("#A6B91A")
})

//Rock Color Test
test('Rock Color Test', () => {
  const wrapper = shallow(<Pokemon/>);
  wrapper.setState(stateToSet)
  expect(wrapper.instance().getTypeColor("Rock")).toBe("#B6A136")
})

//Ghost Color Test
test('Ghost Color Test', () => {
  const wrapper = shallow(<Pokemon/>);
  wrapper.setState(stateToSet)
  expect(wrapper.instance().getTypeColor("Ghost")).toBe("#735797")
})

//Dragon Color Test
test('Dragon Color Test', () => {
  const wrapper = shallow(<Pokemon/>);
  wrapper.setState(stateToSet)
  expect(wrapper.instance().getTypeColor("Dragon")).toBe("#6F35FC")
})

//Dark Color Test
test('Dark Color Test', () => {
  const wrapper = shallow(<Pokemon/>);
  wrapper.setState(stateToSet)
  expect(wrapper.instance().getTypeColor("Dark")).toBe("#705746")
})

//Steel Color Test
test('Steel Color Test', () => {
  const wrapper = shallow(<Pokemon/>);
  wrapper.setState(stateToSet)
  expect(wrapper.instance().getTypeColor("Steel")).toBe("#B7B7CE")
})

//Fairy Color Test
test('Fairy Color Test', () => {
  const wrapper = shallow(<Pokemon/>);
  wrapper.setState(stateToSet)
  expect(wrapper.instance().getTypeColor("Fairy")).toBe("#D685AD")
})

//Normal Color Test
test('Normal Color Test', () => {
  const wrapper = shallow(<Pokemon/>);
  wrapper.setState(stateToSet)
  expect(wrapper.instance().getTypeColor("Normal")).toBe("#A8A77A")
})

//retrieveNatureFromList Test
test('retrieveNatureFromList Test', () => {
  const wrapper = shallow(<Pokemon getPkmnInfo = {() => {}}/>);
  wrapper.setState(stateToSet);
  wrapper.instance().retrieveNatureFromList("Docile")
  expect(wrapper.instance().state.nature).toBe("Docile")
})

//retrieveStatusFromList Test
test('retrieveStatusFromList Test', () => {
  const wrapper = shallow(<Pokemon/>)
  wrapper.setState(stateToSet)
  wrapper.instance().retrieveStatusFromList("Burn")
  expect(wrapper.instance().state.status).toBe("Burn")
})

//retrievePkmnFromList Test
test('retrievePkmnFromList Test', () => {
  const wrapper = shallow(<Pokemon/>)
  wrapper.setState(stateToSet)
  wrapper.instance().retrievePkmnFromList("Bulbasaur")
  expect(wrapper.instance().state.curPkmn).toBe("Bulbasaur")
})