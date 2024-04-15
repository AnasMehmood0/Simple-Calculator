import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter First Number", type: "number", name: "SecondNumber" },
  {
    message: " Select the required operator",
    type : "list",
    name : "operator",
    choices : ["addition" , "subtraction" , "multiplication" , "division"],
  },
]);

if (answer.operator === "addition") {
  console.log(answer.firstNumber + answer.SecondNumber)
} else if (answer.operator === "subtraction") {
  console.log(answer.firstNumber - answer.SecondNumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.firstNumber * answer.SecondNumber);
} else if (answer.operator === "division") {
  console.log(answer.firstNumber / answer.SecondNumber);
} else {
  console.log("Please select the valid operator");
}
