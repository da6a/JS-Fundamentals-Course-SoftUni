function revealWords(words, sentence) {
    let wordsArr = words.split(", ");
    let sentenceArr = sentence.split(" ");
    for (let currentWord of wordsArr) {
        for (let word of sentenceArr) {
            if (word.includes('*') && currentWord.length === word.length) {
                sentence = sentence.replace(word, currentWord);
            }
        }
    }
    console.log(sentence);
}
revealWords('learning, great',
    'softuni is ***** place for ******** new programming languages')