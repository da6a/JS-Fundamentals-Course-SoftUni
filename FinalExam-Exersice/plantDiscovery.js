function plantDiscovery(input) {
    let plantsMap = new Map();
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let [plantName, rarity] = input[i].split('<->');
        rarity = Number(rarity);
        plantsMap.set(plantName, []);
        plantsMap.get(plantName).push(rarity);
        if(plantsMap.has(plantName)){
            plantsMap.get(plantName).shift();
            plantsMap.get(plantName).unshift(rarity);
        }
    }
    for (let i = n; i < input.length; i++) {
        let line = input[i].split(': ');

        if (line[0] === "Exhibition") {
            break;
        } else {
            let command = line.shift();
            let [plantName, rating] = line[0].split(' - ');
            if (!plantsMap.has(plantName)) {
                console.log('error');
                break;
            }
            switch (command) {
                case 'Rate':
                    plantsMap.get(plantName).push(rating);
                    break;
                case 'Update':
                    plantsMap.get(plantName).shift();
                    plantsMap.get(plantName).unshift(rating);
                    break;
                case 'Reset':
                    plantsMap.get(plantName).splice(1,);
                    break;   
             }
        }
    }
    console.log('Plants for the exhibition:');
    for (let [plantName, plantInfo] of plantsMap) {
        let counter = 0;
        let avgRating = 0;
        for (let n = 1; n < plantInfo.length; n++) {
            let rate = Number(plantInfo[n]);
            counter++;
            avgRating += rate;
        }
        if (plantInfo.length < 2) {
            console.log(`- ${plantName}; Rarity: ${plantInfo[0]}; Rating: 0.00`);
        } else {
            console.log(`- ${plantName}; Rarity: ${plantInfo[0]}; Rating: ${(avgRating / counter).toFixed(2)}`);
        }
    }
}
plantDiscovery(["3",
"Candelabra<->0",
"Oahu<->10",
"Oahu<->12",
"Rate: Oahu - 0",
"Rate: Candelabra - 6",
"Exhibition"])

