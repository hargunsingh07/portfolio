document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form1");
    const nameInput = document.getElementById("name");
    const contactInput = document.getElementById("contact");
    const emailInput = document.getElementById("email");

    const nameError = document.getElementById("nameError");
    const contactError = document.getElementById("contactError");
    const contactError1 = document.getElementById("contactError1");
    const emailError = document.getElementById("emailError");
    const emailError1 = document.getElementById("emailError1");

    // Hide all error messages initially
    nameError.style.display = "none";
    contactError.style.display = "none";
    contactError1.style.display = "none";
    emailError.style.display = "none";
    emailError1.style.display = "none";

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nameValue = nameInput.value.trim();
        const contactValue = contactInput.value.trim();
        const emailValue = emailInput.value.trim();

        let isValid = true;

        if (nameValue === "") {
            nameError.style.display = "block";
            nameInput.focus();
            isValid = false;
        }

        if (contactValue === "") {
            contactError.style.display = "block";
            contactInput.focus();
            isValid = false;
        }

        if (!isValidContactNumber(contactValue)) {
            contactError1.style.display = "block";
            contactInput.focus();
            isValid = false;
        }

        if (emailValue === "") {
            emailError.style.display = "block";
            emailInput.focus();
            isValid = false;
        }

        if (!isValidEmail(emailValue)) {
            emailError1.style.display = "block";
            emailInput.focus();
            isValid = false;
        }

        if (!isValid) {
            // Prevent form submission
            return;
        }

        // Submit the form if all validations pass
        window.location.href = "index.html";
    });

    function isValidContactNumber(contact) {
        const contactRegex = /^\d{10}$/;
        return contactRegex.test(contact);
    }
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});