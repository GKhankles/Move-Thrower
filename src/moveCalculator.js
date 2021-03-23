//This file implements the move calculator

//This function calls all auxiliary functions and returns an ordered list of all moves ranked 
//by most damage to least damage
//TODO: Test out with array of numbers or something like that
function moveCalculator(Moves, AtkPokemon, DefPokemon){
    //Array of the damage of every move. Retains the same index as the passed in Moves object
    move_Damage = []
    for (move in Moves){
        //Calculate Move power
        damage = calculateDamage(move, AtkPokemon, DefPokemon)
        move_Damage.push(damage)
    }

    //Sorted list of moves to be returned
    optimalMoveList = []
    for (val in move_Damage){
        //get index of max damage
        let i = move_Damage.indexOf(Math.max(...move_Damage))
        //put move with max damage into sorted list
        optimalMoveList.push(Moves[i])
        //remove that max damage val from move_Damage array
        move_Damage.splice(i, 1)
    }
    return optimalMoveList
}

//This function calculates the damage for each move
function calculateDamage(move, AtkPokemon, DefPokemon){
    power = move.power
    ad = 0 //idk how this one is calculated exactly
    modifier = 0 //this ones complicated
    damage = (((2*AtkPokemon.level/5 + 2)*power*ad)/50 + 2)*modifier
}