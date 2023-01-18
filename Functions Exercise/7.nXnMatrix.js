function nXnMatrix(int) {
    let matrix = [];
    for (let i = 0; i < int; i++) {
        let rows = [];
        for (let j = 0; j < int; j++) {
            rows.push(int);
        }
        matrix.push(rows.join(' '));
    }
    console.log(matrix.join('\n'));
}
nXnMatrix(3);
//nXnMatrix(7);