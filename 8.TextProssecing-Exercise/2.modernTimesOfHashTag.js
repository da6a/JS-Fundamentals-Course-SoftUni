function modernTimesOfHashTag(input) {
    let workingArr = input.split(' ');
    for (let currentWord of workingArr) {
        if (currentWord.startsWith('#') && currentWord.length > 1) {
            let word = currentWord.toLowerCase();
            let isTrue = true;
            for (let i = 1; i < word.length; i++) {
                if (word.charCodeAt(i) < 97 || word.charCodeAt(i) > 122) {
                    isTrue = false;
                    break;
                }
            }
            if (isTrue) {
                console.log(currentWord.slice(1));
            }
        }
    }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')