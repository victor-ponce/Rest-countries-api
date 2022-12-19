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
	document.body.classList.toggle('dark');
	btnDark.classList.toggle('active');

	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnDark.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnDark.classList.remove('active');
}
