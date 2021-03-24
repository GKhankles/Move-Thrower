/*let baseStats = {
    health: 91,
    attack: 134,
    defense: 95,
    spAttack: 100,
    spDefense: 100,
    speed: 80
};
let EVs = {
    health: 150,
    attack: 232,
    defense: 80,
    spAttack: 0,
    spDefense: 192,
    speed: 252
}
let IVs = {
    health: 20,
    attack: 1,
    defense: 31,
    spAttack: 26,
    spDefense: 10,
    speed: 7
}

getStatTotals(baseStats, EVs, IVs, 100, "rash"); */

function getStatTotals(baseStats, EVs, IVs, level, nature) {
    let statTotals = {
        HP: setHealth(baseStats.health, EVs.health, IVs.health, level, nature),
        Attack: setAttack(baseStats.attack, EVs.attack, IVs.attack, level, nature),
        Defense: setDefense(baseStats.defense, EVs.defense, IVs.defense, level, nature),
        SpAttack: setSpAttack(baseStats.spAttack, EVs.spAttack, IVs.spAttack, level, nature),
        SpDefense: setSpDefense(baseStats.spDefense, EVs.spDefense, IVs.spDefense, level, nature),
        Speed: setSpeed(baseStats.speed, EVs.speed, IVs.speed, level, nature)
    };

    return statTotals;
}

//does gen 3 calculation for now
function setHealth(baseHealth, EVHealth, IVHealth, level, nature) {
    let HP = ((2 * baseHealth + IVHealth + Math.floor(EVHealth / 4)) * level);
    HP = Math.floor(HP / 100);
    HP = HP + level + 10;
    return HP;
}

function setAttack(baseAttack, EVAttack, IVAttack, level, nature) {
    let Attack = ((2 * baseAttack + IVAttack + Math.floor(EVAttack / 4)) * level);
    Attack = Math.floor(Attack / 100);
    Attack = Attack + 5;
    let multiplier = 1;
    if (nature == "lonely" || nature == "brave" ||
        nature == "adamant" || nature == "naughty") {
        multiplier = 1.1;
    }
    if (nature == "bold" || nature == "timid" ||
        nature == "modest" || nature == "calm") {
        multiplier = .9;
    }
    Attack = Math.floor(Attack * multiplier);
    return Attack;
}

function setDefense(baseDefense, EVDefense, IVDefense, level, nature) {
    let Defense = ((2 * baseDefense + IVDefense + Math.floor(EVDefense / 4)) * level);
    Defense = Math.floor(Defense / 100);
    Defense = Defense + 5;
    let multiplier = 1;
    if (nature == "bold" || nature == "relaxed" ||
        nature == "impish" || nature == "lax") {
        multiplier = 1.1;
    }
    if (nature == "lonely" || nature == "hasty" ||
        nature == "mild" || nature == "gentle") {
        multiplier = .9;
    }
    Defense = Math.floor(Defense * multiplier);
    return Defense;
}

function setSpAttack(baseSpAttack, EVSpAttack, IVSpAttack, level, nature) {
    let SpAttack = ((2 * baseSpAttack + IVSpAttack + Math.floor(EVSpAttack / 4)) * level);
    SpAttack = Math.floor(SpAttack / 100);
    SpAttack = SpAttack + 5;
    let multiplier = 1;
    if (nature == "modest" || nature == "mild" ||
        nature == "quiet" || nature == "rash") {
        multiplier = 1.1;
    }
    if (nature == "adamant" || nature == "impish" ||
        nature == "jolly" || nature == "careful") {
        multiplier = .9;
    }
    SpAttack = Math.floor(SpAttack * multiplier);
    return SpAttack;
}

function setSpDefense(baseSpDefense, EVSpDefense, IVSpDefense, level, nature) {
    let SpDefense = ((2 * baseSpDefense + IVSpDefense + Math.floor(EVSpDefense / 4)) * level);
    SpDefense = Math.floor(SpDefense / 100);
    SpDefense = SpDefense + 5;
    let multiplier = 1;
    if (nature == "calm" || nature == "gentle" ||
        nature == "sassy" || nature == "careful") {
        multiplier = 1.1;
    }
    if (nature == "naughty" || nature == "lax" ||
        nature == "naive" || nature == "rash") {
        multiplier = .9;
    }
    SpDefense = Math.floor(SpDefense * multiplier);
    return SpDefense;
}

function setSpeed(baseSpeed, EVSpeed, IVSpeed, level, nature) {
    let Speed = ((2 * baseSpeed + IVSpeed + Math.floor(EVSpeed / 4)) * level);
    Speed = Math.floor(Speed / 100);
    Speed = Speed + 5;
    let multiplier = 1;
    if (nature == "timid" || nature == "hasty" ||
        nature == "jolly" || nature == "naive") {
        multiplier = 1.1;
    }
    if (nature == "brave" || nature == "relaxed" ||
        nature == "quiet" || nature == "sassy") {
        multiplier = .9;
    }
    Speed = Math.floor(Speed * multiplier);
    return Speed;
}