function charactersInRange(char1, char2) {
    let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
    let arr = [];
    for (let current = startChar + 1; current < endChar; current++) {
        let currentChar = String.fromCharCode(current);
        arr.push(currentChar);
    }
    console.log(arr.join(' '));
}
charactersInRange('a', 'd')