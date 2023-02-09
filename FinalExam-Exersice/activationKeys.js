function activationKeys(input) {
    let key = input.shift();
    let res = [];

    for (let i = 0; i < input.length; i++) {
        let commandLine = input[i];
        if (commandLine === "Generate") {
            break;
        }
        let command = commandLine.split('>>>')
        switch (command[0]) {
            case "Slice":
                let n = key.split('');
                let start = Number(command[1]);
                let end = Number(command[2]); 
                res.push(n.splice(start, (end - start)))
                console.log(n.join(''))
                key = n.join('');
                break;
            case "Flip":
                if (command[1] === "Upper") {
                    let start = Number(command[2]);
                    let end = Number(command[3]);
                    let slice = key.slice(start, end);
                    let upper = slice.toUpperCase();
                    while (key.includes(slice)) {
                        key = key.replace(slice, upper);
                    }
                    console.log(key);
                } else if (command[1] === "Lower") {
                    let start = Number(command[2]);
                    let end = Number(command[3]);
                    let slice = key.slice(start, end);
                    let lower = slice.toLowerCase();
                    while (key.includes(slice)) {
                        key = key.replace(slice, lower);
                    }
                    console.log(key);
                }
                break;
            case "Contains":
                if (key.includes(command[1])) {
                    console.log(`${key} contains ${command[1]}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;
        }
    }
    console.log(`Your activation key is: ${key}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])