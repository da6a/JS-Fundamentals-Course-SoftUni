function loadingBar(percent) {
    let completed = '%'.repeat(percent / 10);
    let incompleted = '.'.repeat((100 - percent) / 10);

    if (percent === 100) {
        console.log(`100% Complete!`);
    } else {
        console.log(`${percent}% [${completed}${incompleted}]`);
        console.log((`Still loading...`));
    }

}
loadingBar(30);
loadingBar(50);
loadingBar(100);