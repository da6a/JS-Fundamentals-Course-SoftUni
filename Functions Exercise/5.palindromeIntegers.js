function palindromeIntegers(arr) {

    for (let el of arr) {
        let currentEl = String(el);
        let reversedEl = String(el).split('').reverse().join('');
        let isPalindrome = false;
        if (currentEl === reversedEl) {
            isPalindrome = true;
        }
        console.log(isPalindrome);
    }

}
palindromeIntegers([123, 323, 421, 121])