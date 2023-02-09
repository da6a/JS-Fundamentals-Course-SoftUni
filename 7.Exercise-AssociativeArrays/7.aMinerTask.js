function aMinerTask(input) {
    let recourse = new Map();
    for (let el = 0; el < input.length; el++) {
        if (el % 2 === 0) {
            if (!recourse.has(input[el])) {
                recourse.set(input[el], Number(input[el + 1]))
            } else {
                oldValue = recourse.get(input[el]);
                recourse.set(input[el], oldValue + Number(input[el + 1]))
            }
        }
    }
    for(let [element,value] of recourse){
        console.log(`${element} -> ${value}`);
    }
}
//aMinerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15'])