function numbers(input) {
    let arr = input.split(" ").map(Number);
    let sum = 0;
    for (let el of arr) {
        sum += el;
    }
    let avrNum = sum / arr.length;
    let greater = [];
    for (let n of arr) {
        if (n > avrNum) {
            greater.push(n);
        }
    }
    //if (greater.length === 0) {
    //    console.log(`No`);
    //} else {
    //    console.log(greater.slice(-5).sort((a, b) => b - a).join(' '));
    //}
    greater = greater.sort((a, b) => b - a).slice(0, 5).join(' ');
    return greater.length > 0 ? greater : "No";

}
//numbers('10 20 30 40 50');
//numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
//numbers('1');
console.log(numbers('-1 -2 -3 -4 -5 -6'));