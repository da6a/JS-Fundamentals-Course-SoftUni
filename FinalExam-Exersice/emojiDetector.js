function emojiDetector(input) {
    let digitsPattern = /\d/g;
    let emojiPattern =/([:]{2}|[*]{2})[A-Z]([a-z]+){2,}\1/g;
    
    let coolThreshold = input[0].match(digitsPattern).reduce((a,b) => {
        return Number(a) * Number(b);///maxInteger
    })
    let coolEmojis = [];
    let emojis = input[0].match(emojiPattern);
    
    for(let word of emojis){
        let asciiSum = 0;
        for(let letter of word){
            if(letter !== ':' && letter !== '*'){
                asciiSum += letter.charCodeAt()
            }
        }
        if(asciiSum >= coolThreshold){
            coolEmojis.push(word)
        }
    }
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    coolEmojis.forEach(emoji => console.log(emoji));
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
//emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])