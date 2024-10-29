//Selecting Input Fields
const nameValue = document.querySelector("#name-value")
const emailValue = document.querySelector("#email-value")

//Selecting span tag
const nameErr = document.querySelector("#name-error")
const emailErr = document.querySelector("#email-error")

const button = document.querySelector("#btn")

const form = document.querySelector("form")

function nameInputHandler(){
  const name = nameValue.value
  const pattern = /^[A-Za-z]{3,}\s{1}[A-Za-z]{1,}$/

  if(name.length == 0){
    button.disable = true
    nameErr.textContent = "Name is Required"
    return false
  }

  if(!name.match(pattern)){
    button.disable = true
    nameErr.textContent = "Fullname is Required"
    return false
  }

  button.disable = false
  nameErr.innerHTML = `<ion-icon name="checkmark-circle"></ion-icon>`
  return true
}

nameValue.addEventListener("keyup", nameInputHandler)
nameValue.addEventListener("blur", nameInputHandler)


function emailHandler(){
  const email = emailValue.value

  if(email.length == 0){
    button.disable = true
    emailErr.textContent = "Email is Required"
    return false
  }
  if(!email.match(/^[A-Za-z]{2,}[0-9]{3,}\@\w{3,}\.[a-z]{2,3}$/)){
    button.disable = true
    emailErr.textContent = "Email is not Valid"
    return false
  }

  emailErr.innerHTML = `<ion-icon name="checkmark-circle"></ion-icon>`
  button.disable = false
  return true
}

emailValue.addEventListener("keyup", emailHandler)
emailValue.addEventListener("blur", emailHandler)

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    if(!nameInputHandler()){
      return false
    }

    if(!emailHandler()){
      return false
    }
})


