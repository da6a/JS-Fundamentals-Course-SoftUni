function exam(input) {
    let password = input.shift();

    for (let line of input) {
        let workArr = line.split(' ');
        let command = workArr.shift();
        if (command === 'Complete') {
            break;
        }
        switch (command) {
            case 'Make':
                let operation = workArr[0];
                let index = Number(workArr[1]);
                let letter = password[index];
                switch (operation) {
                    case 'Upper':
                        let letterUpper = letter.toUpperCase();
                        password = password.replace(letter, letterUpper);
                        console.log(password);
                        break;
                    case 'Lower':
                        let letterLower = letter.toLowerCase();
                        password = password.replace(letter, letterLower);
                        console.log(password);
                        break;
                }
                break;
            case 'Insert':
                let i = Number(workArr[0]);
                let char = workArr[1];
                password = [password.slice(0, i), char, password.slice(i)].join('');
                console.log(password);
                break;
            case 'Replace':
                let ch = workArr[0];
                let value = Number(workArr[1]);
                if (!password.includes(ch)) {
                    break;
                } else {
                    let num = ch.charCodeAt();
                    let sum = num + value;
                    let symb = String.fromCharCode(sum)
                    for (let el of password) {
                        if (el === ch) {
                            password = password.replace(el, symb);
                        }
                    }
                    console.log(password);
                }
                break;
            case 'Validation':
                if (password.length < 8) {
                    console.log("Password must be at least 8 characters long!");
                }
                let match = /\w+$/gm;
                let res = password.match(match);
                if (res === null) {
                    console.log("Password must consist only of letters, digits and _!");
                }
                let regex = /[A-Z]+/gm;
                let m = password.match(regex);
                if (m === null) {
                    console.log("Password must consist at least one uppercase letter!");
                }
                let reg = /[a-z]+/gm;
                let p = password.match(reg);
                if (p === null) {
                    console.log("Password must consist at least one lowercase letter!");
                }
                let rege = /\d+/gm;
                let s = password.match(rege);
                if (s === null) {
                    console.log("Password must consist at least one digit!");
                }
                break;
            default:
                break;

        }
    }
}
exam(['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete']);
console.log('------------------------------------');
exam(['123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'])

