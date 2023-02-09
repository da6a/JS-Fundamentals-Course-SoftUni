function exam(input) {
    let recordsMap = new Map();

    for (let line of input) {
        let workArr = line.split(': ');
        let command = workArr.shift();
        if (command === "Log out") {
            break;
        }
        let name = workArr[0];
        let likes = 0;
        let comments = 0;
        switch (command) {
            case 'New follower':
                if (recordsMap.has(name)) {
                    break;
                }
                recordsMap.set(name, []);
                recordsMap.get(name).push(likes);
                recordsMap.get(name).push(comments);
                break;
            case 'Like':
                let likeCount = Number(workArr[1]);
                if (!recordsMap.has(name)) {
                    recordsMap.set(name, []);
                    recordsMap.get(name).push(likes);
                    recordsMap.get(name).push(comments);
                    recordsMap.get(name)[0] += likeCount;
                } else {
                    recordsMap.get(name)[0] += likeCount;
                }
                break;
            case 'Comment':
                if (!recordsMap.has(name)) {
                    recordsMap.set(name, []);
                    recordsMap.get(name).push(likes);
                    recordsMap.get(name).push(comments);
                    recordsMap.get(name)[1]++
                } else {
                    recordsMap.get(name)[1]++;
                }
                break;
            case 'Blocked':
                if (!recordsMap.has(name)) {
                    console.log(`${name} doesn't exist.`);
                } else {
                    recordsMap.delete(name);
                }
                break;
        }
    }
    console.log(`${recordsMap.size} followers`);
    for (let [name, info] of recordsMap) {
        console.log(`${name}: ${Number(info[0]) + Number(info[1])}`);
    }
}
// exam(["New follower: George",
//     "Like: George: 5",
//     "New follower: George",
//     "Log out"]);
// exam(["Like: Katy: 3",
//     "Comment: Katy",
//     "New follower: Bob",
//     "Blocked: Bob",
//     "New follower: Amy",
//     "Like: Amy: 4",
//     "Log out"])
exam(["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"])




