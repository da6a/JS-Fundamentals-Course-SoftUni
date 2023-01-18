function dungeonestDark(arr) {
    let text = String(arr[0])
    let newArr = text.split('|')
    let rooms = [];
    let health = 100;
    let totalCoins = 0;

    for (let i = 0; i < newArr.length; i++) {
        let element = String(newArr[i]).split(' ');
        rooms.push(element[0], element[1]);
    }
    let roomsCounter = 0;
    let index = 0;
    let isDead = false;
    while (index < rooms.length) {
        let word = rooms[index]
        roomsCounter++;
        switch (word) {
            case 'chest':
                index++
                coins = Number(rooms[index]);
                totalCoins += coins;
                console.log(`You found ${coins} bitcoins.`);
                break;
            case "potion":
                index++;
                if ((health + Number(rooms[index])) > 100) {
                    console.log(`You healed for ${100 - health} hp.`);
                    health = 100
                } else {
                    health += Number(rooms[index]);
                    console.log(`You healed for ${Number(rooms[index])} hp.`);
                }
                console.log(`Current health: ${health} hp.`);
                break;
            default:
                index++
                health -= Number(rooms[index])
                if (health > 0) {
                    console.log(`You slayed ${word}.`);
                } else {
                    console.log(`You died! Killed by ${word}.`);
                    console.log(`Best room: ${roomsCounter}`);
                    isDead = true;
                }
                break;
        }
        if (isDead) {
            break;
        }
        index++
    }
    if (!isDead) {
        console.log(`You've made it!`);
        console.log(`Coins: ${totalCoins}`);
        console.log(`Health: ${health}`);
    }
}
//dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])