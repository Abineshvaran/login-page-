const container = document.querySelector(".container");
const pwShowHide = document.querySelectorAll(".showHidePw"); // Corrected variable name
const pwField = document.querySelectorAll(".password");
const signUp = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");

// JavaScript code to show/hide password and change icon
pwShowHide.forEach(eyeIcon => { // Corrected variable name
    eyeIcon.addEventListener("click", () => {
        pwField.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye-slash", "fa-eye");
                });
            } else {
                pwField.type = "password";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye", "fa-eye-slash");
                });
            }
        });
    });
});

// JavaScript code to toggle between signup and login form
signUp.addEventListener("click", () => {
    container.classList.add("active");
});

login.addEventListener("click", () => {
    container.classList.remove("active");
});
