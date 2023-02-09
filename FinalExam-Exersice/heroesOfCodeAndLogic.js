function solve(input) {
    let n = Number(input.shift());
    let heroMap = new Map();

    for (let line of input) {
        if (line !== "End") {
            if (!line.includes("-")) {
                let [hero, hp, mp] = line.split(' ');
                heroMap.set(hero, []);
                heroMap.get(hero).push(Number(hp));
                heroMap.get(hero).push(Number(mp));
            } else {
                let operation = line.split(' - ');
                let currentHero = operation[1];
                switch (operation[0]) {
                    case 'CastSpell':
                        let givenMp = Number(operation[2]);
                        let spellName = operation[3];
                        if (givenMp <= heroMap.get(currentHero)[1]) {
                            heroMap.get(currentHero)[1] -= givenMp;
                            console.log(`${currentHero} has successfully cast ${spellName} and now has ${heroMap.get(currentHero)[1]} MP!`);
                        } else {
                            console.log(`${currentHero} does not have enough MP to cast ${spellName}!`);
                        }
                        break;
                    case 'TakeDamage':
                        let damage = Number(operation[2]);
                        let attacker = operation[3];
                        heroMap.get(currentHero)[0] -= damage;
                        if (heroMap.get(currentHero)[0] > 0) {
                            console.log(`${currentHero} was hit for ${damage} HP by ${attacker} and now has ${heroMap.get(currentHero)[0]} HP left!`);
                        } else {
                            heroMap.delete(currentHero);
                            console.log(`${currentHero} has been killed by ${attacker}!`);
                        }
                        break;
                    case 'Recharge':
                        let amount = Number(operation[2]);
                        let oldMp = heroMap.get(currentHero)[1];
                        heroMap.get(currentHero)[1] += amount;
                        if (heroMap.get(currentHero)[1] > 200) {
                            console.log(`${currentHero} recharged for ${200 - oldMp} MP!`);
                            heroMap.get(currentHero)[1] = 200;
                        } else {
                            console.log(`${currentHero} recharged for ${amount} MP!`);
                        }
                        break;
                    case 'Heal':
                        let hpAmount = Number(operation[2]);
                        let oldHp = heroMap.get(currentHero)[0];
                        heroMap.get(currentHero)[0] += hpAmount;
                        if (heroMap.get(currentHero)[0] > 100) {
                            console.log(`${currentHero} healed for ${100 - oldHp} HP!`);
                            heroMap.get(currentHero)[0] = 100;
                        } else {
                            console.log(`${currentHero} healed for ${hpAmount} HP!`);
                        }
                        break;
                }
            }
        }
    }
    for (let [hero, heroInfo] of heroMap) {
        console.log(`${hero}`);
        console.log(`  HP: ${heroInfo[0]}`);
            console.log(`  MP: ${heroInfo[1]}`); 
        } 
}       
solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])
