function piccolo(data) {
    let parkingLot = new Set();

    for (let line of data) {
        let currentCar = line.split(', ');
        let command = currentCar[0];
        let carNum = currentCar[1];
        switch (command) {
            case 'IN':
                parkingLot.add(carNum);
                break;
            case 'OUT':
                parkingLot.delete(carNum);
                break;
        }
    }
    if (parkingLot.size === 0) {
        console.log(`Parking Lot is Empty`);
        return
    }
    let sorted = Array.from(parkingLot).sort();
    console.log(sorted.join('\n'));
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])    