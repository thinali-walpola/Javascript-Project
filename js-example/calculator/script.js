
const display = document.getElementById('display');
function appendToDisplay(){
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}
function calculate() {
    display.value = eval(display.value);
}
