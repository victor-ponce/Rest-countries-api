const flags = document.getElementById('flags')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)

document.addEventListener("DOMContentLoaded", e => {
  fetchData()
})

const fetchData = async () => {
  try {
    const res = await fetch('https://restcountries.com/v2/all')
    const data = await res.json()

    const filterData = data.filter(item => item.name === params)

    ensign(filterData)

  } catch (error) {
    console.log(error)
  }
}

const ensign = data => {
  let elements = ''
  data.forEach(item => {
    elements += `

  <div class="country-modal">
  <a href="index.html"><button class="back btn-dark-mode">Back</button></a>
  <div class="modal">
      <div class="left-modal">
          <img src="${item.flag}">
      </div>
      <div class="right-modal">
          <h1>${item.name}</h1>
          <div class="modal-info">
              <div class="inner-left inner">
              <p>
              <b>Native Name:</b>
              ${item.nativeName}
          </p>
              <p>
                  <b>Population:</b>
                  ${item.population}
                  </p>
                  <p>
                      <b>Region:</b>
                      ${item.region}
                  </p>
                  <p>
                      <b>Subregion:</b>
                      ${item.subregion}
                  </p>
              </div>
              <div class="inner-right inner">
                  <b>Capital:</b>
                  ${item.capital}
                  </p>
                  <p>
                      <b>Top Level Domain:</b>
                      ${item.topLevelDomain.map(elem=>elem)}
                  </p>
                  <p>
                      <b>Currencies:</b>
                      ${item.currencies.map(elem=>elem.name)}
                  </p>  
                  <p>
                  <b>Languages:</b>
                  ${item.languages.map(elem=>elem.name)}
              </p>
              </div>
          </div>
      </div>
  </div>
</div>

  `
  });
  flags.innerHTML = elements
}
