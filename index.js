const displayValues = []
let currrentValue = ['0']
let result = 0
let operand = ''
// add event listener to each button
document.querySelectorAll("button").forEach(button => {
    const primaryDisplay = document.querySelector("#primary-display-value");

    button.addEventListener("click", () => {

        displayValues.push(button.textContent)
        primaryDisplay.textContent = displayValues.join('')

        if (button.textContent == '=') {

            if (operand == '+') {
                result += parseFloat(currrentValue.join(''))
            }

            if (operand == '-') {
                result -= parseFloat(currrentValue.join(''))
            }

            if (operand == '*') {
                result *= parseFloat(currrentValue.join(''))
            }

            if (operand == '/') {
                result /= parseFloat(currrentValue.join(''))
            }

            currrentValue = [0]
            console.log(result)
            return
        }

        if (button.textContent == "+" || button.textContent == "-" || button.textContent == "*" || button.textContent == "/") {

            result += parseFloat(currrentValue.join(''))
            currrentValue = [0]
            operand = button.textContent
            return
        }

        else {
            if ((parseFloat(button.textContent) == 1 || parseFloat(button.textContent) == 2 || parseFloat(button.textContent) == 5) && operand == '') {
                currrentValue.push(button.textContent)
            }

            else {
                currrentValue.push(button.textContent)
            }

        }




    });
});















// function to change background to dark class
checkDarkToggler = () => {
    let bodyDark = document.body;
    bodyDark.classList.toggle("dark-mode");
}