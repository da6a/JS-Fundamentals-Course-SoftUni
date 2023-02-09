function adAstra(input) {
    let pattern = /(#|\|)(?<itemName>[\s+a-zA-Z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]))\1/g
    let calories = 0;
    let itemsMap = new Map();
    let match = input[0].matchAll(pattern);
  console.log(match);
    // while (match !== null) {
    //     let name = match[2];
    //     let currDate = match[3];
    //     let currCalories = match[4];
    //     calories += Number(currCalories);
    //     itemsMap.set(name, []);
    //     itemsMap.get(name).push(currDate);
    //     itemsMap.get(name).push(currCalories);

    //     match = pattern.exec(input);
    // }
    // console.log(`You have food to last you for: ${Math.floor(calories / 2000)} days!`);

    // for (let [name, info] of itemsMap) {
    //     console.log(`Item: ${name}, Best before: ${info[0]}, Nutrition: ${info[1]}`);
    // }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])
