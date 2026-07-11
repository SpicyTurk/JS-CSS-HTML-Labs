// Start with creating the functions

const history = [];

function add(num1, num2) {
    const result = num1 + num2;
    saveHistory(num1, "+", num2, result);
    return result;
}

function subtract(num1, num2) {
    const result = num1 - num2;
    saveHistory(num1, "-", num2, result);
    return result;
}

function multiply(num1, num2) {
    const result = num1 * num2;
    saveHistory(num1, "*", num2, result);
    return result;
}

function divide(num1, num2) {
    const result = num1 / num2;
    saveHistory(num1, "/", num2, result);
    return result;
}

function displayHistory() {
    if (history.length === 0) {
    console.log("Your history is empty"); 
} else{
    console.log("Heres your history");
    history.forEach(entry => console.log(entry));
    }
}

function saveHistory(num1, symbol, num2, result) {
    const entry = {
    operand1: num1,
    operator: symbol,
    operand2: num2,
    calculation: result
    };
    history.push(entry); 
}

//Testing logs
console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(multiply(6, 7));
console.log(divide(20, 5));
displayHistory();

