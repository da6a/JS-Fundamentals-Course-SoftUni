function wordsTracker(input) {
    let words = new Map();
    let workingArr = input.shift().split(' ');
    for (let currWord of workingArr) {
        words.set(currWord, 0);
    }
    for (let word of input) {
        if (words.has(word)) {
            words.set(word, words.get(word) + 1);
        }
    }
    let sorted = Array.from(words).sort((a, b) => b[1] - a[1]);
    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
}
wordsTracker(['this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
])
wordsTracker(['is the',
    'first', 'sentence', 'Here', 'another', 'And', 'finally', 'sentence'])