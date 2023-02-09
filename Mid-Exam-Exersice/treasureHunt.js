function treasureHunt(input) {
    let treasureArr = input.shift().split('|');
    let index = 0;
    let command = input[index++];

    while (command !== "Yohoho!") {
        let commArr = command.split(" ")
        let currentCommand = commArr.shift();
        switch (currentCommand) {
            case "Loot":
                for (let i = 0; i < commArr.length; i++) {
                    if (!treasureArr.includes(commArr[i])) {
                        treasureArr.unshift(commArr[i]);
                    }
                }
                break;
            case "Drop":
                let indexToMove = Number(commArr[0]);
                if (indexToMove >= 0 && indexToMove < treasureArr.length) {
                    let movebleEl = treasureArr[indexToMove];
                    treasureArr.splice(indexToMove, 1);
                    treasureArr.push(movebleEl);
                }
                break;
            case "Steal":
                let stolenCount = Number(commArr[0]);
                let items = treasureArr.splice(-stolenCount);
                console.log(items.join(', '));
                break;
        }
        command = input[index++];
    }
    if (treasureArr.length === 0) {
        console.log(`Failed treasure hunt.`);
    } else {
        let sum = 0;
        for (let el of treasureArr) {
            sum += el.length;
        }
        let avrGain = sum / treasureArr.length;
        console.log(`Average treasure gain: ${avrGain.toFixed(2)} pirate credits.`);
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])