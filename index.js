#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const systemGeneratedNo = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: (chalk.red.bgBlue("write your guess"))
    },
]);
if (answers.userGuess == Number) {
    console.log(chalk.black.bgYellow("you win"));
}
else {
    console.log(chalk.red.bgBlue("please try again"));
}
