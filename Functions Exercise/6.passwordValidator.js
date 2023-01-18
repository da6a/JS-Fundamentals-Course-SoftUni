function passwordValidator(password) {
    let numCounter = 0;
    let counter = 0;
    if (password.length < 6 || password.length > 10) {
        counter++;
        console.log(`Password must be between 6 and 10 characters`);
    }
   // for (let i = 0; i < password.length; i++) {
   //     let currentDigit = password[i];
   //     if (currentDigit === Number) {
   //         numCounter++;
   //     }
   // }
   // if (numCounter < 2) {
   //     counter++;
   //     console.log(`Password must have at least 2 digits`);
   // }
    if (counter === 0) {
        console.log(`Password is valid`);
    }
}
//passwordValidator('logIn')
//passwordValidator('Pa$s$s');
passwordValidator('MyPass123')