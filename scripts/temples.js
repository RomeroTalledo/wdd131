const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


// Script to display current year and last modified date
window.addEventListener('DOMContentLoaded', () => {
    // Show current year in footer
    const yearSpan = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Show last modified date
    const lastModified = document.getElementById('lastModified');
    lastModified.textContent = `Last Modification: ${document.lastModified}`;
});
