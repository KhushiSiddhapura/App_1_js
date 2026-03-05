let score = 0
let randomNum

const scoreDisplay = document.getElementById("score")
const ranNumInput = document.getElementById("ranNum")
const buttons = document.querySelectorAll(".click")

function generate() {
    randomNum = Math.floor(Math.random() * 5) + 1
    ranNumInput.value = randomNum
}

generate()

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        let userChoice = parseInt(button.innerText)

        if (userChoice === randomNum) {
            score += 10
            scoreDisplay.innerText = score
            generate()
        }
    })
})