// Append clicked button value to display
function appendToDisplay(value) {
    let display = document.getElementById("display");
    // Prevent multiple operators in a row
    if (/[+\-*/.]/.test(display.value.slice(-1)) && /[+\-*/.]/.test(value)) {
        return;
    }
    display.value += value;
}

// Clear the entire display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Delete the last character from the display
function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Calculate the expression
function calculate() {
    try {
        let display = document.getElementById("display");
        display.value = eval(display.value) || "";
    } catch (error) {
        display.value = "Error";
    }
}

// Allow keyboard support
document.addEventListener("keydown", function (event) {
    const key = event.key;
    const operators = ['+', '-', '*', '/'];
    if (!isNaN(key) || operators.includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
