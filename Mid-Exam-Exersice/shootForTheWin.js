function shootForTheWin(input) {
    let arr = input.shift().split(' ').map(Number);
    let index = 0;
    let command = input[index++];
    let shotCounter = 0;

    while (command !== "End") {
        let currentTarget = 0;
        let target = Number(command);
        if (target < arr.length) {
            currentTarget = Number(arr[target]);
            arr.splice(target, 1, -1);
            shotCounter++;
            for (let i = 0; i < arr.length; i++) {
                let curr = Number(arr[i]);
                if (curr !== -1 && curr > currentTarget) {
                    curr -= currentTarget;
                    arr.splice(i, 1, curr);

                } else if (curr !== -1 && curr <= currentTarget) {
                    curr += currentTarget;
                    arr.splice(i, 1, curr);
                }
            }
            command = input[index++];
        } else {
            command = input[index++];
        }
    }
    console.log(`Shot targets: ${shotCounter} -> ${arr.join(' ')}`);

}
//shootForTheWin(["24 50 36 70",
//                "0","4","3","1","End"]);
shootForTheWin(["30 30 12 60 54 66",
    "5", "2", "4", "0", "End"])
