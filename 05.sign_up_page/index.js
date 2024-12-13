document.addEventListener("DOMContentLoaded", function () {
    const error_msg = document.querySelector(".error_msg");
    const mypass = document.querySelector(".pass");
    const confirmPass = document.querySelector(".confirm_pass");

    // Add event listeners to validate on input
    confirmPass.addEventListener("input", validatePassword);
    mypass.addEventListener("input", validatePassword);


    function validatePassword() {
        const pass = mypass.value;
        const confirm_pass = confirmPass.value;

        if (pass === "" && confirm_pass === "") {
            error_msg.innerHTML = ""; // Clear error when both are empty
        } else if (pass !== confirm_pass) {
            error_msg.innerHTML = "*Passwords do not match";
        } else {
            error_msg.innerHTML = ""; // Clear error when passwords match
        }
    }
});