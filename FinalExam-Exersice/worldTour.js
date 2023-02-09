function worldTour(input) {
    let stops = input.shift();
    let index = 0;
    let command = input[index++];

    while (command !== "Travel") {
        let commandArr = command.split(':');
        let currentCommand = commandArr.shift();
        switch (currentCommand) {
            case 'Add Stop':
                let startIndex = Number(commandArr[0]);
                let elementToAdd = commandArr[1];
                if (startIndex < 0 && startIndex >= stops.length) {
                    console.log(stops);
                    break;
                }    
                stops = stops.slice(0, startIndex) + elementToAdd + stops.slice(startIndex);
                console.log(stops);
                break;
            case 'Remove Stop':
                let start = Number(commandArr[0]);
                let endIndex = Number(commandArr[1]);
                if (!stops[start] || !stops[endIndex]) {
                    console.log(stops);
                    break;
                }
                    let firstPiece = stops.slice(0, start);
                    let secondPiece = stops.slice(endIndex + 1, stops.length);
                    stops = firstPiece + secondPiece;   
                    console.log(stops);
                break;
            case 'Switch':
                let strToSearch = commandArr[0];
                let newStr = commandArr[1];
                let pattern = new RegExp(strToSearch,'g');
                stops = stops.replace(pattern, newStr);   
                    console.log(stops);
                break;
            default:
                break;    
        }
        command = input[index++];
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour(['Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel'])