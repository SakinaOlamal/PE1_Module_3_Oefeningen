import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let som = 0;
let totaalGetal = 0;
let gemiddelde = 0;

console.log("Voer meerdere getallen in. Het script stopt als het gemiddelde boven 25 gaat.");

do{
    let getal = parseFloat(await userInput.question('Voer een getal in: '));
    som += getal; 
    totaalGetal++;
    gemiddelde = som / totaalGetal;
    console.log(`Huidige gemiddelde: ${gemiddelde}`);
} while ( gemiddelde <=25 );

console.log(`Het eindgemiddelde is: ${gemiddelde}`);
process.exit();



