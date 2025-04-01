function sendOTP() {
    let mobileNumber = document.getElementById("mobileNumber").value;

    if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
        alert("Please enter a valid 10-digit mobile number");
        return;
    }

    localStorage.setItem("otp", "123456"); 
    alert("OTP has been sent to your mobile number!");

    document.getElementById("otpSection").style.display = "block";
}

function verifyOTP() {
    let enteredOTP = document.getElementById("otpInput").value;
    let storedOTP = localStorage.getItem("otp");

    if (enteredOTP === storedOTP) {
        alert("OTP Verified Successfully!");
        window.location.href = "dashboard.html"; 
    } else {
        alert("Invalid OTP! Please try again.");
    }
}
