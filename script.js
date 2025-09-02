var pass = document.getElementById("password");
var message = document.getElementById("message");
var strength = document.getElementById("strength");

pass.addEventListener("input", () => {
    if(pass.value.length > 0) {
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
    if(pass.value.length < 6) {
        strength.innerText = "Weak";
        strength.style.color = "red";
    }
    else if(pass.value.length >= 6 && pass.value.length < 12) {
        strength.innerText = "Medium";
        strength.style.color = "orange";
    }
    else if(pass.value.length >= 12) {
        strength.innerText = "Strong";
        strength.style.color = "green";
    }
})