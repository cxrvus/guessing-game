const ljust = (num, len) => num.toString().padStart(len, '0');

let bank = 10000;
const games = [];

for(let gameIndex = 0; gameIndex < 1000; gameIndex++){
    const correct = Math.floor(Math.random() * 100);

    let
        interval = 50,
        guess = interval,
        guesses = [50],
        watchdog = 0;

    while(guess != correct){
        if(watchdog > 50)
            throw new Error('woof woof!');
        else
            watchdog++;

        const hiLo = guess < correct ? 1 : -1;
        interval = Math.floor(interval / 2);
        guess += interval != 0 ? interval * hiLo : hiLo;
        guesses.push(guess);
    }

    const guessCount = guesses.length;
    const bet = 50;

    let earnings = bet - (guessCount > 5 ? 0 : bet * [10,5,4,2,1.5][guessCount-1]);
    bank += earnings;

    const game = {gameIndex, correct, guesses, earnings};
    games.push(game);

    console.log(`game#: ${ljust(gameIndex, 5)} | number: ${ljust(correct, 2)} | guesses: ${ljust(guessCount)} (${guesses}) | earnings: ${ljust(earnings, 4)}`)
}

console.log(bank); 