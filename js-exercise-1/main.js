function ageVerify() {
    userAge = prompt("WHAT IS YOUR AGE?");
    if (userAge >= 18) {
        alert("You can drive congrats");
    } else {
        alert("You are not old enough yet.")
    }
}

ageVerify()