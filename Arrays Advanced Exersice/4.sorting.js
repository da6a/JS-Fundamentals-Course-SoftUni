function sorting(arr) {
    // let newArr = [];
    // let minNum = 0;
    // let maxNum = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     let current = Number(arr[i]);
    //     if(current >= maxNum) {
    //         maxNum = current;
    //         newArr.unshift(maxNum);
    //     }else if(current <= minNum) {
    //         minNum = current;
    //         newArr.unshift(minNum)
    //     }
    // }
    let sortedArr = arr.sort((a,b) => a-b);
    console.log(arr);
    //console.log(arr.length);
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])