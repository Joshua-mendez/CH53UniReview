const txtDatosUsuario = document.getElementById("datos-usuario");
const tablaDatos = document.getElementById("tabla-datos");
const fotoPerfil = document.getElementById("fotoPerfil");

//DOM de Tabla
const tdNombreLS = document.getElementById("tdNombreLS");
const tdCorreoLS = document.getElementById("tdCorreoLS");
const tdTelefonoLS = document.getElementById("tdTelefonoLS");
const tdFechaNacimientoLS = document.getElementById("tdFechaNacimientoLS");

//Obteniendo información de Local Storage
const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};

//Si no hay elemento en current user
if(Object.keys(currentUser).length === 0){
  const loginReminder = document.getElementById("loginReminder");
  document.getElementById("mainContent").style.display = "none";
  loginReminder.style.display = "block";
}

// Actualizando los campos
tdNombreLS.innerText = currentUser.userName || "";
tdCorreoLS.innerText = currentUser.userEmail || "";
tdTelefonoLS.innerText = currentUser.userTel || "";
tdFechaNacimientoLS.innerText = currentUser.userDateBirth || "";

// Imagen de perfil
fotoPerfil.src = currentUser.userPP || "./assets/profile-pictures/blank-pp.webp";


txtDatosUsuario.innerHTML = "";
txtDatosUsuario.insertAdjacentHTML("afterbegin", 
    `<div>
        <h3>${currentUser.userName || ""}</h3>
        <h5>${currentUser.userEmail || ""}</h5>
    </div>`);

//Uso de Cloudinary en overlay de foto de perfil
document.querySelector('.foto-overlay').addEventListener('click', function () {
  cloudinary.openUploadWidget({
    cloudName: 'dnnna4gud',
    uploadPreset: 'profile-pictures-unireview',
    sources: ['local', 'url', 'camera'],
    cropping: true,
    multiple: false,
    // folder: 'usuarios/fotos-perfil',
    resourceType: 'image'
  }, (error, result) => {
    if (!error && result && result.event === "success") {
        //console.log("no ocurrio un error")
      const imageUrl = result.info.secure_url;
      document.getElementById('fotoPerfil').src = imageUrl;
        // Actualiza la imagen mostrada
        fotoPerfil.src = imageUrl;
        //Ejecuta el metodo para actualizar la foto de perfil con la imageUrl como parametro
        actualizaLocalStorage(imageUrl);
    }
  });
});

function actualizaLocalStorage(imageUrl){
  // Modifica directamente el currentUser existente con la url obtenida
  currentUser.userPP = imageUrl;
  //Se coloca en el local storage el item actualizado
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  //Actualizando el local storage de users para que guarde la foto
  const allUsers = JSON.parse(localStorage.getItem("users")) || [];
  //Iterando por todos los usuarios 
  for(let i=0; i<allUsers.length; i++){
    // console.log("Recorro el arreglo");
    if(allUsers[i].userEmail.toLowerCase() === currentUser.userEmail.toLowerCase()){
      //console.log("Entro en condicion");
      allUsers[i].userPP = imageUrl;
      break;
    }//if email matches
  }//for allUsers
  //Asignando el arreglo actualizado al local storage
  localStorage.setItem("users", JSON.stringify(allUsers));

  const allComents = JSON.parse(localStorage.getItem("comments")) || [];
  //Iterando por todos los comentarios 
  for(let j=0; j<allComents.length; j++){
    //console.log("Recorro el arreglo");
    if(allComents[j].username.toLowerCase() === currentUser?.userEmail?.split("@")[0]){
      //console.log("Entro en condicion");
      allComents[j].img = imageUrl;
    }//if email matches to username in comments
  }//for allUsers
  //Asignando el arreglo actualizado al local storage
  localStorage.setItem("comments", JSON.stringify(allComents));

  //ACTUALIZANDO IMAGENES DE LA LISTA DE COMENTARIOS DEL DOM
  let listaImagenes = document.getElementsByClassName("perfil-comentario-img");
  for(let i=0; i< listaImagenes.length; i++){
    listaImagenes[i].src =  imageUrl ||  "./assets/profile-pictures/blank-pp.webp"; 
  }
}
// HISTORIAL DE COMENTARIOS EN PERFIL

// Contenedor donde se colocarán los comentarios
const historialContenedor = document.getElementById("historialComentarios");

// Si hay comentarios en localStorage
const allComments = JSON.parse(localStorage.getItem("comments")) || [];

// Nombre de usuario basado en su correo (antes del @)
const currentUserUsername = currentUser.userEmail?.split("@")[0] || "";

// Filtramos solo los comentarios del usuario actual
const comentariosUsuario = allComments.filter(comentario => comentario.username === currentUserUsername);

// Si hay comentarios, renderízalos
if (comentariosUsuario.length > 0) {
comentariosUsuario.forEach(comment => {
  const rating = parseInt(comment.stars) || 0;
  let starsHTML = "";
  for (let i = 1; i <= 5; i++) {
    starsHTML += `<span class="star ${i <= rating ? 'selected' : ''}" data-value="${i}">&#9733;</span>`;
  }

  // Crea el nodo desde string
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = `
    <div class="card mb-3 comentario-card p-3">
      <div class="d-flex justify-content-between comentario-contenido flex-column flex-md-row">
        <div class="d-flex flex-column flex-md-row">
          <img src="${comment.img}" class="rounded-circle me-md-3 mb-2 mb-md-0 perfil-comentario-img" alt="Foto de usuario" width="60" height="60" style="object-fit: cover;">
          <div>
            <h4 class="card-title mb-1">${comment.username}</h4>
            <h6 class="card-subtitle mb-2 text-muted">${comment.career} / ${comment.school}</h6>
            <div class="d-flex align-items-center mb-2">
              <h6 class="card-subtitle text-muted mb-0 me-2">${comment.date}</h6>
              <div class="rating d-flex static-rating">${starsHTML}</div>
            </div>
            <p class="card-text mb-0">${comment.message}</p>
          </div>
        </div>
        <div class="eliminar-contenedor mt-2 mt-md-0">
          <button class="btn btn-sm btn-outline-danger btnEliminarComentario w-100 w-md-auto" data-fecha="${comment.date}" data-mensaje="${comment.message}">
            <i class="bi bi-trash me-1"></i>Eliminar
          </button>
        </div>
      </div>
    </div>`;

  const commentNode = tempDiv.firstElementChild;
  historialContenedor.appendChild(commentNode);

  // Asignar evento justo después de insertarlo
  const btn = commentNode.querySelector('.btnEliminarComentario');
  btn.addEventListener("click", function () {
    const fecha = this.dataset.fecha;
    const mensaje = this.dataset.mensaje;

    Swal.fire({
      title: '¿Eliminar comentario?',
      text: 'Esta acción no se puede revertir.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EB5A3C',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        let comentarios = JSON.parse(localStorage.getItem("comments") || "[]");
        comentarios = comentarios.filter(c => !(c.date === fecha && c.message === mensaje));
        localStorage.setItem("comments", JSON.stringify(comentarios));

        const card = this.closest(".comentario-card") || this.closest(".card");
        if (card) card.remove();

        Swal.fire({
          title: 'Eliminado',
          text: 'Tu comentario ha sido eliminado.',
          icon: 'success',
          confirmButtonColor: '#EB5A3C'
        });
        const tempDiv = document.createElement('divNoHayComentarios');
        tempDiv.insertAdjacentHTML("afterbegin", 
          `<p class="text-muted">Aún no has realizado ningún comentario. Ve a la página de Foro para compartir tus experiencias.</p>`
        );
        historialContenedor.appendChild(tempDiv);
      }
    });
  });
});
}else{
  const tempDiv = document.createElement('divNoHayComentarios');
  tempDiv.insertAdjacentHTML("afterbegin", 
    `<p class="text-muted">Aún no has realizado ningún comentario. Ve a la página de Foro para compartir tus experiencias.</p>`
  );
  historialContenedor.appendChild(tempDiv);
  
}