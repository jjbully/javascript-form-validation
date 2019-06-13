const inputs = document.querySelectorAll('input');

const patterns = {
  telephone: /^\d{8}$/,
  username: /^[\w\d]{5,12}$/i,
  password: /^[\w@._-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})?$/
}

// validation
const validate = (field, regex) => {
  if(regex.test(field.value)) {
    field.className = 'valid'
  } else {
    field.className = 'invalid'
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.attributes.name.value])
  })
})