
document.addEventListener("DOMContentLoaded", function () {
    // Display the current year in the footer
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Contact form validation
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    if (!contactForm || !formStatus) {
        return;
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Let the browser check required fields and input formats
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        // Additional checks
        if (name.length < 2) {
            formStatus.textContent =
                "Please enter your full name.";
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formStatus.textContent =
                "Please enter a valid email address.";
            return;
        }

        const phoneDigits = phone.replace(/\D/g, "");

        if (phoneDigits.length < 10) {
            formStatus.textContent =
                "Please enter a phone number with at least 10 digits.";
            return;
        }

        if (message.length < 10) {
            formStatus.textContent =
                "Your message must contain at least 10 characters.";
            return;
        }

        // Display confirmation
        formStatus.textContent =
            "Thank you, " + name +
            "! Your form passed validation.";

        contactForm.reset();
    });
});
