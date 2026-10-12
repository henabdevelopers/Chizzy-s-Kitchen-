// ========================================
// CHIZZY'S KITCHEN
// Main JavaScript
// ========================================

// Automatically update the copyright year

const yearElement = document.getElementById("current-year");

if (yearElement) {
yearElement.textContent = new Date().getFullYear();
}

// Log a welcome message in the browser console

console.log("Welcome to Chizzy's Kitchen!");

// ========================================
// MENU CATEGORY FILTERS
// ========================================

const menuFilterButtons = document.querySelectorAll(".menu-filter");
const menuItems = document.querySelectorAll(".menu-item");

menuFilterButtons.forEach(function(button) {

button.addEventListener("click", function() {

    // Get the selected category
    const selectedCategory = button.dataset.category;

    // Update the active button
    menuFilterButtons.forEach(function(filterButton) {
        filterButton.classList.remove("active");
    });

    button.classList.add("active");

    // Show or hide food cards
    menuItems.forEach(function(item) {

        const itemCategory = item.dataset.category;

        if (
            selectedCategory === "all" ||
            selectedCategory === itemCategory
        ) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }

    });

});

});

// ========================================
// RESERVATION FORM DEMONSTRATION
// ========================================

const reservationForm = document.getElementById("reservation-form");
const reservationMessage = document.getElementById("reservation-message");
const reservationDateInput = document.getElementById("reservation-date");

// Get today's date using the visitor's local time
function getLocalDate() {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

// Prevent customers from selecting a date in the past
if (reservationDateInput) {
    reservationDateInput.min = getLocalDate();
}

// Handle reservation form submission
if (reservationForm && reservationMessage) {

    reservationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const chosenDate = reservationDateInput.value;

        if (!chosenDate || chosenDate < getLocalDate()) {

            reservationMessage.hidden = false;
            reservationMessage.textContent =
                "Please choose today or a future date.";

            return;
        }

        reservationMessage.hidden = false;
        reservationMessage.textContent =
            "Your form has passed the demo check! However, your reservation has not been sent or confirmed. The restaurant needs a connected booking system to receive your request.";

    });

}

// ========================================
// CONTACT FORM DEMONSTRATION
// ========================================

const contactForm = document.getElementById("contact-form");
const contactMessageStatus = document.getElementById("contact-message-status");

if (contactForm && contactMessageStatus) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        contactMessageStatus.hidden = false;

        contactMessageStatus.textContent =
            "Thank you for contacting Chizzy's Kitchen! Your form has been checked successfully. However, this is a portfolio demonstration, so your message has not been sent to a real restaurant.";

    });

}