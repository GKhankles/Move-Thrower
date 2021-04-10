import StatCalculator from './StatCalculator.js';
import MoveCalculator from './moveCalculator.js';

let moveCalculator = new MoveCalculator();
let statCalculator = new StatCalculator();

let baseStats = {
    HP: 95,
    Atk: 135,
    Def: 80,
    SpAtk: 110,
    SpDef: 80,
    Spd: 100
}

let IVs = {
    HP: 31,
    Atk: 31,
    Def: 31,
    SpAtk: 31,
    SpDef: 31,
    Spd: 31
}

let EVs = {
    HP: 100,
    Atk: 40,
    Def: 40,
    SpAtk: 0,
    SpDef: 80,
    Spd: 4
}

let level = 95;

let nature = "quiet";

//HP Calculation Test
test('HP Calculation Test', () => {
    expect(statCalculator.getStatTotals(baseStats, EVs, IVs, level, nature).HP).toBe(338);
});

//Atk Calculation Test
test('Attack Calculation Test', () => {
    expect(statCalculator.getStatTotals(baseStats, EVs, IVs, level, nature).Atk).toBe(300);
});

//Def Calculation Test
test('Defense Calculation Test', () => {
    expect(statCalculator.getStatTotals(baseStats, EVs, IVs, level, nature).Def).toBe(195);
});

//SpAtk Calculation Test
test('Special Attack Calculation Test', () => {
    expect(statCalculator.getStatTotals(baseStats, EVs, IVs, level, nature).SpAtk).toBe(267);
});

//SpDef Calculation Test
test('Special Defense Calculation Test', () => {
    expect(statCalculator.getStatTotals(baseStats, EVs, IVs, level, nature).SpDef).toBe(205);
});

//Spd Calculation Test
test('Speed Calculation Test', () => {
    expect(statCalculator.getStatTotals(baseStats, EVs, IVs, level, nature).Spd).toBe(202);
});


//GENERATION III TESTS

let pokemon1 = {
    types: ["Dragon", "Flying"],
    level: 95,
    totalStats: {
        Atk: 267,
        Def: 195,
        SpAtk: 267,
        SpDef: 205,
        Spd: 202
    }
};

let flamethrower = {
    type: "Fire",
    power: 95,
    category: "special"
};

let stage_cond = {
    weather: 1
};

let damageCalc1 = moveCalculator.calculateDamage(flamethrower, pokemon1, pokemon1, 3, stage_cond);

//Test Resisted Move Damage
test('Gen 3 Resisted Move Damage Test', () => {
    expect(damageCalc1.min_damage).toBe(42) &&
    expect(damageCalc1.max_damage).toBe(50);
});

let dragonbreath = {
    type: "Dragon",
    power: 60
};

let damageCalc2 = moveCalculator.calculateDamage(dragonbreath, pokemon1, pokemon1, 3, stage_cond);

//Test Super Effective Move Damage
test('Gen 3 Super Effective Move Damage Test', () => {
    expect(damageCalc2.min_damage).toBe(163) &&
    expect(damageCalc2.max_damage).toBe(192);
});

let pokemon2 = {
    types: ["Dragon", "Flying"],
    level: 95,
    totalStats: {
        Atk: 267,
        Def: 195,
        SpAtk: 267,
        SpDef: 205,
        Spd: 202
    },
    status: "Burn"
};

let aerialace = {
    type: "Flying",
    power: 60,
    category: "physical"
}

let damageCalc3 = moveCalculator.calculateDamage(aerialace, pokemon2, pokemon2, 3, stage_cond)

//Test Burn Damage
test("Gen 3 Burn Damage Test", () => {
    expect(damageCalc3.min_damage).toBe(43) &&
    expect(damageCalc3.max_damage).toBe(51)
});

let stage_cond_sun = {
    weather: 2
};
let damageCalc4 = moveCalculator.calculateDamage(flamethrower, pokemon2, pokemon2, 3, stage_cond_sun)

//Test Sunlight
test("Gen 3 Sunlight Modifier Test", () => {
    expect(damageCalc4.min_damage).toBe(62) &&
    expect(damageCalc4.max_damage).toBe(74);
});

let stage_cond_rain = {
    weather: 3
};
let damageCalc5 = moveCalculator.calculateDamage(flamethrower, pokemon2, pokemon2, 3, stage_cond_rain)

//Test Rain
test("Gen 3 Rain Modifier Test", () => {
    expect(damageCalc5.min_damage).toBe(21) &&
    expect(damageCalc5.max_damage).toBe(25);
});

//GENERATION IV TESTS

let pokemon3 = {
    types: ["Normal", "Flying"],
    level: 47,
    totalStats: {
        Atk: 140,
        SpAtk: 66
    },
    status: "Healthy"
}

let pokemon4 = {
    types: ["Grass", "Poison"],
    totalStats: {
        Def: 77,
        SpDef: 125
    }
}

let closecombat = {
    type: "Fighting",
    power: 120,
    category: "physical"
}

let damageCalc6 = moveCalculator.calculateDamage(closecombat, pokemon3, pokemon4, 4, stage_cond)

test("Gen 4 Resisted Move Damage Test", () => {
    expect(damageCalc6.min_damage).toBe(37) &&
    expect(damageCalc6.max_damage).toBe(44)
});

let damageCalc7 = moveCalculator.calculateDamage(aerialace, pokemon3, pokemon4, 4, stage_cond)

//Test Super Effective Move Damage
test("Gen 4 Super Effective Test", () => {
    expect(damageCalc7.min_damage).toBe(114) &&
    expect(damageCalc7.max_damage).toBe(134)
});

let hyperbeam = {
    type: "Normal",
    power: 150,
    category: "special"
}

let damageCalc8 = moveCalculator.calculateDamage(hyperbeam, pokemon3, pokemon4, 4, stage_cond)

//Test Special Attack
test("Gen 4 Special Attack Damage Test", () => {
    expect(damageCalc8.min_damage).toBe(42) &&
    expect(damageCalc8.max_damage).toBe(49);
});

let heatwave = {
    type: "Fire",
    power: 100,
    category: "special"
}

let damageCalc9 = moveCalculator.calculateDamage(heatwave, pokemon3, pokemon4, 4, stage_cond_sun)

//Test Sunlight Modifier
test("Gen 4 Sunlight Modifier Test", () => {
    expect(damageCalc9.min_damage).toBe(56) &&
    expect(damageCalc8.max_damage).toBe(66);
});

let damageCalc10 = moveCalculator.calculateDamage(heatwave, pokemon3, pokemon4, 4, stage_cond_rain)

//Test Rain Modifier
test("Gen 4 Rain Modifier Test", () => {
    expect(damageCalc10.min_damage).toBe(20) &&
    expect(damageCalc10.max_damage).toBe(24);
});

let pokemon5 = {
    types: ["Normal", "Flying"],
    level: 47,
    totalStats: {
        Atk: 140,
        SpAtk: 66
    },
    status: "Burn"
}

let damageCalc11 = moveCalculator.calculateDamage(aerialace, pokemon5, pokemon4, 4, stage_cond)

//Test Burn Damage
test("Gen 4 Burn Damage Test", () => {
    expect(damageCalc11.min_damage).toBe(56) &&
    expect(damageCalc11.max_damage).toBe(68);
});

//GENERATION V TESTS

let pokemon6 = {
    types: ["Water"],
    level: 99,
    totalStats: {
        Atk: 233,
        SpAtk: 249
    },
    status: "Healthy"
}

let pokemon7 = {
    types: ["Water"],
    level: 99,
    totalStats: {
        Atk: 233,
        SpAtk: 249
    },
    status: "Burn"
}

let pokemon8 = {
    types: ["Dragon"],
    level: 99,
    totalStats: {
        Def: 213,
        SpDef: 174
    }
}

let waterfall = {
    type: "Water",
    power: 80,
    category: "physical"
}

let damageCalc12 = moveCalculator.calculateDamage(waterfall, pokemon6, pokemon8, 5, stage_cond)

//Test Resisted Move Damage
test("Gen 5 Resisted Move Damage Test", () => {
    expect(damageCalc12.min_damage).toBe(46) &&
    expect(damageCalc12.max_damage).toBe(54);
});

let icebeam = {
    type: "Ice",
    power: 95,
    category: "special"
}

let damageCalc13 = moveCalculator.calculateDamage(icebeam, pokemon6, pokemon8, 5, stage_cond)

//Test Super Effective Move Damage
test("Gen 5 Super Effective Test", () => {
    expect(damageCalc13.min_damage).toBe(192) &&
    expect(damageCalc13.max_damage).toBe(226);
});

let damageCalc14 = moveCalculator.calculateDamage(waterfall, pokemon6, pokemon8, 5, stage_cond_sun)

//Test Sunlight Modifier
test("Gen 5 Sunlight Modifier Test", () => {
    expect(damageCalc14.min_damage).toBe(22) &&
    expect(damageCalc14.max_damage).toBe(27);
});

let damageCalc15 = moveCalculator.calculateDamage(waterfall, pokemon6, pokemon8, 5, stage_cond_rain)

//Test Rain Modifier
test("Gen 5 Rain Modifier Test", () => {
    expect(damageCalc15.min_damage).toBe(69) &&
    expect(damageCalc15.max_damage).toBe(81);
});

let damageCalc16 = moveCalculator.calculateDamage(waterfall, pokemon7, pokemon8, 5, stage_cond)

//Test Burn Damage Modifier
test("Gen 5 Burn Damage Test", () => {
    expect(damageCalc16.min_damage).toBe(23) &&
    expect(damageCalc16.max_damage).toBe(27);
});

//GENERATION VI TESTS

let pokemon9 = {
    types: ["Grass", "Fighting"],
    level: 99,
    totalStats: {
        Atk: 247,
        SpAtk: 182
    },
    status: "Healthy"
}

let pokemon10 = {
    types: ["Grass", "Fighting"],
    level: 99,
    totalStats: {
        Atk: 247,
        SpAtk: 182
    },
    status: "Burn"
}

let pokemon11 = {
    types: ["Ghost", "Poison"],
    level: 99,
    totalStats: {
        Def: 154,
        SpDef: 184
    }
}

let hammerarm = {
    type: "Fighting",
    power: 90,
    category: "physical"
}

let damageCalc17 = moveCalculator.calculateDamage(hammerarm, pokemon9, pokemon11, 6, stage_cond)

//Test Immune Move Damage
test("Gen 6 Immune Move Damage Test", () => {
    expect(damageCalc17.min_damage).toBe(0) &&
    expect(damageCalc17.max_damage).toBe(0);
});

let solarbeam = {
    type: "Grass",
    power: 120,
    category: "special"
}

let damageCalc18 = moveCalculator.calculateDamage(solarbeam, pokemon9, pokemon11, 6, stage_cond)

//Test Resisted Move Damage
test("Gen 6 Resisted Move Damage Test", () => {
    expect(damageCalc18.min_damage).toBe(63) &&
    expect(damageCalc18.max_damage).toBe(74);
});

let bite = {
    type: "Dark",
    power: 60,
    category: "physical"
}

let damageCalc19 = moveCalculator.calculateDamage(bite, pokemon9, pokemon11, 6, stage_cond)

//Test Super Effective Move Damage
test("Gen 6 Super Effective Move Damage Test", () => {
    expect(damageCalc19.min_damage).toBe(136) &&
    expect(damageCalc19.max_damage).toBe(160);
});

let updatedFlamethrower = {
    type: "Fire",
    power: 90,
    category: "special"
}

let damageCalc20 = moveCalculator.calculateDamage(updatedFlamethrower, pokemon9, pokemon11, 6, stage_cond_sun)

//Test Sunlight Modifier
test("Gen 6 Sunlight Modifier Test", () => {
    expect(damageCalc20.min_damage).toBe(94) &&
    expect(damageCalc20.max_damage).toBe(111);
});

let damageCalc21 = moveCalculator.calculateDamage(updatedFlamethrower, pokemon9, pokemon11, 6, stage_cond_rain)

//Test Rain Modifier
test("Gen 6 Rain Modifier Test", () => {
    expect(damageCalc21.min_damage).toBe(31) &&
    expect(damageCalc21.max_damage).toBe(37);
});

let rocktomb = {
    type: "Rock",
    power: 60,
    category: "physical"
};

let damageCalc22 = moveCalculator.calculateDamage(rocktomb, pokemon10, pokemon11, 6, stage_cond)

//Test Burn Damage
test("Gen 6 Burn Damage Test", () => {
    expect(damageCalc22.min_damage).toBe(34) &&
    expect(damageCalc22.max_damage).toBe(40);
});

//GENERATION VII TESTS

let damageCalc23 = moveCalculator.calculateDamage(waterfall, pokemon6, pokemon8, 7, stage_cond)

test("Gen 7 Resisted Move Damage Test", () => {
    expect(damageCalc23.min_damage).toBe(46) &&
    expect(damageCalc23.max_damage).toBe(54);
});

let updatedIcebeam = {
    type: "Ice",
    power: 90,
    category: "special"
}

let damageCalc24 = moveCalculator.calculateDamage(updatedIcebeam, pokemon6, pokemon8, 7, stage_cond)

test("Gen 7 Super Effective Move Damage Test", () => {
    expect(damageCalc24.min_damage).toBe(180) &&
    expect(damageCalc24.max_damage).toBe(214);
});

let damageCalc25 = moveCalculator.calculateDamage(waterfall, pokemon6, pokemon8, 7, stage_cond_sun)

test("Gen 7 Sunlight Modifier Test", () => {
    expect(damageCalc25.min_damage).toBe(22) &&
    expect(damageCalc25.max_damage).toBe(27);
});

let damageCalc26 = moveCalculator.calculateDamage(waterfall, pokemon6, pokemon8, 7, stage_cond_rain)

test("Gen 7 Rain Modifier Test", () => {
    expect(damageCalc26.min_damage).toBe(69) &&
    expect(damageCalc26.max_damage).toBe(81);
});

let damageCalc27 = moveCalculator.calculateDamage(waterfall, pokemon7, pokemon8, 7, stage_cond)

test("Gen 7 Burn Damage Test", () => {
    expect(damageCalc27.min_damage).toBe(23) &&
    expect(damageCalc27.max_damage).toBe(27);
});

let stage_cond_electric = {
    terrain: 2
}

let pokemon12 = {
    types: ["Electric"],
    level: 99,
    totalStats: {
        Atk: 279,
        SpAtk: 223
    },
    status: "Healthy"
}

let pokemon13 = {
    types: ["Normal"],
    totalStats: {
        Def: 273,
        SpDef: 273
    }
}

let thunderbolt = {
    type: "Electric",
    power: 90,
    category: "special"
}

let damageCalc28 = moveCalculator.calculateDamage(thunderbolt, pokemon12, pokemon13, 7, stage_cond_electric)

test("Gen 7 Electric Terrain Damage Test", () => {
    expect(damageCalc28.min_damage).toBe(117) &&
    expect(damageCalc28.max_damage).toBe(138);
});

let woodhammer = {
    type: "Grass",
    power: 120,
    category: "physical"
}

let stage_cond_grassy = {
    terrain: 3
}

let damageCalc29 = moveCalculator.calculateDamage(woodhammer, pokemon12, pokemon13, 7, stage_cond_grassy)

test("Gen 7 Grassy Terrain Damage Test", () => {
    expect(damageCalc29.min_damage).toBe(129) &&
    expect(damageCalc29.max_damage).toBe(152);
});

let outrage = {
    type: "Dragon",
    power: 120,
    category: "physical"
}

let stage_cond_misty = {
    terrain: 4
}

let damageCalc30 = moveCalculator.calculateDamage(outrage, pokemon12, pokemon13, 7, stage_cond_misty)

test("Gen 7 Grassy Terrain Damage Test", () => {
    expect(damageCalc30.min_damage).toBe(44) &&
    expect(damageCalc30.max_damage).toBe(52);
});

let psychic = {
    type: "Psychic",
    power: 90,
    category: "special"
}

let stage_cond_psychic = {
    terrain: 5
}

let damageCalc31 = moveCalculator.calculateDamage(psychic, pokemon12, pokemon13, 7, stage_cond_psychic)

test("Gen 7 Grassy Terrain Damage Test", () => {
    expect(damageCalc31.min_damage).toBe(78) &&
    expect(damageCalc31.max_damage).toBe(92);
});