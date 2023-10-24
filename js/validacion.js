//contraseñas iguales
function validacionContrasenia() {
    const pas1 = document.getElementById("password1");
    const pas2 = document.getElementById("password2");

    //console.log(pas2.checkValidity());
    //console.log("pas1: " + pas1.value + "pas2: " + pas2.value);


    if(pas1.checkValidity()){
        if (pas1.value !== pas2.value) {
            pas2.setCustomValidity("Las contraseñas no coinciden");
        }else{
            pas2.setCustomValidity("");
        }
    }
}

function terminosChecked(){

    const terminos = document.getElementById("terminos");
    const divAlert = document.getElementById("alertaTerminos");

    if(!terminos.checked){
        divAlert.innerHTML = `
            <p style="color: #dc3545;">Debe aceptar los términos del servicio.</p>
        `
    }else{
        divAlert.innerHTML = "";
    }
}


document.addEventListener("click", () => {
    validacionContrasenia();
    terminosChecked();
});


//marcado checkbox
//que todas las condiciones se cumplan


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()