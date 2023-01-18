function nonDecreasingSubset(arr) {
    let newArr = [];
    let currentBiggestNumber = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentBiggestNumber <= arr[i]) {
            currentBiggestNumber = arr[i];
            newArr.push(currentBiggestNumber);
        }
    }
    console.log(newArr.join(' '));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1])