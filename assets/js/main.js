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
    // ==========================================
    // Milestone 3: Live FAQ Real-Time Search Filter
    // ==========================================
    const faqSearch = document.getElementById("faqSearch");
    const faqItems = document.querySelectorAll(".faq-item");

    if (faqSearch && faqItems.length > 0) {
        faqSearch.addEventListener("input", (event) => {
            const searchQuery = event.target.value.toLowerCase().trim();

            faqItems.forEach((item) => {
                // Fetch text layers inside the card container
                const questionText = item.querySelector("h5").textContent.toLowerCase();
                const answerText = item.querySelector("p").textContent.toLowerCase();

                // Check if the query matches either the question or answer text
                if (questionText.includes(searchQuery) || answerText.includes(searchQuery)) {
                    item.style.display = "block"; // Show matching item
                    item.style.opacity = "1";
                } else {
                    item.style.display = "none";  // Hide non-matching item
                }
            });
        });
    }
    // ==========================================
    // FEATURE 3: Dynamic Footer Auto-Copyright Year
    // ==========================================
    const copyrightElement = document.querySelector("footer p");
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.innerHTML = `&copy; ${currentYear} Apex Digital Solutions. All Rights Reserved.`;
    }
    // ==========================================
    // FEATURE 4: Dynamic Injectable Scroll to Top
    // ==========================================
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerHTML = "&uarr;";
    scrollTopBtn.id = "scrollTopBtn";
    
    // Applying structural styling properties directly via JavaScript
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        display: none;
        background-color: #0d9488;
        color: #ffffff;
        border: none;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    `;
    
    document.body.appendChild(scrollTopBtn);

    // Toggle button visibility based on vertical scroll position
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    // Smooth scroll execution on interaction
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});
/**
/**
 * Global Contrast Enforcement Engine - Final Revision
 */
document.addEventListener("DOMContentLoaded", function() {
    // 1. Fix Home and Contact pages
    const darkTextPhrases = ["Why partner with us", "Reliability", "Expert Design", "Request a Consultation", "Core Objective"];
    document.querySelectorAll("section, div, .card, form").forEach(container => {
        if (container.textContent && !container.textContent.includes("Our Story")) {
            darkTextPhrases.forEach(phrase => {
                if (container.textContent.includes(phrase)) {
                    container.style.setProperty("color", "#000000", "important");
                    container.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, label, small").forEach(el => {
                        el.style.setProperty("color", "#000000", "important");
                    });
                }
            });
        }
    });

    // 2. Fix About page Leader Cards: Force ALL card content to black
    document.querySelectorAll(".card.bg-white").forEach(card => {
        card.style.setProperty("color", "#000000", "important");
        card.querySelectorAll("h5, p, span, small, card-text").forEach(textNode => {
            textNode.style.setProperty("color", "#000000", "important");
        });
    });

    // 3. EXPLICIT PROTECTION: Force Contact Page Header Intro text back to White
    document.querySelectorAll("h1, h2, h3, p, span").forEach(el => {
        if (el.textContent && (el.textContent.includes("Get In Touch") || el.textContent.includes("Have a project in mind"))) {
            el.style.setProperty("color", "#ffffff", "important");
        }
    });
});