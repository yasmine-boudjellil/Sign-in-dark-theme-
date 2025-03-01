function togglePassword() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.querySelector(".stars");

    for (let i = 0; i < 25; i++) {  
        let star = document.createElement("div");
        star.classList.add("star");

        let size = Math.random() * 3 + 2; 
        let xPos = Math.random() * 100;  
        let yPos = Math.random() * 100;
        let delay = Math.random() * 2;  

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${yPos}%`;
        star.style.left = `${xPos}%`;
        star.style.animationDelay = `${delay}s`;

        starsContainer.appendChild(star);
    }
});
