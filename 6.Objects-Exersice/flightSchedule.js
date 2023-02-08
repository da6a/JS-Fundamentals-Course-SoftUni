function flightSchedule(array) {
    class Flight {
        constructor(flightNumber, destination) {
            this.flightNumber = flightNumber,
                this.destination = destination,
                this.flightStatus = 'Ready to fly'
        }
    }
    let result = [];

    for (let line of array[0]) {
        let tokens = line.split(' ');
        let flightNumber = tokens.shift();
        let destination = tokens.join(' ');

        let myFlight = new Flight(flightNumber, destination);
        result.push(myFlight);
    }
    for (let changes of array[1]) {
        let tokens = changes.split(' ');
        let changedFlight = result.filter(obj => obj.flightNumber === tokens[0])[0];
        if (changedFlight) {
            changedFlight.flightStatus = 'Cancelled';
        }
    }
    let command = array[2][0];

    switch (command) {
        case 'Cancelled':
            let cancelledFlight = result.filter(obj => obj.flightStatus === 'Cancelled');
            cancelledFlight.forEach(x => console.log(`{ Destination: '${x.destination}', Status: '${x.flightStatus}' }`));
            break;
        case 'Ready to fly':
            let flightToReady = result.filter(obj => obj.flightStatus === 'Ready to fly');
            flightToReady.forEach(x => console.log(`{ Destination: '${x.destination}', Status: '${x.flightStatus}' }`));
            break;
    }
}
flightSchedule([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'],
    ['Cancelled']])
// flightSchedule([['WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'],
// ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'], ['Ready to fly']])