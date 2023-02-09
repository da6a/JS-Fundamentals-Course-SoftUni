function furniture(input) {
    let text = input.join(' ');
    let pattern = /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/g;
    let arrOfNames = [];
    let sumOfPrices = 0;
    let valid;

    while ((valid = pattern.exec(text)) !== null) {
        let { furniture, price, quantity } = valid.groups;
        arrOfNames.push(furniture);
        sumOfPrices += (Number(price) * Number(quantity));
    }

    console.log(`Bought furniture:`);
    arrOfNames.forEach(el => console.log(el));
    console.log(`Total money spend: ${sumOfPrices.toFixed(2)}`);

}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])