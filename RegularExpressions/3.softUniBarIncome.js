function softUniBarIncome(input) {
    let totalSum = 0;
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+.?\d+)\$/g
    let text = input.join('-');
    let currentLine = pattern.exec(text);

    while (currentLine !== null) {
        let currentSum = currentLine.groups.count * currentLine.groups.price;
        totalSum += currentSum;
        console.log(`${currentLine.groups.customer}: ${currentLine.groups.product} - ${currentSum.toFixed(2)}`);
        currentLine = pattern.exec(text)
    }

    console.log(`Total income: ${totalSum.toFixed(2)}`);
}
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])