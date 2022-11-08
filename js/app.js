
/*fetchCountries = async () => {
  const response = await fetch('https://restcountries.com/v2/all');
  const myJson = await response.json(); //extract JSON from the http response
  console.log(myJson);
  localStorage['jsonData'] = JSON.stringify(myJson);*/





const flags = document.getElementById('flags')

document.addEventListener("DOMContentLoaded", e => {
  fetchData()
})

const fetchData = async () => {
  try {
    const res = await fetch('https://restcountries.com/v2/all')
    //const res = await fetch('https://restcountries.com/v3.1/all') no jala con la versiòn 3.1, no sè por qué? será la sintaxis?
    const data = await res.json()
    ensign(data)
    formRequest(data)
    filters(data)
  } catch (error) {
    console.log(error)
  }
}

const ensign = data => {
let elements = ''
data.forEach(item => {
  elements += `
  <article class="card">
  <img src="${item.flag}" alt="" class="img-fluid">
  <div class="card-content">
      <h3>${item.name}</h3>
      <p>
          <b>Population:</b>
          ${item.population}
      </p>
      <p>
          <b>Region:</b>
          ${item.region}
      </p>
      <p>
          <b>Capital:</b>
          ${item.capital}
      </p>
      <p>
      <a href="country.html?name=${item.name}">More info</a>
  </p>
  </div>
</article>
  `
});
flags.innerHTML = elements
}

