#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation, {rainbow} from "chalk-animation";

const sleep = () => {
  return new Promise((res) => setTimeout(res, 2000));
};
async function welcome() {
  let rainbowtitle = chalkAnimation.rainbow("..Let's Start Calculation.."); //start

  await sleep();
  rainbowtitle.stop();
}

await welcome();
console.log(
  chalk.blue.visible(`
  
_______________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|

`)
);

//calculator function
async function askquestion() {
  await inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        message: chalk.yellow("Which Operation you want to perform?"),
      },
      {
        name: "firstnumber",
        type: "number",
        message: chalk.blue("Enter the First Number?"),
      },
      {
        name: "secondnumber",
        type: "number",
        message: chalk.blue("Enter the Second Number?"),
      },
    ])
    .then((answers) => {
      if (answers.operator === "Addition") {
        console.log(
          chalk.yellow(
            `${answers.firstnumber} + ${answers.secondnumber} = ` +
              (answers.firstnumber + answers.secondnumber)
          )
        );
      } else if (answers.operator === "Subtraction") {
        console.log(
          chalk.yellow(
            `${answers.firstnumber} - ${answers.secondnumber} = ` +
              (answers.firstnumber - answers.secondnumber)
          )
        );
      } else if (answers.operator === "Multiplication") {
        console.log(
          chalk.yellow(
            `${answers.firstnumber} * ${answers.secondnumber} = ` +
              answers.firstnumber * answers.secondnumber
          )
        );
      } else if (answers.operator === "Division") {
        console.log(
          chalk.yellow(
            `${answers.firstnumber} / ${answers.secondnumber} = ` +
              answers.firstnumber / answers.secondnumber
          )
        );
      }
    });
}

let confirm;

do {
  await askquestion();

  confirm = await inquirer.prompt({
    type: "confirm",
    name: "restart",
    message: chalk.green(
      "Do you want to continue? Press Y or N; then press ENTER."
    ),
  });
} while (confirm.restart);

console.log(
  chalk.redBright.bold(`
Thank you!
Develop by: Muhammad Talha Tariq.
PIAIC 234119 Badge: 52. Lahore, Pakistan.
`)
);
