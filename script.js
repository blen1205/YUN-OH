
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const letterWindow = document.querySelector(".letter-window");


// ================================
// OPEN THE LETTER
// ================================

envelope.addEventListener("click", () => {

    // Hide envelope
    envelope.style.display = "none";

    // Show letter
    letter.style.display = "flex";

    // Play opening animation
    setTimeout(() => {
        letterWindow.classList.add("open");
    }, 50);
});


// ================================
// MOVE THE "NO" BUTTON
// Works on PC AND cellphone
// ================================

function moveNoButton() {

    // Get the size of the screen
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Different movement distance depending on screen size
    let distance;

    if (screenWidth <= 600) {
        // Smaller movement for phones
        distance = 80;
    } else {
        // Bigger movement for desktop
        distance = 180;
    }

    // Random angle
    const angle = Math.random() * Math.PI * 2;

    // Calculate X and Y movement
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    // Apply movement
    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform =
        `translate(${moveX}px, ${moveY}px)`;
}


// PC: Move when mouse gets near the button
noBtn.addEventListener("mouseenter", moveNoButton);


// Phone: Move when user touches the button
noBtn.addEventListener("touchstart", (event) => {

    // Prevent the button from being clicked
    event.preventDefault();

    moveNoButton();
});


// ================================
// YES BUTTON
// ================================

yesBtn.addEventListener("click", () => {

    // Change title
    title.textContent = "Palimos yah!";

    // Change image
    catImg.src = "qr.jpg";

    // Add final animation/design
    letterWindow.classList.add("final");

    // Hide buttons
    buttons.style.display = "none";

    // Show final message
    finalText.style.display = "block";
});
