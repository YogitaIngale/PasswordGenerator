function generatePassword() {
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;
    const length = document.getElementById("length").value;

    const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerSet = "abcdefghijklmnopqrstuvwxyz";
    const numberSet = "0123456789";
    const symbolSet = "!@#$%^&*()-_=+<>?/";

    let characterPool = "";
    if (uppercase) characterPool += upperSet;
    if (lowercase) characterPool += lowerSet;
    if (numbers) characterPool += numberSet;
    if (symbols) characterPool += symbolSet;

    if (characterPool === "") {
        alert("Please select at least one option");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    document.getElementById("password").value = password;
    checkStrength(password);
}

function checkStrength(password) {
    let score = 0;
    if (password.match(/[A-Z]/)) score++;
    if (password.match(/[a-z]/)) score++;
    if (password.match(/[0-9]/)) score++;
    if (password.match(/[!@#$%^&*()-_=+<>?/]/)) score++;
    if (password.length >= 8) score++;
    if (password.length >= 16) score++;
    
    let strength = "Weak";
    if (score >= 5) strength = "Great";
    else if (score === 4) strength = "Good";
    else if (score === 3) strength = "Medium";
    
    document.getElementById("strength").innerText = "Strength: " + strength;
}
