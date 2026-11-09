# Simple Calculator

## 📌 Project Description

This is a simple calculator web application developed using HTML, CSS, and JavaScript.

The calculator allows users to perform basic mathematical operations such as addition, subtraction, multiplication, and division. It also supports decimal numbers and clearing the display.

This project was created to practice basic JavaScript functions, HTML event handling, and CSS Grid layouts.

## 🛠️ Technologies Used

- **HTML5** – Creates the calculator structure and buttons.
- **CSS3** – Styles the calculator and arranges buttons using CSS Grid and Flexbox.
- **JavaScript** – Handles button clicks, user input, and mathematical calculations.

## ✨ Features

- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Decimal number support
- Clear display (C)
- Calculate results (=)
- Error handling using try...catch
- Interactive button hover and active effects

## 📂 Project Structure

```text
Calculator/
│
├── index.html
├── style.css
└── script.js
```

## ⚙️ How It Works

### 1. HTML (index.html)

HTML creates the calculator interface.

- The `calculator` div contains the entire calculator.
- The `display` input shows the numbers and mathematical expressions.
- The `keys` div contains all calculator buttons.
- The `onclick` event calls JavaScript functions when a button is clicked.

Example:

```html
<button onclick="appendToDisplay('5')">5</button>
```

When the user clicks this button, the `appendToDisplay()` function receives the value `5`.

### 2. CSS (style.css)

CSS controls the appearance of the calculator.

- Flexbox is used to center the calculator on the screen.
- CSS Grid arranges the buttons into columns.
- Background colors, borders, padding, and shadows improve the appearance.
- Hover and active effects provide visual feedback when interacting with buttons.

### 3. JavaScript (script.js)

JavaScript handles the calculator's functionality.

**Getting the display element:**

```javascript
const display = document.getElementById('display');
```

This selects the HTML element with the ID `display` and stores it in the `display` variable.

**appendToDisplay(value):**

```javascript
function appendToDisplay(value) {
    display.value += value;
}
```

This function receives a value from the clicked button and adds it to the existing display content.

For example, clicking 1, 2, and + displays `12+`.

**clearDisplay():**

```javascript
function clearDisplay() {
    display.value = "";
}
```

This function clears the calculator display by assigning an empty string.

**calculate():**

```javascript
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}
```

This function evaluates the mathematical expression entered by the user and displays the result.

## 🧠 Understanding eval()

`eval()` is a built-in JavaScript function that evaluates a string as JavaScript code and returns the result.

In this calculator, `eval()` is used to perform mathematical calculations.

**Example:**

```javascript
let expression = "10+5*2";

let result = eval(expression);

console.log(result);
```

Output:

```text
20
```

Why is the answer 20 instead of 30?

Because JavaScript follows the mathematical order of operations (BODMAS). Multiplication is performed before addition.

- First: 5 × 2 = 10
- Then: 10 + 10 = 20

**How eval() works in this calculator:**

1. The user clicks calculator buttons.
2. The mathematical expression is added to the display as a string.
3. When the user clicks the `=` button, `calculate()` is called.
4. `eval()` evaluates the expression.
5. The calculated result is displayed.

**Why