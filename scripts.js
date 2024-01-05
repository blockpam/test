// Add JavaScript functionality

// Function to toggle a class for animations
function toggleAnimation(elementId, animationClass) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.toggle(animationClass);
    }
}

// Function to handle a click event on the header
function headerClick() {
    toggleAnimation('header', 'bounce');
}

// Add event listeners
document.getElementById('header').addEventListener('click', headerClick);

// You can add more functions and event listeners as needed
