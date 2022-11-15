/*  FORMULARIO */

const form = document.getElementById('form');
const inputForm = document.getElementById('inputForm');

const formRequest = data => {
  form.addEventListener('keyup', e => {
    e.preventDefault()

    const textRequest = inputForm.value.toLowerCase()
    //console.log(textRequest)
    const filteredForm = data.filter(item => {
      const textApi = item.name.toLowerCase()
      if (textApi.indexOf(textRequest) !== -1) {
        return item
      }
    })
    //console.log(filteredForm)
    ensign(filteredForm)
  })
}
