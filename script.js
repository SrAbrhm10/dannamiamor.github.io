// Archivo opcional para efectos adicionales
document.addEventListener('DOMContentLoaded', (event) => {
    const text = document.querySelector('h1');
    text.style.transition = 'transform 0.5s ease-in-out';
    text.addEventListener('mouseover', () => {
        text.style.transform = 'scale(1.2)';
    });
    text.addEventListener('mouseout', () => {
        text.style.transform = 'scale(1)';
    });
});
