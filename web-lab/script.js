document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.backgroundColor = '#e0f7fa';
        });
        section.addEventListener('mouseout', () => {
            section.style.backgroundColor = '#fff';
        });
    });
});
