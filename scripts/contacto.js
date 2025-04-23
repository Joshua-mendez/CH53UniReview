const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensajevalidacion");
const btnEnviar = document.getElementById("btnEnviar");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const alertValidaciones = document.getElementById("alertValidaciones");

// function enviarEmail(){
//     emailjs.init("8BlLdWkC8T6g5Fb1i");
// }

// enviarEmail();

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    // nombre.style.border="";
    // correo.style.border="";
    // telefono.style.border="";
    // mensaje.style.border="";
    let isValid = true;

    nombre.value = nombre.value.trim();
    correo.value = correo.value.trim();
    telefono.value = telefono.value.trim();
    mensaje.value = mensaje.value.trim();

    const correovalidacion = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
    const telefonovalidacion = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");

    alertValidacionesTexto.innerHTML = ""; // Limpiar primero
    alertValidaciones.style.display = "none";

    if(nombre.value.length <= 3){
        nombre.style.border="solid medium red";
        alertValidacionesTexto.innerHTML +="<strong>Favor de escribir tu nombre de forma correcta</strong><br/>";
        alertValidaciones.style.display="block";
        isValid=false;
    }

    if(!correovalidacion.test(correo.value)){
        correo.style.border="solid medium red";
        alertValidacionesTexto.innerHTML +="<strong>Favor de ingresar un correo válido</strong><br/>";
        alertValidaciones.style.display="block";
        isValid=false;
    }

    if(!telefonovalidacion.test(telefono.value)){
        telefono.style.border="solid medium red";
        alertValidacionesTexto.innerHTML +="<strong>Ingresa un número de teléfono válido</strong><br/>";
        alertValidaciones.style.display="block";
        isValid=false;
    }

    if(mensaje.value.length < 10 || mensaje.value.length > 20){
        mensaje.style.border="solid medium red";
        alertValidacionesTexto.innerHTML +="<strong>Mínimo 10 Caracteres, máximo 20</strong><br/>";
        alertValidaciones.style.display="block";
        isValid=false;
    }

     if(isValid){
         Swal.fire({
         title: "¡Mensaje Enviado!",
             icon: "success",
             draggable: true
           });

           let formulario = document.getElementById("formContacto");
           emailjs.init("8BlLdWkC8T6g5Fb1i");


         emailjs.sendForm('service_hfue3gs', 'template_v79d4bl', formulario)
           .then(function() {
             console.log('Correo enviado con éxito.');
           }, function(error) {
             console.error('Error al enviar:', error);
           });
       
         formulario.reset();

        //    let formulario = document.getElementById("formContacto");
        //    if(formulario){
        //     emailjs.sendForm('service_qm0r3m8', 'template_v79d4bl', this);
        //    }
          

           //document.getElementById("formContacto").reset(); // <- Esto borra los datos
     } 
});
