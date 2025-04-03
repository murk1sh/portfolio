// Set up animation delays
const allTitles = document.querySelectorAll('.title');
const totalDuration = 12; // Total animation cycle in seconds
const titleDuration = totalDuration / allTitles.length;

allTitles.forEach((title, index) => {
    title.style.animationDelay = `${index * titleDuration}s`;
});
// You can add more titles dynamically if needed
function toggleMenu() {
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.classList.toggle('menu-active');
}

function navigate(page) {
    // You can add your navigation logic here
    console.log(`Navigating to ${page}`);
    // Example: window.location.href = `${page}.html`;
    
    // Close menu after clicking
    toggleMenu();
}