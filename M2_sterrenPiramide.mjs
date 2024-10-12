import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = parseFloat(await userInput.question('Voer een getal in dat de hoogte van de piramide aangeeft: '));

for (let i = 1; i <= hoogte; i++){
    console.log('*'.repeat(i));
}

process.exit();
