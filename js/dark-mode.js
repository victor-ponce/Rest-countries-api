const btnDark = document.querySelector('.btn-dark-mode');

btnDark.addEventListener('click', () => {
    console.log('diste click')
    document.body.classList.toggle('dark-mode');

    if (document.body.className === 'dark-mode') {
        btnDark.innerHTML = `
        <i class="fa-regular fa-moon"></i>
        Dark Mode
        `
    } else {
        btnDark.innerHTML = `
        <i class="fa-regular fa-sun"></i>
        Light Mode
        `
    }
})