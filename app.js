#! /usr/bin/env node 
import chalk from "chalk";
import inquirer from "inquirer";
console.log(" \n Welcome to the " +
    chalk.yellow.bold.italic("Words Counter") +
    " Project using" +
    chalk.green.bold.italic(" Inquirer, chalk and Node.js:"));
const askUser = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Write the sentence in order to count the number of words.",
    },
]);
let Usersentence = askUser.Sentence.trim().split(" ");
console.log(chalk.bold.italic.redBright(` \n \t => The number of words in the given sentence is ${Usersentence.length}.`));
