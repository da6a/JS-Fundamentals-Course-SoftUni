function movingTarget(input) {
    let arr = input.shift().split(' ').map(Number);
    let index = 0;
    let command = input[index++];

    while (command !== "End") {
        let currentCommand = command.split(" ");
        let firstComm = currentCommand[0];
        let commIndex = Number(currentCommand[1]);
        let power = Number(currentCommand[2]);
        switch (firstComm) {
            case "Shoot":
                if (commIndex < arr.length && commIndex >= 0) {
                    let newPower = arr[commIndex] - power;
                    if (newPower <= 0) {
                        arr.splice(commIndex, 1);
                    } else {
                        arr.splice(commIndex, 1, newPower)
                    }
                }
                break;
            case "Add":
                if (commIndex < arr.length) {
                    //let newPower = arr[commIndex] + power;
                    arr.splice(commIndex, 0, power);
                } else {
                    console.log(`Invalid placement!`);
                }
                break;
            case "Strike":
                if ((commIndex - power) >= 0 && (commIndex + power) < arr.length) {
                    arr.splice((commIndex - power), ((power * 2) + 1))
                } else {
                    console.log(`Strike missed!`);
                }
                break;
        }
        command = input[index++];
    }
    console.log(arr.join('|'));
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10", "Shoot 22 80", "Add 2 3",
    "End"])