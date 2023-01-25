function sortAnArrayBy2Criteria(input) {
    let sorted = input.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    sorted.forEach(element => console.log(element));
}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])