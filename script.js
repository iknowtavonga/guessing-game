let maximum = parseInt(prompt('Enter the maximum number!'));
while (!maximum) {
    maximum = parseInt(prompt('Please enter a valid number!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt('Enter your first guess!');
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt('Too high! Enter a new guess:');
    } else if (guess < targetNum) {
        guess = prompt('Too low! Enter a new guess:');
    } else {
        guess = prompt(`Your guess is ${guess}, which is not higher or lower. Please enter a valid number.`);
    }
}

if (guess === 'q') {
    console.log('You Quit');
} else {
    console.log('Congrats you win!');
    console.log(`You took ${attempts} guesses`);
}