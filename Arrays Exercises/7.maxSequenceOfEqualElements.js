function maxSequenceOfEqualElements(arr) {
    let maxSequence = [];
    let inputL = arr.length;

    for (let i = 0; i < inputL; i++) {
        let currentSequence = [];
        for (let j = i; j < inputL; j++) {
            if (arr[i] === arr[j]) {
                currentSequence.push(arr[i])
            }else{
                break;
            }
        }
        if (currentSequence.length > maxSequence.length) {
            maxSequence = currentSequence;
        }
    }
    console.log(maxSequence.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])