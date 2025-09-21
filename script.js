// Get the display element
let display = document.getElementById('display');

// Keep track of what the user has typed
let input = "";

// Function to update display
function updateDisplay() {
    display.value = input;
}

// Numbers
let numbers = ['btn0','btn1','btn2','btn3','btn4','btn5','btn6','btn7','btn8','btn9'];
numbers.forEach(id => {
    let btn = document.getElementById(id);
    btn.addEventListener('click', function() {
        input += btn.innerText;
        updateDisplay();
    });
});

// Operators
let operators = ['btnAdd','btnSubtract','btnMultiply','btnDivide','btnDot'];
operators.forEach(id => {
    let btn = document.getElementById(id);
    btn.addEventListener('click', function() {
        input += btn.innerText;
        updateDisplay();
    });
});

// Clear button
document.getElementById('btnClear').addEventListener('click', function() {
    input = "";
    updateDisplay();
});

// Equals button
document.getElementById('btnEquals').addEventListener('click', function() {
    try {
        input = eval(input); // Evaluate the expression
        updateDisplay();
    } catch {
        input = "";
        display.value = "Error";
    }
});
