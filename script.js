document.getElementById('standard-login-btn').addEventListener('click', function() {
    alert('You clicked Standard Login! Redirecting to the login page...');
    // You can replace this with actual login redirection or modal
});

document.getElementById('star-puzzle-btn').addEventListener('click', function() {
    alert('You clicked Interactive Star Puzzle! Starting the puzzle...');
    // Add functionality to trigger the star puzzle here
});
// nickname.js
const nicknames = [
    { name: "Stardust", meaning: "A symbol of the universe's vast beauty." },
    { name: "Celestia", meaning: "A heavenly being, full of grace and light." },
    // Add 100 names here
];

document.getElementById("generate-btn").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * nicknames.length);
    const nickname = nicknames[randomIndex];
    document.getElementById("nickname").textContent = nickname.name;
    document.getElementById("meaning").textContent = nickname.meaning;
    document.getElementById("nickname-meaning").style.display = "block";
});
// love_letter.js
function unlockLetter() {
    const password = document.getElementById("password").value;
    if (password === "cosmicLove") {
        document.getElementById("letter").style.display = "block";
    } else {
        alert("Incorrect Password");
    }
}
