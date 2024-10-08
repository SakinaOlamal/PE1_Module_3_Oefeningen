import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let som = 0;
let getal = parseFloat(await userInput.question('Voer een getal in: '));

while(getal > 0){
    som += getal;
    getal = parseFloat(await userInput.question('Voer een getal in: '));
}

console.log(`De totale som van je ingevoerde getallen is: ${som}`);