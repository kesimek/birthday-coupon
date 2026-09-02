const giftScreen = document.getElementById("giftScreen");
const choiceScreen = document.getElementById("choiceScreen");
const doneScreen = document.getElementById("doneScreen");

const gift = document.getElementById("gift");
const choice = document.getElementById("choice");

// Open the gift
gift.addEventListener("click", () => {

    // Confetti!
    confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.6 }
    });

    // Hide gift screen
    giftScreen.classList.remove("active");

    // Small pause before showing choices
    setTimeout(() => {
        choiceScreen.classList.add("active");
    }, 600);

});

// User chooses an adventure
function finish(selection){

    choice.textContent = "Ellie chose: " + selection;

    choiceScreen.classList.remove("active");

    doneScreen.classList.add("active");

    confetti({
        particleCount: 260,
        spread: 180,
        origin: { y: 0.65 }
    });

}