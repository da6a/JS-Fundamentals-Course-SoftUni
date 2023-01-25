function train(array) {
    let wagonsArr = array.shift().split(' ').map(Number);
    let capacity = Number(array.shift());

    for (let i = 0; i < array.length; i++) {
        let currentCommand = array[i].split(' ');
        if (currentCommand[0] === 'Add') {
            wagonsArr.push(Number(currentCommand[1]));
        } else {
            for (let j = 0; j < wagonsArr.length; j++) {
                if (Number(currentCommand[0]) + wagonsArr[j] <= capacity) {
                    wagonsArr[j] += Number(currentCommand[0]);
                    break;
                }
            }
        }
    }
    console.log(wagonsArr.join(' '));

}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])