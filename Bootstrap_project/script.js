function sendOTP() {
    let mobile = document.getElementById('mobileNumber').value;
    if (mobile.length !== 10) {
        alert("Please enter a valid 10-digit mobile number");
        return;
    }
    sessionStorage.setItem("userMobile", mobile);
    alert("OTP Sent! (For demo, OTP is 123456)");
    window.location.href = "otp.html";
}

function verifyOTP() {
    let otp = document.getElementById('otp').value;
    if (otp === "123456") {
        alert("OTP Verified Successfully!");
        window.location.href = "dash.html";
    } else {
        alert("Invalid OTP! Please try again.");
    }
}
