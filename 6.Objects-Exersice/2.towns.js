function towns(input) {
    for (let info of input) {
        let arr = info.split(" | ");
        let cityInfo = {};
        cityInfo.town = arr[0];
        cityInfo.latitude = (Number(arr[1])).toFixed(2);
        cityInfo.longitude = (Number(arr[2])).toFixed(2);
        console.log(cityInfo);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])