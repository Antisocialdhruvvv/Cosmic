const nicknames = [
    { name: "Stardust", meaning: "A symbol of the universe's vast beauty." },
    { name: "Celestia", meaning: "A heavenly being, full of grace and light." },
    { name: "Nebula", meaning: "A cloud of dust and gas, a cosmic birthplace." },
    // Add the rest of your 100 nicknames here
];

document.getElementById("generate-btn").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * nicknames.length);
    const nickname = nicknames[randomIndex];
    document.getElementById("nickname").textContent = nickname.name;
    document.getElementById("meaning").textContent = nickname.meaning;
    document.getElementById("nickname-meaning").style.display = "block";
});
