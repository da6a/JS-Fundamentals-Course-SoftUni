function oddAndEvenSum(number) {
    let numAsString = String(number);
    let oddSum = 0;
    let evenSum = 0;

    for (let el of numAsString) {
        let currentNum = Number(el);
        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else (oddSum += currentNum)
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddAndEvenSum(1000435)