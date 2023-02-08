function storeProvision(firstArr, secondArr) {
    let productsInStore = {};
    for (let i = 0; i < firstArr.length; i += 2) {
        let product = firstArr[i];
        productsInStore[product] = Number(firstArr[i + 1]);
    }
    for (let j = 0; j < secondArr.length; j += 2) {
        let product = secondArr[j];
        if (!productsInStore.hasOwnProperty(product)) {
            productsInStore[product] = 0;
        }
        productsInStore[product] += Number(secondArr[j + 1]);
    }
    for (const product in productsInStore) {
        console.log(`${product} -> ${productsInStore[product]}`);
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])