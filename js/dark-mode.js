const btnDark = document.querySelector('.btn-dark-mode');
const configUser = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = sessionStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.add("dark-mode");
}
else if (currentTheme === 'light') {
  document.body.classList.toggle('light-mode'); /*lineas agregadas*/
}

btnDark.addEventListener('click', () => {
    console.log('diste click')

    document.body.classList.toggle('dark-mode');
    

let theme = "light";

    if (sessionStorage.getItem('theme') === 'light') {
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

function codigoPotencialmenteDefectuoso() {
  debugger; }