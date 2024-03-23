#! /usr/bin/env node
import inqirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inqirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "Guess a number between 1 to 6:"
    }
]);
if (answer.userguessednumber === randomNumber) {
    console.log("Congrats you guess correct number " + randomNumber);
}
else {
    console.log("You guessed wrong number and correct number is " + randomNumber);
}
