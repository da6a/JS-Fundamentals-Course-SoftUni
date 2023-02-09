function heartDelivery(cupidArr) {
    let houseNeededHeart = cupidArr.shift().split('@').map(Number);
    let index = 0;
    let jumpCommand = cupidArr[index++];

    while (jumpCommand !== "Love!") {
        let cupidJumpCounter = jumpCommand.split(" ");
        let indexCounter = 0;
        for (let i = 0; Number(cupidJumpCounter[1]) <= houseNeededHeart.length; i++){
                i += Number(cupidJumpCounter[1]);
                houseNeededHeart.splice(i,1,houseNeededHeart[i]-2);
                console.log(houseNeededHeart);
        }


        jumpCommand = cupidArr[index++];
    }

}
heartDelivery(["10@10@10@2","Jump 1","Jump 2","Love!"])