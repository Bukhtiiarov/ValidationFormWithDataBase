//forma thanks
// const successWindow = document.querySelector('.success-wrapper');
// const form = document.querySelector('.thanks_form');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     setTimeout(() => {
//         successWindow.style.display = "flex";
//     }, 2000);
//     location.reload()
// })





//Switch//

let btn = document.querySelector(".replace");

let body = document.querySelector("body");

btn.addEventListener("click", function() {
    body.style.direction = body.style.direction === "rtl" ? "ltr" : "rtl";
})



//Validation//

let alertRedInput = "#8C1010";
let defaultInput = "rgba(10, 180, 180, 1)";

function firstNameValidation(firstnameInput) {
    let firstname = document.getElementById("firstname");
    let issueArr = [];

    if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/1234567890]/.test(firstnameInput)) {
        issueArr.push("No special characters!");
    }
    if (issueArr.length > 0) {
        firstname.setCustomValidity(issueArr);
        firstname.style.borderColor = alertRedInput;
    } else {
        firstname.setCustomValidity("");
        firstname.style.borderColor = defaultInput;
    }
}

function lastNameValidation(lastnameInput) {
    let lastname = document.getElementById("lastname");
    let issueArr = [];

    if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/1234567890]/.test(lastnameInput)) {
        issueArr.push("No special characters!");
    }
    if (issueArr.length > 0) {
        lastname.setCustomValidity(issueArr);
        lastname.style.borderColor = alertRedInput;
    } else {
        lastname.setCustomValidity("");
        lastname.style.borderColor = defaultInput;
    }
}


function phoneValidation(phoneInput) {
    let phone = document.getElementById("phone");
    let issueArr = [];
    if (!/^\d{10}|\d{15}$/.test(phoneInput)) {
        issueArr.push("Phone must be between 10-15 numbers.");
    }
    if (issueArr.length > 0) {
        phone.setCustomValidity(issueArr.join("\n"));
        phone.style.borderColor = alertRedInput;
    } else {
        phone.setCustomValidity("");
        phone.style.borderColor = defaultInput;
    }
}


function passwordValidation(passwordInput) {
    let password = document.getElementById("password");
    let issueArr = [];
    if (!/^.{7,15}$/.test(passwordInput)) {
        issueArr.push("Password must be between 7-15 characters.");
    }
    if (!/\d/.test(passwordInput)) {
        issueArr.push("Must contain at least one number.");
    }
    if (!/[a-z]/.test(passwordInput)) {
        issueArr.push("Must contain a lowercase letter.");
    }
    if (!/[A-Z]/.test(passwordInput)) {
        issueArr.push("Must contain an uppercase letter.");
    }
    if (issueArr.length > 0) {
        password.setCustomValidity(issueArr.join("\n"));
        password.style.borderColor = alertRedInput;
    } else {
        password.setCustomValidity("");
        password.style.borderColor = defaultInput;
    }
}