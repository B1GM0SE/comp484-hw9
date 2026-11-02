// ==========================
// Part 1: Date Display
// ==========================

const currentDate = new Date();
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const day = String(currentDate.getDate()).padStart(2, "0");
const year = currentDate.getFullYear();

const formattedDate = `Today is ${month}/${day}/${year}`;
document.getElementById("dateOutput").textContent = formattedDate;

// ==========================
// Part 2: Number Conversion
// ==========================

// These values begin as strings and are converted with Number().
const firstValue = "85";
const secondValue = "92.5";
const thirdValue = "hello";
const fourthValue = "78";

const firstNumber = Number(firstValue);
const secondNumber = Number(secondValue);
const thirdNumber = Number(thirdValue);
const fourthNumber = Number(fourthValue);

const firstIsNaN = Number.isNaN(firstNumber);
const secondIsNaN = Number.isNaN(secondNumber);
const thirdIsNaN = Number.isNaN(thirdNumber);
const fourthIsNaN = Number.isNaN(fourthNumber);

const firstIsInteger = Number.isInteger(firstNumber);
const secondIsInteger = Number.isInteger(secondNumber);
const thirdIsInteger = Number.isInteger(thirdNumber);
const fourthIsInteger = Number.isInteger(fourthNumber);

// Conditional messages provide extra information about the converted values.
let invalidValueMessage;
if (thirdIsNaN) {
  invalidValueMessage = "The value 'hello' is not a valid number.";
} else {
  invalidValueMessage = "The value 'hello' is a valid number.";
}

let decimalMessage;
if (secondIsInteger) {
  decimalMessage = "The decimal value is an integer.";
} else {
  decimalMessage = "The decimal value is not an integer.";
}

const conversionResults = `
  <ul>
    <li>Original: "${firstValue}" → Converted: ${firstNumber} → isNaN: ${firstIsNaN} → isInteger: ${firstIsInteger}</li>
    <li>Original: "${secondValue}" → Converted: ${secondNumber} → isNaN: ${secondIsNaN} → isInteger: ${secondIsInteger}</li>
    <li>Original: "${thirdValue}" → Converted: ${thirdNumber} → isNaN: ${thirdIsNaN} → isInteger: ${thirdIsInteger}</li>
    <li>Original: "${fourthValue}" → Converted: ${fourthNumber} → isNaN: ${fourthIsNaN} → isInteger: ${fourthIsInteger}</li>
  </ul>
  <p>${invalidValueMessage}</p>
  <p>${decimalMessage}</p>
`;

document.getElementById("numberConversionOutput").innerHTML = conversionResults;

// ==========================
// Part 3: Grade Math & Formatting
// ==========================

// Fixed grade values are used for this assignment's grade calculator.
const firstGrade = 85;
const secondGrade = 92;
const thirdGrade = 78;

const totalScore = firstGrade + secondGrade + thirdGrade;
const averageScore = totalScore / 3;
const formattedAverage = averageScore.toFixed(2);

let gradeMessage;
if (averageScore >= 70) {
  gradeMessage = "Passing";
} else {
  gradeMessage = "Not passing";
}

const mathResults = `
  <p>Grade 1: ${firstGrade}</p>
  <p>Grade 2: ${secondGrade}</p>
  <p>Grade 3: ${thirdGrade}</p>
  <p>Total score: ${totalScore}</p>
  <p>Average score: ${formattedAverage}</p>
  <p class="result">Result: ${gradeMessage}</p>
`;

document.getElementById("mathOutput").innerHTML = mathResults;
