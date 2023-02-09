function shoppingList(array) {
    let initialList = array.shift().split("!");
    let index = 0;
    let command = array[index++];

    while (command !== "Go Shopping!") {
        let innerArr = command.split(" ");
        let currentCommand = innerArr[0];
        let newItem = innerArr[1];
        let secondItem = innerArr[2];

        switch (currentCommand) {
            case "Urgent":
                if (!initialList.includes(newItem)) {
                    initialList.unshift(newItem);
                }
                break;
            case "Unnecessary":
                if (initialList.includes(newItem)) {
                    let indexCounter = 0;
                    for (let i = 0; i < initialList.length; i++) {
                        if (initialList[i] === newItem) {
                            indexCounter = i;
                        }
                    }
                    initialList.splice(indexCounter, 1)
                }
                break;
            case "Correct":
                if (initialList.includes(newItem)) {
                    let indexCounter = 0;
                    for (let i = 0; i < initialList.length; i++) {
                        if (initialList[i] === newItem) {
                            indexCounter = i;
                        }
                    }
                    initialList.splice(indexCounter, 1, secondItem);
                }
                break;
            case "Rearrange":
                if (initialList.includes(newItem)) {
                    let indexCounter = 0;
                    for (let i = 0; i < initialList.length; i++) {
                        if (initialList[i] === newItem) {
                            indexCounter = i;
                        }
                    }
                    let grocery = initialList.splice(indexCounter, 1);
                    initialList.push(grocery);
                }
                break;
        }
        command = array[index++];
    }
    console.log(initialList.join(', '));

}
//shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Bread", "Urgent Banana", "Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt", "Unnecessary Grapes", "Correct Pepper Onion", "Correct Tomatoes Potatoes", "Go Shopping!"])

