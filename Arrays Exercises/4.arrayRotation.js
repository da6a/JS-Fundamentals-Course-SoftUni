function arrayRotation(arr, rotations) {
     
    for(let i = 0; i < rotations; i++ ){
        let elToMove = arr.shift();
        arr.push(elToMove);
    }
    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)