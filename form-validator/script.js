const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

// show input error
function showError (input, message) {
  const formControl = input.parentElement

  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message;
}

// show input successs
function showSuccess (input) {
  const formControl = input.parentElement

  formControl.className = 'form-control success' 
}

// check if email is valid
function checkEmail(input){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value)) {
    showSuccess(input)
  } else {
    showError(input, 'Email is not valid')
  }
}

// check password match
function checkPasswordMatch (input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Password do not match')
  }
}

// check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if(!input.value.trim()) {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input)
    }
  })
}

// checkLength

function checkLength (input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`)
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`)
  } else {
    showSuccess(input)
  }
}

// Get field name
function getFieldName (input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Event listener
form.addEventListener('submit', function(e) {
  e.preventDefault()
  
  checkRequired([username, email, password, confirmPassword])
  checkLength(username, 3, 15)
  checkLength(password, 6, 25)
  checkEmail(email)
  checkPasswordMatch(password, confirmPassword)
})
