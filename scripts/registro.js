const txtName = document.getElementById("txtName");
const txtTel = document.getElementById("txtTel");
const txtEmail = document.getElementById("txtEmail");
const txtPass = document.getElementById("txtPass");
const txtConfirmPass = document.getElementById("txtConfirmPass");
const btnSubmit = document.getElementById("btnSubmit");


//Fecha actual(obtiene la fecha del registro)
const isoDate = new Date().toISOString().split('T')[0];

//Array de nuevos usuarios
let allUsers = [];
//Almacenando usuarios en el localStorage como cadena de texto

if (!localStorage.getItem("users")) {

    localStorage.setItem("users", JSON.stringify(allUsers));
  }

  btnSubmit.addEventListener("click", function(event){
    event.preventDefault();

    let isValid = true;

    if(isValid){
        let currentUser = {
            "userName" : txtUserName.value,
            "userTel" : txtUserTel.value,
            "userEmail" : txtUserEmail.value,
            "userPass" : txtUserPass.value,
        }

        allUsers.unshift(currentUser);
        localStorage.setItem("users", JSON.stringify(allUsers));
        //SwetAlert2 
        Swal.fire({
            title: "Ususario Registrado",
            text: "Serás redirigido a la página principal",
            icon: "success",
            iconColor: "#EB5A3C",
            confirmButtonColor: "#EB5A3C"
          });
    };

    window.addEventListener("load", function(event){
        event.preventDefault();
      
      
       
      
      });//Window load

  });

