function addAndRemove(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        if (command === "add") {
            newArr.push(i + 1)
        } else if (command === "remove") {
            newArr.pop()
        }
    }
   // if (newArr.includes(1)) {
        console.log(newArr.join(' '));
   // } else {
   //     console.log(`Empty`);
    //}
}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove', 'remove', 'remove'])