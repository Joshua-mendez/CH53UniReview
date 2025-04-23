const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("btnEnviar");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const alertValidaciones = document.getElementById("alertValidaciones");

// function enviarEmail(){
//     emailjs.init("8BlLdWkC8T6g5Fb1i");
// }

// enviarEmail();

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();

    let isValid = true;

    nombre.value = nombre.value.trim();
    correo.value = correo.value.trim();
    telefono.value = telefono.value.trim();
    mensaje.value = mensaje.value.trim();

    const correovalidacion = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
    const telefonovalidacion = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");

    if(nombre.value.length <= 3){
        nombre.style.border="solid medium red";
        alertValidacionesTexto.innerHTML="<strong>Favor de poner tu nombre de forma correcta</strong>";
        alertValidaciones.style.display="block";
        isValid=false;
    }

    if(!correovalidacion.test(correo.value)){
        correo.style.border="solid medium red";
        alertValidacionesTexto.innerHTML="<strong>Favor de insertar un correo Valido</strong>";
        alertValidaciones.style.display="block";
        isValid=false;
    }

    if(!telefonovalidacion.test(telefono.value)){
        telefono.style.border="solid medium red";
        alertValidacionesTexto.innerHTML="<strong>Ingresa un numero de Telefono Valido</strong>";
        alertValidaciones.style.display="block";
        isValid=false;
    }

    if(mensaje.value.length <= 10 || length >= 20){
        mensaje.style.border="solid medium red";
        alertValidacionesTexto.innerHTML="<strong>Minimo 10 Caracteres, maximo 20</strong>";
        alertValidaciones.style.display="block";
        isValid=false;
    }

     if(isValid){
         Swal.fire({
         title: "Mensaje Enviado!",
             icon: "success",
             draggable: true
           });

        //    let formulario = document.getElementById("formContacto");
        //    if(formulario){
        //     emailjs.sendForm('service_qm0r3m8', 'template_v79d4bl', this);
        //    }
          

           document.getElementById("formContacto").reset(); // <- Esto borra los datos
     } 
});
