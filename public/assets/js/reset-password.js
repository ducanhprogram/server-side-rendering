document.addEventListener("DOMContentLoaded", function () {
    // Initialize validation for reset password form
    if (typeof initFormValidation === "function") {
        initFormValidation("resetPasswordForm");
    }

    const newPasswordInput = document.getElementById("newPassword");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const lengthReq = document.getElementById("lengthReq");
    const uppercaseReq = document.getElementById("uppercaseReq");
    const lowercaseReq = document.getElementById("lowercaseReq");
    const numberReq = document.getElementById("numberReq");
    const specialReq = document.getElementById("specialReq");

    // Check password requirements in real-time
    newPasswordInput.addEventListener("keyup", function () {
        const password = this.value;

        // Length requirement (at least 8 characters)
        if (password.length >= 8) {
            lengthReq.classList.add("valid");
            lengthReq.querySelector("i").className = "fas fa-check-circle";
        } else {
            lengthReq.classList.remove("valid");
            lengthReq.querySelector("i").className = "fas fa-circle";
        }

        // Uppercase letter requirement
        if (/[A-Z]/.test(password)) {
            uppercaseReq.classList.add("valid");
            uppercaseReq.querySelector("i").className = "fas fa-check-circle";
        } else {
            uppercaseReq.classList.remove("valid");
            uppercaseReq.querySelector("i").className = "fas fa-circle";
        }

        // Lowercase letter requirement
        if (/[a-z]/.test(password)) {
            lowercaseReq.classList.add("valid");
            lowercaseReq.querySelector("i").className = "fas fa-check-circle";
        } else {
            lowercaseReq.classList.remove("valid");
            lowercaseReq.querySelector("i").className = "fas fa-circle";
        }

        // Number requirement
        if (/[0-9]/.test(password)) {
            numberReq.classList.add("valid");
            numberReq.querySelector("i").className = "fas fa-check-circle";
        } else {
            numberReq.classList.remove("valid");
            numberReq.querySelector("i").className = "fas fa-circle";
        }

        // Special character requirement
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            specialReq.classList.add("valid");
            specialReq.querySelector("i").className = "fas fa-check-circle";
        } else {
            specialReq.classList.remove("valid");
            specialReq.querySelector("i").className = "fas fa-circle";
        }

        // Check for password match if confirm password has value
        if (confirmPasswordInput.value) {
            if (password === confirmPasswordInput.value) {
                document.getElementById("confirmPasswordError").style.display =
                    "none";
            } else {
                document.getElementById("confirmPasswordError").style.display =
                    "block";
            }
        }
    });

    // Check password match when confirm password is changed
    confirmPasswordInput.addEventListener("keyup", function () {
        if (this.value !== newPasswordInput.value) {
            document.getElementById("confirmPasswordError").style.display =
                "block";
        } else {
            document.getElementById("confirmPasswordError").style.display =
                "none";
        }
    });

    // Handle form submission
    document
        .getElementById("resetPasswordForm")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            if (
                validateForm("resetPasswordForm") &&
                isValidPassword(newPasswordInput.value) &&
                newPasswordInput.value === confirmPasswordInput.value
            ) {
                // In a real app, you would send an AJAX request to your server
                // For demo: simulate successful password reset
                document.getElementById("successMessage").style.display =
                    "block";
                document.getElementById("resetPasswordForm").reset();

                // Reset password requirements
                document
                    .querySelectorAll(".requirement")
                    .forEach(function (req) {
                        req.classList.remove("valid");
                        req.querySelector("i").className = "fas fa-circle";
                    });

                // Redirect to login page after 3 seconds
                setTimeout(function () {
                    window.location.href = "login.html";
                }, 3000);
            }
        });

    function isValidPassword(password) {
        const lengthValid = password.length >= 8;
        const uppercaseValid = /[A-Z]/.test(password);
        const lowercaseValid = /[a-z]/.test(password);
        const numberValid = /[0-9]/.test(password);
        const specialValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        return (
            lengthValid &&
            uppercaseValid &&
            lowercaseValid &&
            numberValid &&
            specialValid
        );
    }
});
