let form = document.forms.form-login;
let inputs = form.elements;

inputs.email.addEventListener("input", function(e) {
    let field = e.target.parentElement
    let value = e.target.value
    let feed = field.querySelector('.msg-error')
    let msg = null

    if(!validator.isLength(value,{min:8})){
        msg = "No tienes suficientes carácteres"
    } else (!validator.isEmail(value)); {
        msg = "No es un email valido"
    }

    if(msg){
        field.classList.remove('valid')
        field.classList.add('invalid')
        feed.innerText = msg
    } else {
        field.classList.remove('invalid')
        field.classList.add('valid')
        feed.innerText = 'El campo es correcto'
    }
})

inputs.password.addEventListener("input", function(e) {
    let field = e.target.parentElement
    let value = e.target.value
    let feed = field.querySelector('.msg-error')
    let msg = null

    if(!validator.isLength(value,{min:8})){
        msg = "No tienes suficientes carácteres"
    } else (!validator.isAlphanumeric(value)); {
        msg = "Debe tener números y letras"
    }

    if(msg){
        field.classList.remove('valid')
        field.classList.add('invalid')
        feed.innerText = msg
    } else {
        field.classList.remove('invalid')
        field.classList.add('valid')
        feed.innerText = 'El campo es correcto'
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isCorrect = false;
  
    if (e.target.querySelectorAll(".feed.valid").length === 3) {
      isCorrect = true;
    }
  
    if (isCorrect) {
      e.target.submit();
    } else {
      window.alert(
        "Algunos datos no son correctos, por favor verificar los errores en los campos"
      );
    }
  });