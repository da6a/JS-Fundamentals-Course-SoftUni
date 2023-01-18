function factorialDivisions(firstInt, secondInt) {
    let res1 = 0
    let res2 = 0

    function factorial(firstInt) {
        if (firstInt === 0) {
            return 1;
        } else {
            return firstInt * factorial(firstInt - 1);
        }
    }
    function factorial2(secondInt) {
        if (secondInt === 0) {
            return 1;
        } else {
            return secondInt * factorial2(secondInt - 1);
        }
    }
    if (firstInt > 0) {
        res1 = factorial(firstInt);
    }
    if (secondInt > 0) {
        res2 = factorial2(secondInt);
    }
    console.log((res1 / res2).toFixed(2));
}
factorialDivisions(5, 2)