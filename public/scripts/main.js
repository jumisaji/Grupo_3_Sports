window.addEventListener("load",function(){


    let formulario = document.querySelector("#formulario-register")
    
    formulario.addEventListener("submit", function(event){
        let errores=[]
       let nombre = document.querySelector("input-nombre");
       let apellido = document.querySelector("input-apellido");
       let email = document.querySelector("#input-email");
       let identificacion= document.querySelector("#input-ident");
       let phoneNumber = document.querySelector("#input-phone");
       let Password = document.querySelector("#input-password");
    
       if (nombre.value =="") {
        errores.push("Debe completar este campo")
        
       }else if(nombre.value.length < 2){
        errores.push('El nombre tiene que completarse con un minimo de 2 caracteres')
       }
       if (apellido.value =="") {
        errores.push("Debe completar este campo")
        
       }else if(apellido.value.length < 2){
        errores.push('El apellido tiene que completarse con un minimo de 2 caracteres')
       }
    
       if (email.value =="") {
        errores.push("Debe completar este campo")
        
       } else if (!email.isEmail) {
        errores.push("Debe poner un email valido")
       }
       if (identificacion.value =="") {
        errores.push("Debe completar este campo")
        
       }else if(identificacion.value.length < 4){
        errores.push('El documento tiene que contener minimo 4 caracteres')
       }
       if (phoneNumber.value =="") {
        errores.push("Debe completar este campo")
        
       }
       if (Password.value =="") {
        errores.push("Debe completar este campo")
        
       }else if(Password.value.length < 8){
        errores.push('la contraseña debe tener un minimo de 8 caracteres por seguridad')
       }
    
       if (errores.length > 0) {
        event.preventDefault();
    
    let  losErrores= document.querySelector(".errores ")
        for (let i = 0; i < errores.length; i++) {
            losErrores.innerHTML +="<li>" + errores[i] +"</li>"
    
        }
    
       }
    
    
    
    
    
    
    
    
    
    })
    })
    