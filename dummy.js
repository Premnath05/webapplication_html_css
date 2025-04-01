// document.addEventListener("DOMContentLoaded", function () {
//     const upiPayment = document.getElementById("upi-payment");
//     const cardPayment = document.getElementById("card-payment");
//     const netBanking = document.getElementById("net-banking");
    
//     const upiOptions = document.querySelector(".upi-options");
//     const cardDetails = document.querySelector(".card-details");
//     const bankSelect = document.getElementById("bank-select");
    
//     const payBtn = document.getElementById("pay-btn");

//     function resetFields() {
//         upiOptions.style.display = "none";
//         cardDetails.style.display = "none";
//         bankSelect.style.display = "none";
//         payBtn.style.display = "none";
//     }

//     upiPayment.addEventListener("change", function () {
//         resetFields();
//         upiOptions.style.display = "block";
//         payBtn.style.display = "block";
//     });

//     cardPayment.addEventListener("change", function () {
//         resetFields();
//         cardDetails.style.display = "block";
//         payBtn.style.display = "block";
//     });

//     netBanking.addEventListener("change", function () {
//         resetFields();
//         bankSelect.style.display = "block";
//         payBtn.style.display = "block";
//     });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const payButton = document.getElementById("payButton");

//     document.querySelectorAll('input[name="paymentMethod"]').forEach(input => {
//         input.addEventListener("change", function () {
//             document.getElementById("upiOptions").classList.add("d-none");
//             document.getElementById("cardDetails").classList.add("d-none");
//             document.getElementById("bankOptions").classList.add("d-none");

//             if (this.id === "upiPayment") {
//                 document.getElementById("upiOptions").classList.remove("d-none");
//             } else if (this.id === "cardPayment") {
//                 document.getElementById("cardDetails").classList.remove("d-none");
//             } else if (this.id === "netBanking") {
//                 document.getElementById("bankOptions").classList.remove("d-none");
//             }

//             payButton.removeAttribute("disabled");
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".filter-btn");
    const plans = document.querySelectorAll(".plan-card");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Filter plans based on category
            const category = this.getAttribute("data-category");
            plans.forEach(plan => {
                if (plan.classList.contains(category)) {
                    plan.style.display = "block";
                } else {
                    plan.style.display = "none";
                }
            });
        });
    });
});




// plans filter
function filterPlans(category) {
    let allPlans = document.querySelectorAll(".plan-card");

    allPlans.forEach(plan => {
        if (plan.classList.contains(category)) {
            plan.style.display = "block";
        } else {
            plan.style.display = "none";
        }
    });

    // Update active button style
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    event.target.classList.add("active");
}

// Show only 'Popular Plans' by default
document.addEventListener("DOMContentLoaded", () => {
    filterPlans('popular');
});
