// Importing readline module
const readline = require('readline');

// Creating interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompting for user input
rl.question('Enter your score: ', (input) => {
    let score = parseInt(input);

    // Validate input
    if (isNaN(score)) {
        console.log("Error: Invalid input. Please enter a valid number.");
    } else {
        let grade;

        // Evaluate score and assign grade
        if (score >= 100) {
            grade = "A";
        } else if (score >= 80) {
            grade = "B";
        } else if (score >= 70) {
            grade = "C";
        } else if (score >= 60) {
            grade = "D";
        } else if (score >= 45) {
            grade = "E";
        } else if (score >= 30) {
            grade = "F";
        } else {
            console.log("Error: Score out of range.");
        }

        // Print message based on grade
        if (grade === "A") {
            console.log("Grade A: Excellent Work!");
        } else if (grade === "B") {
            console.log("Grade B: Good Job!");
        } else if (grade === "C") {
            console.log("Grade C: You Passed!");
        } else if (grade === "D") {
            console.log("Grade D: Needs Improvement!");
        } else if (grade === "E") {
            console.log("Grade E: Barely Passed!");
        } else if (grade === "F") {
            console.log("Grade F: Failed Better Luck Next Time!");
        }
    }

    // Close readline interface
    rl.close();
});