import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseInt(await userInput.question('Voer een getal in: '));

if (getal <= 1){
    console.log('Dit getal kan geen geldig priemgetal zijn. Voer een getal in dat groter is dan 1: ')
}else{
    let isPriem = true;

    for (let i = 2; i < getal; i++){
        if (getal % i == 0){
            isPriem = false;
            break;
        }
    }
    if (isPriem){
        console.log(`${getal} is een priemgetal.`);
    } else {
        console.log(`${getal} is geen priemgetal.`);
    }
}

process.exit();