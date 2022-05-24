let displayValues = []
let currrentValue = ['0']
let result = 0
let operand = ''

// add event listener to each button
document.querySelectorAll("button").forEach(button => {
    const primaryDisplay = document.querySelector("#primary-display-value");
    const secondaryDisplay = document.querySelector("#secondary-display-value");

    button.addEventListener("click", () => {
        buttonValue = button.textContent

        if (buttonValue == 'CLR') {
            currrentValue = ['0']
            displayValues = []
            primaryDisplay.textContent = '0'
            secondaryDisplay.textContent = ''
            return
        }

        displayValues.push(button.textContent)
        primaryDisplay.textContent = displayValues.join('')
        currentValueFloat = parseFloat(currrentValue.join(''))
       




        if (buttonValue == '=') {

            if (operand == '+') {
                result += currentValueFloat
            }

            if (operand == '-') {
                result -= currentValueFloat
            }

            if (operand == '*') {
                result *= currentValueFloat
            }

            if (operand == '/') {
                result /= currentValueFloat
            }

            currrentValue = [0]
            secondaryDisplay.textContent = result
            return
        }

        if (buttonValue == "+" || buttonValue == "-" || buttonValue == "*" || buttonValue == "/") {

            result += currentValueFloat
            currrentValue = [0]
            operand = buttonValue
            return
        }

        else {
            if ((parseFloat(buttonValue) == 1 || parseFloat(buttonValue) == 2 || parseFloat(buttonValue) == 3 || parseFloat(buttonValue) == 4 || parseFloat(buttonValue) == 5 || parseFloat(buttonValue) == 6 || parseFloat(buttonValue) == 7 || parseFloat(buttonValue) == 8 || parseFloat(buttonValue) == 9 || parseFloat(buttonValue) == 0) && operand == '') {
                currrentValue.push(buttonValue)
            }

            else {
                currrentValue.push(buttonValue)
            }

        }

    });
});



// function to change background to dark class
document.querySelector("#checkAddress").addEventListener('click', () => {
    let bodyDark = document.body;
    bodyDark.classList.toggle("dark-mode");
});