function softUniReception(array) {
    let firstEmployeeeEfficiency = Number(array[0]);
    let secondEmployeeEfficiency = Number(array[1]);
    let thirdEmployeeEfficiency = Number(array[2]);
    let studentsCount = Number(array[3]);

    let efficiencyForHour = firstEmployeeeEfficiency + secondEmployeeEfficiency + thirdEmployeeEfficiency;
    let hoursCount = 1;
    if (studentsCount === 0) {
        hoursCount = 0;
    }
    while (studentsCount > efficiencyForHour) {
        studentsCount -= efficiencyForHour;
        hoursCount++
        if (hoursCount % 4 === 0) {
            hoursCount++;
        }
    }
    console.log(`Time needed: ${hoursCount}h.`);
}
softUniReception(['5', '6', '4', '0']);
softUniReception(['1', '2', '3', '45']);
softUniReception(['3', '2', '5', '40']);