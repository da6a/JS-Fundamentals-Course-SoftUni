function pascalCaseSplitter(input) {
    let result = '';

    for (let i = 0; i < input.length; i++) {
        let letter = input[i];
        if (input.charCodeAt(i) > 64 && input.charCodeAt(i) < 91) {
            result += ` ${letter}`;
        } else {
            result += letter;
        }
    }
    result = result.trimStart();
    let finalResult = result.split(' ');
    console.log(finalResult.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')