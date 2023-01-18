function tseamAccount(input) {
    let games = input.shift().split(' ');
    
    for (let i = 0; i < input.length; i++) {
        let [command, game] = input[i].split(' ')

        switch (command) {
            case 'Install': install(game);
                break;
            case "Uninstall":
                if (games.includes(game)) {
                    let index = games.indexOf(game);
                    games.splice(index, 1);
                }
                break;
            case 'Update': if (games.includes(game)) {
                update(game);
            }
                break;
            case 'Expansion': expansion(game);
                break;
            case 'Play!': break;
        }
    }

    function install(game) {
        if (!games.includes(game)) {
            games.push(game);
        }
        return games;
    }

    function update(game) {
        for (let index = 0; index < games.length; index++) {
            let currGame = games[index];
            if (currGame === game) {
                games.splice(index, 1);
            }
        }
        games.push(game);
        return games;
    }

    function expansion(game) {
        let newGame = game.split('-');
        if (games.includes(newGame[0])) {
            let expGame = newGame.join(':');
            for (let index = 0; index < games.length; index++) {
                let currGame = games[index];
                if (currGame === newGame[0]) {
                    games.splice(index + 1, 0, expGame);
                    break;
                }
            }
        }
        return games;
    }
    console.log(games.join(' '));
}
tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])