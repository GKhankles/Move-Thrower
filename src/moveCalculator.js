import Gen1Moves from './pokemoves_gen_1.txt';
import Gen2Moves from './pokemoves_gen_2.txt';
import Gen3Moves from './pokemoves_gen_3.txt';
import Gen4Moves from './pokemoves_gen_4.txt';
import Gen5Moves from './pokemoves_gen_5.txt';
import Gen6Moves from './pokemoves_gen_6.txt';
import Gen7Moves from './pokemoves_gen_7.txt';
import Gen8Moves from './pokemoves_gen_8.txt';
/*
 * Would be a good idea to make a constants file that contains the below variables, this would allow for these
 * Constants to be accessed in other files, if we find that is needed later on
*/
export class moveCalculator {
    constructor () {
        this.moveCalculator = this.moveCalculator.bind(this);

        this.gen1matchups = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1],
                     [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5],
                     [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5],
                     [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5],
                     [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5],
                     [1, 1, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2],
                     [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1],
                     [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 2, 0.5, 0.5, 1],
                     [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1],
                     [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1],
                     [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1],
                     [1, 0.5, 1, 1, 2, 1, 0.5, 2, 1, 0.5, 2, 1, 1, 0.5, 1],
                     [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1],
                     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1],
                     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]];

        this.gen2to5matchups = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5],
                        [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2],
                        [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1],
                        [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1],
                        [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5],
                        [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5],
                        [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2],
                        [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0],
                        [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2],
                        [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5],
                        [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5],
                        [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5],
                        [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 0.5],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5],
                        [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 0.5],
                        [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5]];

        this.gen6to8matchups = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1],
                        [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1],
                        [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1],
                        [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1],
                        [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1],
                        [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1],
                        [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5],
                        [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2],
                        [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1],
                        [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1],
                        [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1],
                        [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5],
                        [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0],
                        [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5],
                        [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2],
                        [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1]];

        ////Currently set up so 1-9 are physical, 10+ are special ()
        this.elemental_types = {
            "Normal": 0,
            "Fire": 1,
            "Water": 2,
            "Electric": 3,
            "Grass": 4,
            "Ice": 5,
            "Fighting": 6,
            "Poison": 7,
            "Ground": 8,
            "Flying": 9,
            "Psychic": 10,
            "Bug": 11,
            "Rock": 12,
            "Ghost": 13,
            "Dragon": 14,
            "Dark": 15,
            "Steel": 16,
            "Fairy": 17
	    };
        
        this.physical_types = [this.elemental_types.Normal, this.elemental_types.Fighting, 
            this.elemental_types.Flying, this.elemental_types.Poison, this.elemental_types.Ground, 
            this.elemental_types.Rock, this.elemental_types.Bug, this.elemental_types.Ghost, this.elemental_types.Steel];

        this.special_types = [this.elemental_types.Fire, this.elemental_types.Water, 
            this.elemental_types.Grass, this.elemental_types.Electric, this.elemental_types.Psychic, 
            this.elemental_types.Ice, this.elemental_types.Dragon, this.elemental_types.Dark, this.elemental_types.Fairy];

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

        this.move_category = {
            Physical: 1,
            Special: 2
        };
    }


    readMovesFromFile(generation) {
        let fileName;
        switch(generation) {
            case 1:
              fileName = Gen1Moves
              break;
            case 2:
                fileName = Gen2Moves
                break;
            case 3:
                fileName = Gen3Moves
                break;
            case 4:
                fileName = Gen4Moves
                break;
            case 5:
                fileName = Gen5Moves
                break;
            case 6:
                fileName = Gen6Moves
                break;
            case 7:
                fileName = Gen7Moves
                break;
            case 8:
                fileName = Gen8Moves
                break;
            default:
                console.log("This generation doesn't exit")
          }

        return fetch(fileName).then(response => response.text()).then(text => this.moveParserHelper(text));
    }

    moveParserHelper(text) {
        //let moves = [];
        text = text+ ""
        let movesList = text.split('\n'); //if this breaks at some point, change split parameter

        movesList.forEach(function(line, index, moves) { 
            let tempLine = line.split("\t");
            moves[index] = {'Name': tempLine[0].toLowerCase().replace("-"," "), 'type': tempLine[1], 'category': tempLine[2], 'power': tempLine[3]}; 
        });

        return movesList
    }

    // getPokemonHelper(text, generation) {
    //     let pokemonNames = [];
    //     pokemonNames = text.split("\n"); //if this breaks at some point, change split parameter
    //     //might need to remove below code when running on github
    //     //TODO Known issue with form pokemon, such as Deoxys, Rotom, etc.
    //     //Currently removing all regional forms and mega evolutions because we need to format them properly for PokeAPI
    //     //TODO Another known issue with pokemon with spaces in their names, need to format them correctly for PokeAPI
    //     let newPokemonList = [];
    //     let tempID = 0;
    //     for (let i = 1; i < pokemonNames.length - 1; i++) {
    //         let tempList = pokemonNames[i].split("\t");
    //         if (tempList[0] === tempID) {
    //             continue;
    //         } else {
    //             tempID = tempList[0];
    //             newPokemonList.push(tempList[1]);
    //         }
    //     }

    //     let tempPkmnList = [];
    //     tempPkmnList = this.state.pokemonList;
    //     tempPkmnList[generation - 1] = newPokemonList;
    //     this.setState({
    //         pokemonList: tempPkmnList
    //     });
    //     this.forceUpdate();
    //     return newPokemonList;
    // }

    

    //TODO: Test out with array of numbers or something like that
    async moveCalculator(AtkPokemon, DefPokemon, generation, stage_cond){
        //Array of the damage of every move. Retains the same index as the passed in Moves object
        let move_Damage = []
        let allMoves = await this.readMovesFromFile(generation)
        
        AtkPokemon.moves.forEach(move => {            
            for(let i=0;i<allMoves.length;i++){
                if (allMoves[i].Name === move.move.name){
                    let damage = this.calculateDamage(allMoves[i], AtkPokemon, DefPokemon, generation, stage_cond)
                    move_Damage.push({move: allMoves[i].Name, move_type: allMoves[i].type, min_dmg: damage.min_damage, max_dmg: damage.max_damage})
                }
            }  
        });

        //Sort list of moves by max_dmg key in descending order
        let optimalMoveList = move_Damage.sort((a,b) =>  b.max_dmg-a.max_dmg)
        return optimalMoveList
    }

    //This function performs a poke round, rounds up if the decimal is > .5 and down otherwise
    pokeRound(value) {
        let leftover = value - Math.floor(value)
        if (leftover > .5) {
            value = Math.ceil(value)
        } else {
            value = Math.floor(value)
        }
        return value
    }

//This function calculates the damage for each move (stage_cond is an object we havent made yet)
    calculateDamage(move, AtkPokemon, DefPokemon, generation, stage_cond){

        // Modifier Variables (1 by default)
        let Targets_mod = 1;
        let Weather_mod = 1;
        let Badge_mod = 1;
        let Critical_mod = 1;
        //let Random_mod = 1;
        let Stab_mod = 1;
        let Type_mod = 1;
        let Burn_mod = 1;
        let Move_mod = 1;
        let Ability_mod = 1;
        let Item_mod = 1;

        let max_damage = 0;
        let min_damage = 0;

        let typeIndex;
        //add each type to this later
        /*switch (move.type) {
            case "Fire":
                typeIndex = 1;
                break;
        }*/

        //Ready to be tested
        /*if (generation === 1){
            let max_level = 2*AtkPokemon.level;
            let min_level = AtkPokemon.level;

            let power = move.power;

            let max_rand_mod = 1;
            let min_rand_mod = 217/255;

            //Chooses correct a and d based on type of move
            let a = 0;
            let d = 0;
            if (this.physical_types.indexOf(move.type) > -1) {
                a = AtkPokemon.statTotals.Atk;
                d = DefPokemon.statTotals.Def;
            } else {
                a = AtkPokemon.statTotals.SpAtk;
                d = DefPokemon.statTotals.SpDef;
            }

            //Assumes type is an arrray
            if(move.type.in(AtkPokemon.types)){
                Stab_mod = 1.5;
            }

            //Skipped type for now
            let max_modifier = Targets_mod*Weather_mod*Badge_mod*Critical_mod*Stab_mod*Type_mod*Burn_mod*Move_mod*Ability_mod*Item_mod;
            let min_modifier = Targets_mod*Weather_mod*Badge_mod*Critical_mod*Stab_mod*Type_mod*Burn_mod*Move_mod*Ability_mod*Item_mod;
            max_damage = (((2*max_level/5 + 2)*power*a/d)/50 + 2)*max_modifier;
            min_damage = (((2*min_level/5 + 2)*power*a/d)/50 + 2)*min_modifier;
        }*/

        /*if (generation === 2){
            let crit_level = 2*AtkPokemon.level
            let min_level = AtkPokemon.level

            let max_rand_mod = 1
            let min_rand_mod = 217/255

            //Chooses correct a and d based on type of move
            let a = 0
            let d = 0
            
            if (this.physical_types.indexOf(move.type) > -1) {
                a = AtkPokemon.attack
                d = DefPokemon.defense
            } else {
                a = AtkPokemon.special_attack
                d = DefPokemon.special_defense
            }

            // Weather
            if (stage_cond.weather === this.weather_types.Harsh_Sunlight && move.type === this.elemental_types.Fire){
                Weather_mod = 1.5
            }
            if (stage_cond.weather === this.weather_types.Rain && move.type === this.elemental_types.Water){
                Weather_mod = 1.5
            }
            if (stage_cond.weather === this.weather_types.Harsh_Sunlight && move.type === this.elemental_types.Water){
                Weather_mod = 0.5
            }
            if (stage_cond.weather === this.weather_types.Rain && move.type === this.elemental_types.Fire){
                Weather_mod = 0.5
            }
        }*/

        if (generation === 3){
            let level = AtkPokemon.level
            let power = move.power
            
            //Chooses correct a and d based on type of move
            let a = 0
            let d = 0

            let isPhysical

            if (this.physical_types.indexOf(this.elemental_types[move.type]) > -1) {
                a = AtkPokemon.totalStats.Atk;
                d = DefPokemon.totalStats.Def;
                isPhysical = true
            } else {
                a = AtkPokemon.totalStats.SpAtk;
                d = DefPokemon.totalStats.SpDef;
                isPhysical = false
            }
        
            //Calculating Modifier Components
            // Weather
            if (stage_cond.weather === this.weather_types["Harsh Sunlight"] && move.type === "Fire"){
                Weather_mod = 1.5
            }
            if (stage_cond.weather === this.weather_types["Rain"] && move.type === "Water"){
                Weather_mod = 1.5
            }
            if (stage_cond.weather === this.weather_types["Harsh Sunlight"] && move.type === "Water"){
                Weather_mod = 0.5
            }
            if (stage_cond.weather === this.weather_types["Rain"] && move.type === "Fire"){
                Weather_mod = 0.5
            }

            //Randomness
            let max_rand_mod = 1
            let min_rand_mod = 0.85
            //STAB
            //console.log("move inside of moveCalculator", move);
            //console.log("AtkPokemon.type", AtkPokemon.types);
            /*if (move.type in AtkPokemon.types){ //fix this later
                Stab_mod = 1.5
            }*/
            for (let i = 0; i < AtkPokemon.types.length; i++) {
                if (move.type == AtkPokemon.types[i]) {
                    Stab_mod = 1.5
                    break;
                }
            }
            //Type effects (fix later) (check if second type is actual a thing)
            //This assumes move array has two vals, and second is null if pokemon only has one type
            console.log("Before error in moveCalculator.js")
            console.log("elemental types",this.elemental_types)
            console.log("move types",move.type)
            console.log("elemental types",this.elemental_types)
            console.log('def pokemon tpyes',DefPokemon.types[0])
            Type_mod = this.gen2to5matchups[this.elemental_types[move.type]][this.elemental_types[DefPokemon.types[0]]]
            Type_mod *= DefPokemon.types[1] === undefined ? 1 : this.gen2to5matchups[this.elemental_types[move.type]][this.elemental_types[DefPokemon.types[1]]]

            if (AtkPokemon.status === "Burn") {
                Burn_mod = .5
            }

            let baseDamage = Math.floor(Math.floor((Math.floor(2 * level / 5 + 2) * power * a) / d) / 50)
            if (isPhysical) {
                baseDamage = Math.floor(baseDamage * Burn_mod)
            }
            baseDamage = Math.floor(baseDamage * Weather_mod)
            baseDamage += 2
            baseDamage = Math.floor(baseDamage * Stab_mod)
            baseDamage = Math.floor(baseDamage * Type_mod)
            min_damage = Math.floor(baseDamage * .85)
            max_damage = baseDamage
        }

        if (generation === 4){

            let level = AtkPokemon.level
            let power = move.power

            let max_rand_mod = 1
            let min_rand_mod = 0.85

            for (let i = 0; i < AtkPokemon.types.length; i++) {
                if (move.type == AtkPokemon.types[i]) {
                    Stab_mod = 1.5
                    break;
                }
            }

            Type_mod = this.gen2to5matchups[this.elemental_types[move.type]][this.elemental_types[DefPokemon.types[0]]]
            Type_mod *= DefPokemon.types[1] === undefined ? 1 : this.gen2to5matchups[this.elemental_types[move.type]][this.elemental_types[DefPokemon.types[1]]]

            let a = 0
            let d = 0

            let isPhysical

            if (move.category === "physical") {
                a = AtkPokemon.totalStats.Atk
                d = DefPokemon.totalStats.Def
                isPhysical = true
            } else {
                a = AtkPokemon.totalStats.SpAtk
                d = DefPokemon.totalStats.SpDef
                isPhysical = false
            }
            
            // Weather
            if (stage_cond.weather === this.weather_types["Harsh Sunlight"] && move.type === "Fire"){
                Weather_mod = 1.5
            }
            if (stage_cond.weather === this.weather_types["Rain"] && move.type === "Water"){
                Weather_mod = 1.5
            }
            if (stage_cond.weather === this.weather_types["Harsh Sunlight"] && move.type === "Water"){
                Weather_mod = 0.5
            }
            if (stage_cond.weather === this.weather_types["Rain"] && move.type === "Fire"){
                Weather_mod = 0.5
            }

            if (AtkPokemon.status === "Burn" && isPhysical) {
                Burn_mod = .5
            }

            let Mod1 = Burn_mod * Weather_mod

            let baseDamage = (Math.floor(Math.floor(Math.floor(Math.floor((Math.floor(level*2/5) + 2) * power * a) / 50) / d) * Mod1) + 2)
            min_damage = Math.floor(baseDamage * .85)
            max_damage = baseDamage
            min_damage = Math.floor(min_damage * Stab_mod)
            max_damage = Math.floor(max_damage * Stab_mod)
            min_damage = Math.floor(min_damage * Type_mod)
            max_damage = Math.floor(max_damage * Type_mod)
        }

        if (generation === 5){

            let level = AtkPokemon.level
            let power = move.power

            for (let i = 0; i < AtkPokemon.types.length; i++) {
                if (move.type == AtkPokemon.types[i]) {
                    Stab_mod = 1.5
                    break;
                }
            }

            let a = 0
            let d = 0

            let isPhysical

            if (move.category === "physical") {
                a = AtkPokemon.totalStats.Atk
                d = DefPokemon.totalStats.Def
                isPhysical = true
            } else {
                a = AtkPokemon.totalStats.SpAtk
                d = DefPokemon.totalStats.SpDef
                isPhysical = false
            }
            Type_mod = this.gen2to5matchups[this.elemental_types[move.type]][this.elemental_types[DefPokemon.types[0]]]
            Type_mod *= DefPokemon.types[1] === undefined ? 1 : this.gen2to5matchups[this.elemental_types[move.type]][this.elemental_types[DefPokemon.types[1]]]
            
            // Weather
            if (stage_cond.weather === this.weather_types["Harsh Sunlight"] && move.type === "Fire"){
                Weather_mod = 1.5
            }
            if (stage_cond.weather === this.weather_types["Rain"] && move.type === "Water"){
                Weather_mod = 1.5
            }
            if (stage_cond.weather === this.weather_types["Harsh Sunlight"] && move.type === "Water"){
                Weather_mod = 0.5
            }
            if (stage_cond.weather === this.weather_types["Rain"] && move.type === "Fire"){
                Weather_mod = 0.5
            }

            if (AtkPokemon.status === "Burn" && isPhysical) {
                Burn_mod = .5
            }

            let baseDamage = Math.floor(Math.floor(Math.floor(2*level/5 + 2)*power*a/d)/50) + 2
            baseDamage *= Weather_mod
            baseDamage = this.pokeRound(baseDamage)
            min_damage = Math.floor(baseDamage * .85)
            max_damage = baseDamage
            min_damage *= Stab_mod
            min_damage = this.pokeRound(min_damage)
            max_damage *= Stab_mod
            max_damage = this.pokeRound(max_damage)
            min_damage *= Type_mod
            min_damage = this.pokeRound(min_damage)
            max_damage *= Type_mod
            max_damage = this.pokeRound(max_damage)
            min_damage *= Burn_mod
            min_damage = this.pokeRound(min_damage)
            max_damage *= Burn_mod
            max_damage = this.pokeRound(max_damage)
        }

        if (generation === 6){

            let level = AtkPokemon.level
            let power = move.power

            for (let i = 0; i < AtkPokemon.types.length; i++) {
                if (move.type == AtkPokemon.types[i]) {
                    Stab_mod = 1.5
                    break;
                }
            }

            let a = 0
            let d = 0

            let isPhysical

            if (move.category === "physical") {
                a = AtkPokemon.totalStats.Atk
                d = DefPokemon.totalStats.Def
                isPhysical = true
            } else {
                a = AtkPokemon.totalStats.SpAtk
                d = DefPokemon.totalStats.SpDef
                isPhysical = false
            }
            Type_mod = this.gen2to5matchups[this.elemental_types[move.type]][this.elemental_types[DefPokemon.types[0]]]
            Type_mod *= DefPokemon.types[1] === undefined ? 1 : this.gen2to5matchups[this.elemental_types[move.type]][this.elemental_types[DefPokemon.types[1]]]
            
            // Weather
            if ((stage_cond.weather === this.weather_types["Harsh Sunlight"] && move.type === "Fire") ||
                (stage_cond.weather === this.weather_types["Extremely Harsh Sunlight"] && move.type === "Fire")){
                Weather_mod = 1.5
            }
            if ((stage_cond.weather === this.weather_types["Rain"] && move.type === "Water") ||
                (stage_cond.weather === this.weather_types["Heavy Rain"] && move.type === "Water")){
                Weather_mod = 1.5
            }
            if ((stage_cond.weather === this.weather_types["Harsh Sunlight"] && move.type === "Water") ||
                (stage_cond.weather === this.weather_types["Extremely Harsh Sunlight"] && move.type === "Water")){
                Weather_mod = 0.5
            }
            if ((stage_cond.weather === this.weather_types["Rain"] && move.type === "Fire") ||
                (stage_cond.weather === this.weather_types["Heavy Rain"] && move.type === "Fire")){
                Weather_mod = 0.5
            }

            if (AtkPokemon.status === "Burn" && isPhysical) {
                Burn_mod = .5
            }

            let baseDamage = Math.floor(Math.floor(Math.floor(2*level/5 + 2)*power*a/d)/50) + 2
            baseDamage *= Weather_mod
            baseDamage = this.pokeRound(baseDamage)
            min_damage = Math.floor(baseDamage * .85)
            max_damage = baseDamage
            min_damage *= Stab_mod
            min_damage = this.pokeRound(min_damage)
            max_damage *= Stab_mod
            max_damage = this.pokeRound(max_damage)
            min_damage *= Type_mod
            min_damage = this.pokeRound(min_damage)
            max_damage *= Type_mod
            max_damage = this.pokeRound(max_damage)
            min_damage *= Burn_mod
            min_damage = this.pokeRound(min_damage)
            max_damage *= Burn_mod
            max_damage = this.pokeRound(max_damage)
        } 

        if (generation === 7){

            let level = AtkPokemon.level
            let power = move.power

            if (stage_cond.terrain === 2 && move.type === "Electric") {
                power *= 1.5
                power = this.pokeRound(power)
            } else if (stage_cond.terrain === 3 && move.type === "Grass") {
                power *= 1.5
                power = this.pokeRound(power)
            } else if (stage_cond.terrain === 4 && move.type === "Dragon") {
                power *= .5
                power = this.pokeRound(power)
            } else if (stage_cond.terrain === 5 && move.type === "Psychic") {
                power *= 1.5
                power = this.pokeRound(power)
            }

            for (let i = 0; i < AtkPokemon.types.length; i++) {
                if (move.type == AtkPokemon.types[i]) {
                    Stab_mod = 1.5
                    break;
                }
            }

            let a = 0
            let d = 0

            let isPhysical

            if (move.category === "physical") {
                a = AtkPokemon.totalStats.Atk
                d = DefPokemon.totalStats.Def
                isPhysical = true
            } else {
                a = AtkPokemon.totalStats.SpAtk
                d = DefPokemon.totalStats.SpDef
                isPhysical = false
            }
            Type_mod = this.gen2to5matchups[this.elemental_types[move.type]][this.elemental_types[DefPokemon.types[0]]]
            Type_mod *= DefPokemon.types[1] === undefined ? 1 : this.gen2to5matchups[this.elemental_types[move.type]][this.elemental_types[DefPokemon.types[1]]]
            
            // Weather
            if ((stage_cond.weather === this.weather_types["Harsh Sunlight"] && move.type === "Fire") ||
                (stage_cond.weather === this.weather_types["Extremely Harsh Sunlight"] && move.type === "Fire")){
                Weather_mod = 1.5
            }
            if ((stage_cond.weather === this.weather_types["Rain"] && move.type === "Water") ||
                (stage_cond.weather === this.weather_types["Heavy Rain"] && move.type === "Water")){
                Weather_mod = 1.5
            }
            if ((stage_cond.weather === this.weather_types["Harsh Sunlight"] && move.type === "Water") ||
                (stage_cond.weather === this.weather_types["Extremely Harsh Sunlight"] && move.type === "Water")){
                Weather_mod = 0.5
            }
            if ((stage_cond.weather === this.weather_types["Rain"] && move.type === "Fire") ||
                (stage_cond.weather === this.weather_types["Heavy Rain"] && move.type === "Fire")){
                Weather_mod = 0.5
            }

            if (AtkPokemon.status === "Burn" && isPhysical) {
                Burn_mod = .5
            }

            let baseDamage = Math.floor(Math.floor(Math.floor(2*level/5 + 2)*power*a/d)/50) + 2
            baseDamage *= Weather_mod
            baseDamage = this.pokeRound(baseDamage)
            min_damage = Math.floor(baseDamage * .85)
            max_damage = baseDamage
            min_damage *= Stab_mod
            min_damage = this.pokeRound(min_damage)
            max_damage *= Stab_mod
            max_damage = this.pokeRound(max_damage)
            min_damage *= Type_mod
            min_damage = this.pokeRound(min_damage)
            max_damage *= Type_mod
            max_damage = this.pokeRound(max_damage)
            min_damage *= Burn_mod
            min_damage = this.pokeRound(min_damage)
            max_damage *= Burn_mod
            max_damage = this.pokeRound(max_damage)
        } 

        /*if (generation === 8){

            let max_rand_mod = 1
            let min_rand_mod = 0.85

            if (move.category <= this.move_category.Physical) {
                let a = AtkPokemon.attack
                let d = DefPokemon.defense
            } else if (move.category <= this.move_category.Special) {
                let a = AtkPokemon.special_attack
                let d = DefPokemon.special_defense
            }
            
            // Weather
            if (stage_cond.weather === this.weather_types.Harsh_Sunlight && move.type === this.elemental_types.Fire){
                Weather_mod = 1.5
            }
            if (stage_cond.weather === this.weather_types.Rain && move.type === this.elemental_types.Water){
                Weather_mod = 1.5
            }
            if (stage_cond.weather === this.weather_types.Harsh_Sunlight && move.type === this.elemental_types.Water){
                Weather_mod = 0.5
            }
            if (stage_cond.weather === this.weather_types.Rain && move.type === this.elemental_types.Fire){
                Weather_mod = 0.5
            }
        }*/

        return {min_damage, max_damage}
    }
}

export default moveCalculator;