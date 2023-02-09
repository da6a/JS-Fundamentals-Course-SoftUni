function inventory(input) {
    let journal = input.shift().split(', ');
    let index = 0;
    let command = input[index++];

    while (command !== 'Craft!') {
        let commArr = command.split(' - ');
        let operation = commArr.shift();

        switch (operation) {
            case "Collect":
                if (!journal.includes(commArr[0])) {
                    journal.push(commArr[0]);
                }
                break;
            case "Drop":
                for (let i = 0; i < journal.length; i++) {
                    if (commArr[0] === journal[i]) {
                        journal.splice(i, 1);
                    }
                }
                break;
            case "Combine Items":
                let items = commArr[0].split(':');
                for (let j = 0; j < journal.length; j++) {
                    if (items[0] === journal[j]) {
                        journal.splice(j + 1, 0, items[1])
                    }
                }
                break;
            case "Renew":
                for (let i = 0; i < journal.length; i++) {
                    if (commArr[0] === journal[i]) {
                        let moveble = journal[i];
                        journal.splice(i, 1);
                        journal.push(moveble);
                    }
                }
                break;
        }
        command = input[index++];
    }
    console.log(journal.join(", "));
}
inventory(['Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!']);
inventory(['Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'])    