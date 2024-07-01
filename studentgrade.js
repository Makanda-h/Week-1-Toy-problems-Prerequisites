const prompt = require("prompt-sync")();
grade = prompt("please enter your score:");

  if (marks < 0 || marks > 100) {
    console.log("Enter number between 0 and 100");
  }

function studentGrade() {
  let grade = "F";
  if (marks > 79) {
    grade = "A";
  } else {
    if (marks >= 60 && marks <= 79) {
      grade = "B";
    } else {
      if (marks >= 49 && marks <= 59) {
        grade = "C";
      } else {
        if (marks >= 40 && marks <= 48) {
          grade = "D";
        } else {
          grade = "E";
        }
      }
    }
  }
}
studentGrade()
