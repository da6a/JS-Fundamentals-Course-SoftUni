function spaceTravel(input) {
    let arr = input[0].split("||");
    let startFuel = Number(input[1]);
    let startAmmunition = Number(input[2]);

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        let innerArr = command.split(" ");
        let operation = innerArr.shift();
        switch (operation) {
            case "Travel":
                let lightYears = Number(innerArr[0]);
                if ((startFuel - lightYears) >= 0) {
                    startFuel -= lightYears;
                    console.log(`The spaceship travelled ${lightYears} light-years.`);
                } else {
                    console.log(`Mission failed.`);
                    return;
                }
                break;
            case "Enemy":
                let armour = Number(innerArr[0]);
                if (startAmmunition >= armour) {
                    startAmmunition -= armour;
                    console.log(`An enemy with ${armour} armour is defeated.`);
                } else {
                    if ((startFuel / 2) >= armour) {
                        startFuel -= armour * 2
                        console.log(`An enemy with ${armour} armour is outmaneuvered.`);
                    } else {
                        console.log(`Mission failed.`);
                        return;
                    }
                }
                break;
            case "Repair":
                let givenAmount = Number(innerArr[0]);
                startFuel += givenAmount;
                startAmmunition += givenAmount * 2;
                console.log(`Ammunitions added: ${givenAmount * 2}.`);
                console.log(`Fuel added: ${givenAmount}.`);
                break;
            case "Titan":
                console.log(`You have reached Titan, all passengers are safe.`);
                return;
        }
    }
}
//spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan', '50', '80']);
spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', '60', '100'])

