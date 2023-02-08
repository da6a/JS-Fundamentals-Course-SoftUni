function inventory(input) {
    let workingArr = [];
    for (let info of input) {
        let [name, level, items] = info.split(' / ');
        let currentHero = {
            name: name,
            level: +level,
            items: items
        }
        workingArr.push(currentHero);
    }
    let sorted = workingArr.sort((a, b) => a.level - b.level);
    for (let hero of sorted) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])