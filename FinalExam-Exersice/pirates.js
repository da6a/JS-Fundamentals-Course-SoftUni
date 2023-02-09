function pirates(input) {

    let citiesMap = {};
    let command = input.shift();
    //collect info
    while (command !== 'Sail') {

        let townCommands = command.split('||');
        let town = townCommands[0];
        let population = Number(townCommands[1]);
        let gold = Number(townCommands[2]);


        if (!citiesMap.hasOwnProperty(town)) {// if there is not such city in the map, add it
            citiesMap[town] = { population, gold };
        } else {// if there is, update population and gold
            citiesMap[town].population += population;
            citiesMap[town].gold += gold;
        }
        command = input.shift();
    }
    command = input.shift();// remove Sail from the array
    //attack towns
    while (command !== 'End') {
        let townCommands = command.split('=>');

        if (townCommands[0] === 'Plunder') {// plunder the city
            let town = townCommands[1];
            let population = Number(townCommands[2]);
            let gold = Number(townCommands[3]);
            console.log(`${town} plundered! ${gold} gold stolen, ${population} citizens killed.`)

            citiesMap[town].population -= population; //remove population from the city
            citiesMap[town].gold -= gold;// remove gold from the city

            if (citiesMap[town].population <= 0 || citiesMap[town].gold <= 0) {// if there is no population or gold destroy the city
                console.log(`${town} has been wiped off the map!`);

                delete citiesMap[town];
            }


        } else// prosper
        {
            let town = townCommands[1];
            let gold = Number(townCommands[2]);

            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                citiesMap[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${citiesMap[town].gold} gold.`)
            }

        }
        command = input.shift(); //
    }
    //sort and print cities
    let workArr = Object.entries(citiesMap)
    let sorted = workArr.sort((a, b) => {
            return a[1].gold - b[1].gold;
    })
    if (sorted.length === 0) {

        console.log('Ahoy, Captain! All targets have been plundered and destroyed!')
    } else {
    }
    console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`)
    for (const kvp of sorted) {
        console.log(`${kvp[0]} -> Population: ${kvp[1].population} citizens, Gold: ${kvp[1].gold} kg`);

    }
}  



    // let cityInfo = {};
    // let command = data.shift();


    // while (command !== 'Sail') {
    //     let city = command.split('||');
    //     let cityName = city[0];
    //     let population = Number(city[1]);
    //     let gold = Number(city[2]);

    //     if (!cityInfo.hasOwnProperty(cityName)) {
    //         cityInfo[cityName] = [population, gold];
    //     } else {
    //         cityInfo[cityName].population += population;
    //         cityInfo[cityName].gold += gold;
    //     }
    //     command = data.shift();
    // }
    // //console.log(cityInfo);
    // command = data.shift();

    // while (command !== 'End') {
    //     let event = command.split('=>');
    //     let operation = event[0];
    //     let cityName = event[1];

    //     switch (operation) {
    //         case 'Plunder':
    //             let population = event[2];
    //             let gold = event[3];
    //             console.log(`${cityName} plundered! ${gold} gold stolen, ${population} citizens killed.`);
    //             cityInfo[cityName].population -= population;
    //             cityInfo[cityName].gold += gold;

    //             if(cityInfo[cityName].population <= 0 || cityInfo[cityName].gold <= 0){
    //                 console.log(`${cityName} has been wiped off the map!`);
    //                 delete cityInfo[cityName];
    //             }
    //             break;
    //         case 'Prosper':
    //             break;
    //     }

    //     command = data.shift();
    // }

}
// pirates(["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"])
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])

