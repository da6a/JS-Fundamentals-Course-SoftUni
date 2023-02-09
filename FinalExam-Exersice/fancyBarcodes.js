function fancyBarcodes(input) {
    let pattern = /(@[#]{1,})([A-Z]([A-Za-z]|[0-9]){4,}[A-Z])(@[#]{1,})/g;
    //let digitsPattern = /\d/g;
    let n = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let line = input[i];
        let match = pattern.exec(line);
        let concatenate = '';
        let isValid = false;
        while (match !== null) {
            isValid = true;
            let barcode = match[2];
            for (let ch of barcode) {
                if (!isNaN(Number(ch))) {
                    concatenate += ch;
                }
            }
            match = pattern.exec(line);
        }
        if (isValid) {
            concatenate = concatenate !== '' ? concatenate : '00';
            console.log(`Product group: ${concatenate}`);
        } else {
            console.log('Invalid barcode');
        }
    }
}
fancyBarcodes([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
]);
fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
])

