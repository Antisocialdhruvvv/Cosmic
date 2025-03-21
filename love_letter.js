function unlockLetter() {
    const password = document.getElementById("password").value;
    if (password === "cosmicLove") {
        document.getElementById("letter").style.display = "block";
    } else {
        alert("Incorrect Password");
    }
}
