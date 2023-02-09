function examFirst(input) {
    let pattern = /!([A-Z][a-z]{2,})!:\[([a-zA-Z]{8,})\]/gm;
    let regex = /([a-zA-Z]{8,})/gm;
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let line = input[i];
        let match = line.match(pattern);
        if (match === null) {
            console.log('The message is invalid');
        } else {
            let workArr = match[0].split('!');
            let command = workArr[1];
            let text = workArr[2].match(regex);
            let asciiLetters = [];
            for (let letter of text[0]) {
                asciiLetters.push(letter.charCodeAt());
            }
            console.log(`${command}: ${asciiLetters.join(' ')}`);
        }
    }
}
examFirst(["2",
"!Send!:[IvanisHere]",
"*Time@:[Itis5amAlready"])


