function houseParty(array) {
    let list = [];
    for (let i = 0; i < array.length; i++) {
        let currentCommand = array[i].split(' ');
        let name = currentCommand[0];
        if (currentCommand.length === 3) {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                list.push(name);
            }
        } else {
            if (!list.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = list.indexOf(name);
                list.splice(index, 1)
            }
        }
    }
    console.log(list.join("\n"));
}
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])