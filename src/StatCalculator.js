import './global.js';

export class StatCalculator {
    constructor() {
        this.getStatTotals = this.getStatTotals.bind(this);
    }

getStatTotals(baseStats, EVs, IVs, level, nature) {
    if (global.curGeneration < 3) {
        let healthIV = 0;
        if (IVs.Atk % 2 == 1) {
            healthIV += 8;
        }
        if (IVs.Def % 2 == 1) {
            healthIV += 4;
        }
        if (IVs.Spd % 2 == 1) {
            healthIV += 2;
        }
        if (IVs.SPAtk % 2 == 1) {
            healthIV += 1;
        }
        let statTotals = {
            HP: this.setHealth12(baseStats.HP, EVs.HP, healthIV, level),
            Atk: this.setOtherStat12(baseStats.Atk, EVs.Atk, IVs.Atk, level),
            Def: this.setOtherStat12(baseStats.Def, EVs.Def, IVs.Def, level),
            SpAtk: this.setOtherStat12(baseStats.SpAtk, EVs.SpAtk, IVs.SpAtk, level),
            SpDef: this.setOtherStat12(baseStats.SpDef, EVs.SpDef, IVs.SpDef, level),
            Spd: this.setOtherStat12(baseStats.Spd, EVs.Spd, IVs.Spd, level)
        }
        return statTotals;
    }
    let tempNature = nature.toLowerCase();
    let statTotals = {
        HP: this.setHealth(baseStats.HP, EVs.HP, IVs.HP, level, tempNature),
        Atk: this.setAttack(baseStats.Atk, EVs.Atk, IVs.Atk, level, tempNature),
        Def: this.setDefense(baseStats.Def, EVs.Def, IVs.Def, level, tempNature),
        SpAtk: this.setSpAttack(baseStats.SpAtk, EVs.SpAtk, IVs.SpAtk, level, tempNature),
        SpDef: this.setSpDefense(baseStats.SpDef, EVs.SpDef, IVs.SpDef, level, tempNature),
        Spd: this.setSpeed(baseStats.Spd, EVs.Spd, IVs.Spd, level, tempNature)
    };

    return statTotals;
}

setHealth12(baseHealth, EVHealth, IVHealth, level) {
    let EVVar = Math.ceil(Math.sqrt(EVHealth));
    if (EVVar > 255) {
        EVVar = 255;
    }
    EVVar = Math.floor(EVVar / 4);
    let HP = Math.floor((((baseHealth + IVHealth) * 2 + EVVar) * level)/100) + level + 10;
    return HP;
}

setOtherStat12(baseStat, EVStat, IVStat, level) {
    let EVVar = Math.ceil(Math.sqrt(EVStat));
    if (EVVar > 255) {
        EVVar = 255;
    }
    EVVar = Math.floor(EVVar / 4);
    let stat = Math.floor((((baseStat + IVStat) * 2 + EVVar) * level)/100) + 5
    return stat
}

//does gen 3 calculation for now
 setHealth(baseHealth, EVHealth, IVHealth, level, nature) {
    let HP = ((2 * baseHealth + IVHealth + Math.floor(EVHealth / 4)) * level);
    HP = Math.floor(HP / 100);
    HP = HP + level + 10;
    return HP;
}

 setAttack(baseAttack, EVAttack, IVAttack, level, nature) {
    let Attack = ((2 * baseAttack + IVAttack + Math.floor(EVAttack / 4)) * level);
    Attack = Math.floor(Attack / 100);
    Attack = Attack + 5;
    let multiplier = 1;
    if (nature === "lonely" || nature === "brave" ||
        nature === "adamant" || nature === "naughty") {
        multiplier = 1.1;
    }
    if (nature === "bold" || nature === "timid" ||
        nature === "modest" || nature === "calm") {
        multiplier = .9;
    }
    Attack = Math.floor(Attack * multiplier);
    return Attack;
}

 setDefense(baseDefense, EVDefense, IVDefense, level, nature) {
    let Defense = ((2 * baseDefense + IVDefense + Math.floor(EVDefense / 4)) * level);
    Defense = Math.floor(Defense / 100);
    Defense = Defense + 5;
    let multiplier = 1;
    if (nature === "bold" || nature === "relaxed" ||
        nature === "impish" || nature === "lax") {
        multiplier = 1.1;
    }
    if (nature === "lonely" || nature === "hasty" ||
        nature === "mild" || nature === "gentle") {
        multiplier = .9;
    }
    Defense = Math.floor(Defense * multiplier);
    return Defense;
}

 setSpAttack(baseSpAttack, EVSpAttack, IVSpAttack, level, nature) {
    let SpAttack = ((2 * baseSpAttack + IVSpAttack + Math.floor(EVSpAttack / 4)) * level);
    SpAttack = Math.floor(SpAttack / 100);
    SpAttack = SpAttack + 5;
    let multiplier = 1;
    if (nature === "modest" || nature === "mild" ||
        nature === "quiet" || nature === "rash") {
        multiplier = 1.1;
    }
    if (nature === "adamant" || nature === "impish" ||
        nature === "jolly" || nature === "careful") {
        multiplier = .9;
    }
    SpAttack = Math.floor(SpAttack * multiplier);
    return SpAttack;
}

 setSpDefense(baseSpDefense, EVSpDefense, IVSpDefense, level, nature) {
    let SpDefense = ((2 * baseSpDefense + IVSpDefense + Math.floor(EVSpDefense / 4)) * level);
    SpDefense = Math.floor(SpDefense / 100);
    SpDefense = SpDefense + 5;
    let multiplier = 1;
    if (nature === "calm" || nature === "gentle" ||
        nature === "sassy" || nature === "careful") {
        multiplier = 1.1;
    }
    if (nature === "naughty" || nature === "lax" ||
        nature === "naive" || nature === "rash") {
        multiplier = .9;
    }
    SpDefense = Math.floor(SpDefense * multiplier);
    return SpDefense;
}

 setSpeed(baseSpeed, EVSpeed, IVSpeed, level, nature) {
    let Speed = ((2 * baseSpeed + IVSpeed + Math.floor(EVSpeed / 4)) * level);
    Speed = Math.floor(Speed / 100);
    Speed = Speed + 5;
    let multiplier = 1;
    if (nature === "timid" || nature === "hasty" ||
        nature === "jolly" || nature === "naive") {
        multiplier = 1.1;
    }
    if (nature === "brave" || nature === "relaxed" ||
        nature === "quiet" || nature === "sassy") {
        multiplier = .9;
    }
    Speed = Math.floor(Speed * multiplier);
    return Speed;
}
}

export default StatCalculator;