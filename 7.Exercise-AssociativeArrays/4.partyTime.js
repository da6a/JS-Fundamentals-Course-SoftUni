function partyTime(guestsInfo) {
    let guestList = guestsInfo.splice(0, guestsInfo.indexOf("PARTY"));
    guestsInfo.splice(0, 1);
    let VIP = [];
    let regular = [];
    for (let name of guestList) {
        if (name[0] >= '0' && name[0] <= '9') {
            VIP.push(name);
        } else {
            regular.push(name);
        }
    }
    for (let name of guestsInfo) {
        if (VIP.includes(name)) {
            VIP.splice(VIP.indexOf(name), 1);
        }
        if (regular.includes(name)) {
            regular.splice(regular.indexOf(name), 1);
        }
    }
    console.log(VIP.length + regular.length);
    VIP.forEach((vip) => console.log(vip));
    regular.forEach((reg) => console.log(reg))
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'])