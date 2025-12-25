const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

const clear = document.getElementById('clear');
let expression = "";

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        const value = button.textContent;

        if (value === 'C') {
            expression = "";
            display.textContent = "";
            return;
        }


        if(value === '=') {
            try {

                expression = eval(expression).toString();
                display.textContent = expression;
                
            } catch (error) {
                expression = 'ERROR';
                display.textContent = "";
            }
            return;
        }

        expression += value;

        display.textContent = expression;
    })
})