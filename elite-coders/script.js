const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const toggleSliderBtn = document.getElementById("toggle-slider");
const slider = document.getElementById("slider");
const sliderText = document.getElementById("slider-text");
const loginError = document.getElementById("login-error");
const registerError = document.getElementById("register-error");

let isLogin = false;

toggleSliderBtn.addEventListener("click", () => {
    isLogin = !isLogin;
    slider.className = `slider ${isLogin ? "slider-login" : "slider-register"}`;
    toggleSliderBtn.textContent = isLogin ? "Login" : "Sign up";
    sliderText.textContent = isLogin
        ? "Ready to conquer your goals? Let’s get started – log in!"
        : "Every journey starts with a first step – take yours by signing up!";
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("login-user").value;
    const pass = document.getElementById("login-password").value;
    if (!user || !pass) {
        loginError.textContent = "Please fill out all fields.";
        return;
    }
    loginError.textContent = "";
    setTimeout(() => {
        alert("Login successful (Simulated)");
    }, 1500);
});

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const pass = document.getElementById("register-password").value;
    if (!user || !email || !pass) {
        registerError.textContent = "Please fill out all fields.";
        return;
    }
    registerError.textContent = "";
    setTimeout(() => {
        alert("Registration successful (Simulated)");
        toggleSliderBtn.click();
    }, 1500);
});