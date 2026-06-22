/* 
 * Apex Digital Solutions - Main Interactivity Script
 * Milestone 2: Dynamic Form Validation
 */

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    // Check if the form exists on the current page
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            // Prevent the standard browser page reload refresh
            event.preventDefault();

            // Fetch input values
            const fullName = document.getElementById("fullName").value.trim();
            const emailAddress = document.getElementById("emailAddress").value.trim();
            const userMessage = document.getElementById("userMessage").value.trim();

            // Simple validation check
            if (fullName === "" || emailAddress === "" || userMessage === "") {
                alert("Please fill in all required fields before submitting.");
                return;
            }

            // Email format verification regex layout
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailAddress)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Success feedback simulation
            alert(`Thank you, ${fullName}! Your consultation request has been successfully sent. Our engineering team will review your details shortly.`);
            
            // Reset form fields
            contactForm.reset();
        });
    }
});