let formulario = document.querySelector("#form-login")
    
formulario.addEventListener("submit", function(event){
    let errores=[]
   let email = document.querySelector("#input-email");
   let Password = document.querySelector("#input-password");
    const regexEmail = /^([A-Za-z0-9-+.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/;

   

   if (email.value =="" || email.value == null) {
    errores.push("el campo del email debe estar completo")
    
   } else if (!regexEmail.test(email.value)) {
    errores.push("Debe poner un email valido")
   }
   if (Password.value =="" || Password.value == null) {
    errores.push("el campo de la contraseña debes estar completo")
    
   }else if(Password.value.length < 8){
    errores.push('la contraseña debe tener un minimo de 8 caracteres por seguridad')
   }

   if (errores.length > 0) {
    event.preventDefault();

let  losErrores= document.querySelector(".errores ul ")
losErrores.innerHTML= null
        for (let i = 0; i < errores.length; i++) {
        losErrores.innerHTML +="<li>" + errores[i] +"</li>"

    }

   }

})
