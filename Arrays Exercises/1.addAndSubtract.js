function addAndSubtract(arr) {
    let modifiedArr = [];
    let sumOfArr = 0;
    let sumOfModifiedArr = 0;

    for (let i = 0; i < arr.length; i++) {
        sumOfArr += arr[i];
        if (arr[i] % 2 === 0) {
            modifiedArr.push(arr[i] + i);
        } else {
            modifiedArr.push(arr[i] - i);
        }
    }
    for (let m = 0; m < modifiedArr.length; m++) {
        sumOfModifiedArr += modifiedArr[m];
    }
    console.log(modifiedArr);
    console.log(sumOfArr);
    console.log(sumOfModifiedArr);
}
addAndSubtract([5, 15, 23, 56, 35])