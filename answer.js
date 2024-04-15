import inquirer from "inquirer";

export const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter First Number", type: "number", name: "SecondNumber" },
    {
        message: " Select one of the operator to perform operator",
        type: "list",
        name: "operator",
        choices: ["addition" , "subtraction" , "multiplication" , "division"],
    },
]);
