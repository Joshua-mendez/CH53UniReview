const iniciarSesion = document.getElementById("btnLogin");
const registro = document.getElementById("btnRegister");


iniciarSesion.addEventListener("click", function(event){
event.preventDefault();

window.location.href = "./inicio-sesion.html";

});

registro.addEventListener("click", function(event){
  event.preventDefault();
  
  window.location.href = "./registro-usuario.html";
  
});


(function () {
  //console.log("Si entro");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  //console.log(currentUser);
  if (currentUser && currentUser.userEmail) {
    //console.log("Entro en condicion");
    const email = currentUser.userEmail;
    const username = email.split("@")[0];

    // Eliminar enlace de Registro
    const registroItem = document.getElementById("btnRegister");
    const inicioSesion = document.getElementById("btnLogin");
    //console.log(registroItem);
    if (registroItem!=undefined) {
      //console.log("Entro en condicion remove");
      registroItem.remove();
    }
    if (inicioSesion!=undefined) {
      //console.log("Entro en condicion remove");
      inicioSesion.remove();
    }

    const navList = document.querySelector(".navbar-nav");
    if (navList) {
      // Contenedor para usuario + botón
      const userItem = document.createElement("li");
      userItem.classList.add("nav-item", "d-flex", "align-items-center", "gap-2");

      // Mostrar nombre de usuario
      const userNameSpan = document.createElement("span");
      userNameSpan.classList.add("nav-link", "text-warning", "mb-0");
      userNameSpan.textContent = username;

      // Botón cerrar sesión
      const logoutBtn = document.createElement("button");
      logoutBtn.classList.add("btn", "btn-light", "border-danger", "text-danger", "rounded-pill");
      logoutBtn.textContent = "Cerrar sesión";

      // Evento al hacer clic
      logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("currentUser");
        location.href= "./inicio-sesion.html" // Manda a inicio
      });

      // Agregar al navbar
      userItem.appendChild(userNameSpan);
      userItem.appendChild(logoutBtn);
      navList.appendChild(userItem);
    }
  }
})();