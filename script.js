document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    let fullNameRegex = /^[A-Za-z\s]{6,}$/;
    let mobileNoRegex = /^[789]\d{9}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let usernameRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{10,}$/;
    let passwordRegex =/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
    
    
    let fullName = document.getElementById('fullName').value;
    let mobileNo = document.getElementById('mobileNo').value;
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Full Name validation
    if (!fullNameRegex.test(fullName)) {
        document.getElementById('fullNameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('fullNameError').style.display = 'none';
    }

    // Mobile No validation
    if (!mobileNoRegex.test(mobileNo)) {
        document.getElementById('mobileNoError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('mobileNoError').style.display = 'none';
    }

    // Email validation
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Username validation
    if (!usernameRegex.test(username)) {
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('usernameError').style.display = 'none';
    }

    // Password validation
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('registrationForm').reset();
    }
}
 