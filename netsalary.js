const basicSalary = parseInt(prompt("Enter your basic salary:"));
const benefits = parseInt(prompt("Enter your benefits:"));
const grossSalary = basicSalary + benefits;
function grossSalaryFunction() {
  console.log(`Gross Salary:${grossSalary}`);
}

let payee = 0;
let nhifDeductions = 0;
let nssfDeductions = 0;

//calculations of payee
if (grossSalary >= 0 && grossSalary <= 24000) {
  payee = grossSalary * 0.1;
  console.log(`payee:${payee}`);
} else if (grossSalary > 24001 && grossSalary <= 32333) {
  payee = grossSalary * 0.25;
  console.log(`payee ${payee}`);
} else if (grossSalary > 32333 && grossSalary <= 500000) {
  payee = grossSalary * 0.3;
  console.log(`payee:${payee}`);
} else if (grossSalary >= 500001 && grossSalary <= 800000) {
  payee = grossSalary * 0.32;
  console.log(`payee:${payee}`);
} else {
  payee = grossSalary * 0.35;
}
payee();

//calculation of nhif deductions
if (grossSalary >= 0 && grossSalary <= 5999) {
  nhifDeductions = 150;
} else if (grossSalary >= 6000 && grossSalary <= 7999) {
  nhifDeductions = 300;
} else if (grossSalary >= 8000 && grossSalary <= 11999) {
  nhifDeductions = 400;
} else if (grossSalary >= 12000 && grossSalary <= 14999) {
  nhifDeductions = 500;
} else if (grossSalary >= 15000 && grossSalary <= 19999) {
  nhifDeductions = 600;
} else if (grossSalary >= 20000 && grossSalary <= 24999) {
  nhifDeductions = 750;
} else if (grossSalary >= 25000 && grossSalary <= 29999) {
  nhifDeductions = 850;
} else if (grossSalary >= 30000 && grossSalary <= 34999) {
  nhifDeductions = 900;
} else if (grossSalary >= 35000 && grossSalary <= 39999) {
  nhifDeductions = 950;
} else if (grossSalary >= 40000 && grossSalary <= 44999) {
  nhifDeductions = 1000;
} else if (grossSalary >= 45000 && grossSalary <= 49999) {
  nhifDeductions = 1100;
} else if (grossSalary >= 50000 && grossSalary <= 59999) {
  nhifDeductions = 1200;
} else if (grossSalary >= 60000 && grossSalary <= 69999) {
  nhifDeductions = 1300;
} else if (grossSalary >= 70000 && grossSalary <= 799999) {
  nhifDeductions = 1400;
} else if (grossSalary >= 80000 && grossSalary <= 89999) {
  nhifDeductions = 1_500;
} else if (grossSalary >= 90000 && grossSalary <= 99999) {
  nhifDeductions = 1600;
} else {
  nhifDeductions = 1700;
}

//NSSF deductions
function nssf() {
  if (grossSalary <= 6000) {
    nssfDeductions = grossSalary * 0.06;
  } else if (grossSalary >= 60001 && grossSalary <= 18000) {
    nssfDeductions = grossSalary * 0.06;
  } else {
    console.log("invalid");
  }
}
nssf();

const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
console.log(`Gross Salary: ${grossSalary}`);
console.log(`Payee (Tax): ${payee}`);
console.log(`NHIF Deductions: ${nhifDeductions}`);
console.log(`NSSF Deductions: ${nssfDeductions}`);
console.log(`Net Salary: ${netSalary}`);
