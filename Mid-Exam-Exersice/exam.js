function midExam(input) {
    let programArr = [];
    let index = 0;
    let command = input[index++];

    while (command !== "end") {
        let commArr = command.split(' ');
        let operation = commArr.shift();

        switch (operation) {
            case "Chat":
                programArr.push(commArr[0]);
                break;
            case "Delete":
                if (programArr.includes(commArr[0])) {
                    for (let i = 0; i < programArr.length; i++) {
                        if (commArr[0] === programArr[i]) {
                            programArr.splice(i, 1)
                        }
                    }
                }
                break;
            case "Edit":
                if (programArr.includes(commArr[0])) {
                    for (let i = 0; i < programArr.length; i++) {
                        if (commArr[0] === programArr[i]) {
                            programArr.splice(i, 1, commArr[1]);
                        }
                    }
                }
                break;
            case "Pin":
                if (programArr.includes(commArr[0])) {
                    for (let i = 0; i < programArr.length; i++) {
                        if (commArr[0] === programArr[i]) {
                            let a = programArr[i];
                            programArr.splice(i, 1);
                            programArr.push(a);
                        }
                    }
                }
                break;
            case "Spam":
                for (let el of commArr) {
                    programArr.push(el);
                }
                break;
        }
        command = input[index++];
    }
    console.log(programArr.join("\n"));
}
midExam(["Chat Hello",
    "Chat darling",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "end"]);
    console.log(`-----------------------------`);
midExam(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"]);
    
