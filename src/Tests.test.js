import StatCalculator from './StatCalculator.js';

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

//Test Resisted Move Damage
test('Resisted Move Damage Test', () => {
    //do expect statement here
});

//Test Regularly-Effective Move Damage
test("Regularly-Effective Move Damage Test", () => {
    //do expect statement here
});

//Test Super Effective Move Damage
test("Super Effective Move Damage Test", () => {
    //do expect statement here
})