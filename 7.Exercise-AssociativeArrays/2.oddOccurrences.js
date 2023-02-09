function oddOccurrences(input) {
    let res = new Map();
    let words = input.split(' ');
    
    for (let word of words) {
        word = word.toLowerCase();
        if (res.has(word)) {
            res.set(word, res.get(word) + 1);
        } else {
            res.set(word, 1);
        }
    }
    let filtered = Array.from(res).filter(([key, value]) => {
        return value % 2 !== 0;
    })
    let buff = '';
    for (let [key, value] of filtered) {
        buff += key + ' ';
    }
    console.log(buff);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')