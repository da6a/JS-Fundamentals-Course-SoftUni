function companyUsers(data) {
    let result = {};
    for(let line of data) {
        let [company, id] = line.split(' -> ');
        if (!result.hasOwnProperty(company)) {
            result[company] = [];
        }
        result[company].push(id);
    }
    let sorted = Object.entries(result);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let elem of sorted) {
        console.log(elem[0]);
        let set = new Set(elem[1]);
        for (let number of set) {
            console.log(`-- ${number}`);
        }
    }
    
}
companyUsers(['SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'])