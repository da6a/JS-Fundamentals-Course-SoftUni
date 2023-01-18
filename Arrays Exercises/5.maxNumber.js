function maxNumber(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        let num1 = array[i];
        let isBigger = true;
        for (let k = i + 1; k < array.length; k++) {
            let num2 = array[k];
            if (num1 <= num2) {
                isBigger = false;
            }
        } if (isBigger) {
            arr.push(num1)
        }
    }
    console.log(arr.join(" "));
}
maxNumber([1, 4, 3, 2]);
maxNumber([27, 19, 42, 2, 13, 45, 48])