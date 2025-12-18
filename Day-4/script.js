const billAmount = document.getElementById("billAmount");
const tipPercent = document.getElementById("tipPercent");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("resultDiv");


// Event listener for button to calculate amount
calculateBtn.addEventListener("click", function () {
    const bill = Number(billAmount.value);
    const tip = Number(tipPercent.value);


    if (bill <= 0 || tip < 0) {
        resultDiv.textContent ="Please enter a valid amount";
        return; 
    }

    const tipAmount = bill * (tip / 100);

    const totalAmount = bill + tipAmount;

    resultDiv.textContent = 
        `Tip: ${totalAmount} for the bill amount of ${bill}`;


});