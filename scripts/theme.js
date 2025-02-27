const themeButton = document.getElementById('theme');
const body = document.body;


if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    body.classList.remove('light');
    themeButton.textContent = '☽';
} else {
    body.classList.add('light');
    body.classList.remove('dark');
    themeButton.textContent = '☀';
}


themeButton.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        themeButton.textContent = '☽';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        themeButton.textContent = '☀'; 
        localStorage.setItem('theme', 'light');
    }
});