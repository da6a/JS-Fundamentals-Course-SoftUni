function destinationMapper(input) {
    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/gm;
    let destinations = [];
    let travelPoints = 0;
    let match = pattern.exec(input);

    while (match !== null) {
        destinations.push(match[2]);
        match = pattern.exec(input);
    }

    for (let dest of destinations) {
        travelPoints += dest.length;
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");
