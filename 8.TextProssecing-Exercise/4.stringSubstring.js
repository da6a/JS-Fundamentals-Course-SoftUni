function stringSubstring(word, text) {
    let workingArr = text.split(' ');
    for (let i = 0; i < workingArr.length; i++) {
        let currentWord = workingArr[i];
        let wordLower = currentWord.toLowerCase();
        let searchingWordLower = word.toLowerCase();
        if (searchingWordLower === wordLower) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`);
}
stringSubstring('python',
    'JavaScript is the best programming language')