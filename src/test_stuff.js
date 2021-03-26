
move_Damage = [{a:1,b:1},{a:2,b:2}]

for (val in move_Damage){
    //get index of max damage
    let i = move_Damage.indexOf(Math.max(...move_Damage))
    //put move with max damage into sorted list
    optimalMoveList.push(Moves[i])
    //remove that max damage val from move_Damage array
    move_Damage.splice(i, 1)
}

move_Damage = move_Damage.sort((a,b) =>  b.max_dmg-a.max_dmg )