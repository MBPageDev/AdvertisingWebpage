function verifyAge() {
    const birthdate = document.getElementById('birthdate').value;
    const errorMessage = document.getElementById('error-message');
    
    if (!birthdate) {
        errorMessage.textContent = "Please enter your birthdate.";
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    const dayDiff = today.getDate() - birthDateObj.getDate();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    if (age >= 18) {
        // Redirect to the desired page
        window.location.href = "homepage.html"; // Replace with the actual page
    } else {
        errorMessage.textContent = "You must be 18 or older to enter.";
    }
}