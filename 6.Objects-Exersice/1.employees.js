function employees(input) {
    for (let i = 0; i < input.length; i++) {
        let personalNum = input[i].length;
        let person = {};
        person.name = input[i];
        person.personalNum = personalNum;
        console.log(`Name: ${person.name} -- Personal Number: ${personalNum}`);
    }
}
employees(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'])