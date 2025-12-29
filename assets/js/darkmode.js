const toggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggle.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        toggle.textContent = '🌙';
    }
});