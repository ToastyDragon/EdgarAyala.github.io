
function timeSensitiveWelcome() {
    greetingEl = document.getElementById("greeting");

    let welcomeTitle = new Date();
    let hours = welcomeTitle.getHours();

    if (hours >= 12 && hours < 18) {
        greetingEl.textContent = "Good Afternoon, ";
    } else if (hours >= 18 && hours <= 20) {
        greetingEl.textContent = "Good Evening, ";
    } else if (hours >= 21 && hours <= 0) {
        greetingEl.textContent = "Night Hours 😴, ";
    } else if (hours >= 1 && hours <= 11) {
        greetingEl.textContent = "Good Morning, "
    } else {
        greetingEl.textContent = "Welcome, "
    }
}

timeSensitiveWelcome()

function myAge() {
    let a = new Date().getFullYear();
    let b = 1998;
    let c = a - b;
    ageEl = document.getElementById("age").textContent = c; 
}

myAge()
