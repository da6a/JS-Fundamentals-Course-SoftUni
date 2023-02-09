function garage(input) {
    let garages = new Map();
    for(let line of input){
        let carInfo = line.split(', ');
        let firstInfo = carInfo[0].split(' - ');
        let numberOfGarage = firstInfo.shift();
        carInfo[0] = firstInfo.join(', ');
        for(let info of carInfo){
            let daeba = info.split(': ');
            if(!garages.has(numberOfGarage)){
                garages[numberOfGarage] = [];
            }
            garages[numberOfGarage].push(daeba);
        }  
    }
    let entries = Array.from(garages.entries())

    console.log(entries);
}
garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])