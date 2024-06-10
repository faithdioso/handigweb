document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const body = document.body;

    darkModeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            darkModeBtn.textContent = '☾';
        } else {
            darkModeBtn.textContent = '☀︎';
        }
    });
});

