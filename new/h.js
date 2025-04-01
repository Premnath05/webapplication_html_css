document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");
    const mobileInput = document.getElementById("mobile-number");
    const proceedBtn = document.getElementById("proceed-btn");
    const errorMsg = document.getElementById("error-msg");

    // Toggle mobile menu
    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Validate input in real-time
    mobileInput.addEventListener("input", function () {
        const mobilePattern = /^[6-9]\d{9}$/;
        if (mobilePattern.test(mobileInput.value)) {
            errorMsg.style.display = "none";
            proceedBtn.disabled = false;
        } else {
            errorMsg.style.display = "block";
            proceedBtn.disabled = true;
        }
    });

    // Redirect to plans page if valid
    proceedBtn.addEventListener("click", function () {
        if (!proceedBtn.disabled) {
            window.location.href = "planspage.html";
        }
    });
});
