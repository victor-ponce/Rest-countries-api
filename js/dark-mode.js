const btnDark = document.querySelector('.btn-dark-mode');
const currentTheme = sessionStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.add("dark-mode");
}

btnDark.addEventListener('click', () => {
    console.log('diste click')

    document.body.classList.toggle('dark-mode');

let theme = "light";

    if (document.body.className === 'dark-mode') {
        btnDark.innerHTML = `
        <i class="fa-regular fa-sun"></i>
        Light Mode
        `
    } 
    
    if (document.body.classList.contains("dark-mode")) {
        theme = "dark";
      }

    else {
        btnDark.innerHTML = `
      <i class="fa-regular fa-moon"></i>
        Dark Mode
        `
    }
    sessionStorage.setItem("theme", theme);  
   
});
