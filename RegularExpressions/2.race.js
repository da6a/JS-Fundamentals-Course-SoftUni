function race(input) {
    let personInfo = new Map();
    let listOfNames = input.shift().split(', ');
    let lettersPattern = /[A-Za-z]+/g;
    let digitsPattern = /\d/g;

    listOfNames.forEach(element => {
        personInfo.set(element, 0);
    });

    for (let i = 0; i < input.length; i++) {
        let currentLine = input[i];
        if (currentLine === 'end of race') {
            break;
        }
        let name = currentLine.match(lettersPattern).join('');
        let distance = currentLine.match(digitsPattern).reduce((a, b) => {
            return Number(a) + Number(b);
        })
        if (personInfo.has(name)) {
            let currDistance = personInfo.get(name);
            currDistance += distance;
            personInfo.set(name, currDistance);
        }
    }
    let sorted = Array.from(personInfo).sort((a, b) => {
        return Number(b[1]) - Number(a[1])
    })

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);

}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])