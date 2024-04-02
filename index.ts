#! /usr/bin/env node

import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random() *10 + 1);

const answers = await inquirer.prompt([
    {
    name: "userguessedNumber",
    type: "number",
    message: "please type a random number from 1 to 10:",
}
]);
if(answers.userguessedNumber === randomNumber){
    console.log("Congratulations! you have won");
}
else{
    console.log("you guessed wrong number.");
}