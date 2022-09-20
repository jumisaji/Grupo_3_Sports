


    let formulario = document.querySelector("#formulario-register")
    
    formulario.addEventListener("submit", function(event){
        let errores=[]
       let nombre = document.querySelector("#input-nombre");
       let apellido = document.querySelector("#input-apellido");
       let email = document.querySelector("#input-email");
       let identificacion= document.querySelector("#input-ident");
       let phoneNumber = document.querySelector("#input-phone");
       let Password = document.querySelector("#input-password");
        const regexEmail = /^([A-Za-z0-9-+.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/;
    
       if (nombre.value =="" || nombre.value == null) {
        errores.push("el campo del nombre debe estar completo")
        
       }else if(nombre.value.length < 2){
        errores.push('El nombre tiene que completarse con un minimo de 2 caracteres')
       }
       if (apellido.value =="" || apellido.value == null) {
        errores.push("el campo del apellido debe estar completo")
        
       }else if(apellido.value.length < 2){
        errores.push('El apellido tiene que completarse con un minimo de 2 caracteres')
       }
    
       if (email.value =="" || email.value == null) {
        errores.push("el campo del email debe estar completo")
        
       } else if (!regexEmail.test(email.value)) {
        errores.push("Debe poner un email valido")
       }
       if (identificacion.value =="" || identificacion.value == null) {
        errores.push("el campo de la identificacion debe estar completo")
        
       }else if(identificacion.value.length < 4){
        errores.push('El documento tiene que contener minimo 4 caracteres')
       }
       if (phoneNumber.value =="" || phoneNumber.value == null) {
        errores.push("el campo del celular debe estar completo")
        
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
   
    