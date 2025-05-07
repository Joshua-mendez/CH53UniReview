// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
    if (currentUser && currentUser.userEmail) {
      const email = currentUser.userEmail;
      const username = email.split("@")[0];
  
      // Eliminar enlace de Registro
      const registroItem = document.getElementById("navRegistro");
      if (registroItem) {
        registroItem.remove();
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
          location.reload(); // Recargar página para actualizar menú
        });
  
        // Agregar al navbar
        userItem.appendChild(userNameSpan);
        userItem.appendChild(logoutBtn);
        navList.appendChild(userItem);
      }
    }
  });