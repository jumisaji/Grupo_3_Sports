window.addEventListener("load",function(){


    let formulario = document.querySelector("#createForm")
    
    formulario.addEventListener("submit", function(event){
        let errores=[]
        let name = document.querySelector("#name");
        let price = document.querySelector("#price");
        let image = document.querySelector("#image");
        let description = document.querySelector("#description");

        let archivos = req.files

        if (name.value =="") {
            errores.push("Debe completar este campo")
           }else if(name.value.length < 5){
            errores.push('El nombre del producto tiene que tener minimo de 5 caracteres')
           }
        if (price.value == ""){
            errores.push("Debe completar este campo")
           }
        if (image.value == null){
            errores.push("Debe subir una imagen")
        }
        if (description.value == ""){
            errores.push("Debe completar este campo")
        }else if(description.value.length < 20){
            errores.push('La descripción del producto tiene que tener mínimo de 20 caracteres')
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