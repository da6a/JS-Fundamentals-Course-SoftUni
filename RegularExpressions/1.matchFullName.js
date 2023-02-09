function matchFullName(data) {
    let pattern = /\b[A-Z][a-z]{1,} [A-Z][a-z]{1,}\b/g;
    let namesList = pattern.exec(data);
    let validNames = [];

    while (namesList) {
        validNames.push(namesList[0]);
        namesList = pattern.exec(data);
    }
    console.log(validNames.join(" "));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")