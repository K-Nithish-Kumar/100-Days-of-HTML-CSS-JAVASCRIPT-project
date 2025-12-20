const generateBtn = document.getElementById("generateBtn");
const colorDiv = document.getElementById("colorCode");


function generateRandomColor () {
    const character = "0123456789abcdef";
    let color = "#";

    for(let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);

        color += character[randomIndex]
        console.log(color);
    }

    return color;


}


generateBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = generateRandomColor();
    colorDiv.textContent = generateRandomColor();
})