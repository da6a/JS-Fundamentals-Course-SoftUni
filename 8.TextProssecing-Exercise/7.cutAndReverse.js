function cutAndReverse(input) {
    let firstRes = '';
    let secondRes = '';
    let firstSentance = input.substring(0, input.length / 2);
    let secondSentance = input.substring(input.length / 2, input.length);

    for (let i = firstSentance.length - 1; i >= 0; i--) {
        let letter = firstSentance[i];
        firstRes += letter;
    }
    for (let i = secondSentance.length - 1; i >= 0; i--) {
        let letter = secondSentance[i];
        secondRes += letter;
    }
    console.log(firstRes);
    console.log(secondRes);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')