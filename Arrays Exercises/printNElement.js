function printNElement(arr) {
    let newArr = [];
    let step = Number(arr.pop());
    let index = 0;

    while (index < arr.length) {
        newArr.push(arr[index]);
        index += step;
    }
    console.log(newArr.join(' '));
}
printNElement(['5', '20', '31', '4', '20', '2']);
printNElement(['dsa', 'asd', 'test', 'test', '2'])