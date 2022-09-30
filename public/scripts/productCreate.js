


    let formulario = document.querySelector("#createForm")
    
    formulario.addEventListener("submit", function(event){
        let errores=[]
        let name = document.querySelector("#name");
        let price = document.querySelector("#price");
        let image = document.querySelector("#image");
        let description = document.querySelector("#description");

        

        if (name.value =="" || name.value == null) {
            errores.push("el campo del nombre debe estar completo")
           }else if(name.value.length < 5){
            errores.push('El nombre del producto tiene que tener minimo de 5 caracteres')
           }
        if (price.value == "" || price.value == null){
            errores.push("el campo del precio debe estar completo")
           }
        if (!image.value){
            errores.push("Debe subir una imagen")
        }else if(locals.errors && errors.image){
            return errors.image.msg
        }
        if (description.value == "" || description.value == null){
            errores.push("el campo de la descripcion debe estar completo")
        }else if(description.value.length < 20){
            errores.push('La descripción del producto tiene que tener mínimo de 20 caracteres')
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
 