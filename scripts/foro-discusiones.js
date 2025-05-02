let selectedRating = 0;
const listComments= document.getElementById("list-comments"); //Contenedor para comentarios
const btnPublicar = document.getElementById("btnPublicar"); //Botón publicar
const ratingValue = document.getElementById('rating-value'); //texto de valor de estrellas
//Alerta
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
//Campos de formulario
const txtUser = document.getElementById("txtUser"); //Nombre de usuario
const schoolSelect = document.getElementById("schoolSelect");//Selección de escuela
const careerSelect = document.getElementById("careerSelect");//Selección de carrera
const txtComment = document.getElementById("txtComment"); //Comentario
const charCounter = document.getElementById("charCounter")//contador de limite de caracteres en mensaje

//contador dinámico de caracteres
txtComment.addEventListener('input', () => {

  const longitud = txtComment.value.length;

  charCounter.innerText = `${longitud}/550`;

  if(longitud>=551){
    txtComment.style.border="solid medium red"; //pone en rojo el borde si el comentario es menor a 15
  }

});

//Fecha actual
const isoDate = new Date().toISOString().split('T')[0];

//Funcionalidad de estrellas
const interactiveStars = document.querySelectorAll(".interactive-rating .star");

interactiveStars.forEach(star => {
  star.addEventListener("mouseover", function () {
    highlightStars(interactiveStars, this.dataset.value);
  });

  star.addEventListener("mouseout", function () {
    highlightStars(interactiveStars, selectedRating);
  });

  star.addEventListener("click", function () {
    //Convirtiendo el valor a numero ya que dataset guarda strings
    selectedRating = parseInt(this.dataset.value);
    ratingValue.style.color = "black";
    ratingValue.textContent = `Tu calificación: ${selectedRating}`; // Actualiza el texto dinámicamente
    // Puedes guardar o mostrarlo donde quieras
   // console.log("Seleccionaste: ", selectedRating);
  });
});

function highlightStars(stars, rating) {
  stars.forEach(star => {
    star.classList.remove("selected");
    if (parseInt(star.dataset.value) <= parseInt(rating)) {
      star.classList.add("selected");
    }
  });
}

//Array de todos los comentarios, iniciando por los 10 predefinidos
let allComments = [
  //Objeto 1
{
  'username': 'Maru.97',
  'img': './assets/profile-pictures/user-2.webp',
  'career': 'Ing. TIC’s',
  'school': 'TenNM',
  'stars': 4,
  'message': 'Mi experiencia estudiando Ing. TICs en el Tec de Reynosa fue buena en general, el temario fue completo, se vieron temas desde programación, soporte técnico y fundamentos de redes. Lo único a considerar es la asistencia de los profesores y la atención individual que brindan, ya que la mayoría no cuenta con la apertura para salirse del temario para explicar otras dudas técnicas que no forman parte del plan de retícula.',
  'date': '29-04-2025'
},
//Objeto 2
{
  'username': 'Itzel.Annet',
  'img': './assets/profile-pictures/user-3.webp',
  'career': 'Ing. Telemática',
  'school' : 'IPN',
  'stars': 3,
  'message': 'La carrera puede resultar demandante, ya que abarca una amplia variedad de temas relacionados con las telecomunicaciones. Entre ellos se encuentran el estudio de señales AM y FM, antenas, conexión de redes y los distintos protocolos de Internet. Además, se incluyen asignaturas de programación, siempre orientadas al ámbito de las telecomunicaciones. Es importante mencionar que las matemáticas tienen un papel fundamental a lo largo de los cinco años de estudio, por lo que, si no existe afinidad por esta área, podría no ser la opción más adecuada. Asimismo, el conocimiento del idioma inglés representa una herramienta valiosa, ya que gran parte de los libros y referencias técnicas se encuentran en este idioma. Comprenderlo facilita el aprendizaje y la comprensión de los conceptos relacionados con las telecomunicaciones.',
  'date': '25-03-2025'
},
//Objeto 3
{
  'username': 'Samantha9705',
  'img': './assets/profile-pictures/user-5.webp',
  'career': 'Comunicación y Periodismo',
  'school': 'UNAM',
  'stars': 2,
  'message': 'La ubicación de Fes Aragón no es la mejor, pero tiene el plan de estudios más actualizado del área. Los primeros semestres son de teoría, pero en su mayoría la carrera es muy práctica. Antes de titularse, tienes la opción de elegir el área profesional que quieres (prensa, radio, tv). Si eres sociable y te gusta saber de todo un poco, la recomiendo 100%. ¡También diría que es una carrera que necesita amor a la profesión, si solo te llama un poco la atención, piensa dos veces tu decisión! ',
  'date': '18-03-2025'
},
//Objeto 4
{
  'username': 'Diego.Angeles3',
  'img': './assets/profile-pictures/user-1.webp',
  'career': 'Lic. Arquitectura',
  'school': 'UNAM',
  'stars': 4,
  'message': 'La carrera de arquitectura es muy buena, si te gusta la parte de las matemáticas, el diseño, los materiales, la creatividad y sobre todo un compromiso social. La arquitectura te da las herramientas para  crear espacios con un sentido de pertenencia y buscar las opciones más óptimas para hacerlo realidad.',
  'date': '03-03-2025'
},
//Objeto 5
{
  'username': 'Keny.Gtz',
  'img': './assets/profile-pictures/user-9.webp',
  'career': 'Ing en Tic´s',
  'school' : 'TecNM',
  'stars': 4,
  'message': 'La carrera es buena, pues a lo largo de mi formación, el temario fue concreto. La experiencia fue muy enriquecedora porque te enfocan a desarrollar diferentes habilidades, aplicar conocimientos en problemas planteados de casos reales.',
  'date': '22-02-2025'
},
//Objeto 6
{
  'username': 'Joshua.Mendez',
  'img': './assets/profile-pictures/user-4.webp',
  'career': 'Lic en Educacion Fisica',
  'school' : 'Escuela Superior de Educacion Fisica',
  'stars': 4,
  'message': 'Es una carrera enfocada en la formación integral de docentes especializados en el movimiento humano, con énfasis en la enseñanza de la actividad física, el deporte y la promoción de estilos de vida saludable, esta licenciatura está dirigida a personas con vocación educativa y gusto por el deporte, trabajo en equipo y promoción del bienestar físico y emocional.',
  'date': '18-02-2025'
},
//Objeto 7
{
  'username': 'Raúl.Ramírez',
  'img': './assets/profile-pictures/user-6.webp',
  'career': 'Ing. en Mecatrónica',
  'school' : 'Universidad Tecmilenio',
  'stars': 4,
  'message': 'La carrera es muy buena, y las instalaciones que proporciona la universidad para ello, en ocasiones, son malas. Algunas partes de los laboratorios son inservibles, nunca llegué a usarlos en los 4 años que estudié ahí. Algunos profesores eran muy buenos y se les notaba que les gustaba enseñar, unos otros solo estaban ahí por compromiso y en ocasiones pareciese que no sabían lo que explicaban. Sí, recomiendo la carrera, más no la universidad.',
  'date': '15-02-2025'
},
//Objeto 8
{
  'username': 'Jennifer.González',
  'img': './assets/profile-pictures/user-10.webp',
  'career': ' Ing. Mecatrónica',
  'school' : 'IPN',
  'stars': 5,
  'message': 'Mi experiencia en mecatrónica fue buena, los maestros están bien preparados y el temario fue lo que esperaba, lo malo es que solo tienes oportunidad de recursar dos materias a la vez por lo que se debe tener en cuenta si por tema de tiempos o trabajo no puedes llevar ese ritmo de estudio, ya que al igual las materias se aprueban con un mínimo de 8.',
  'date': '12-02-2025'
},
//Objeto 9
{
  'username': 'hugo970500',
  'img': './assets/profile-pictures/user-7.webp',
  'career': 'Comunicación',
  'school': 'UAEM',
  'stars': 1,
  'message': 'La carrera es muy teórica, el plan de estudios es bueno pero desactualizado.  Fuera de eso, las instalaciones de la universidad son muy buenas, hay oportunidades de poder desarrollarte profesionalmente. Hay que tener en cuenta que la sede de la institución está en Toluca.',
  'date': '3-02-2025'
},
//Objeto 10
{
  'username': 'Mar1392',
  'img': './assets/profile-pictures/user-8.webp',
  'career': 'Ing en Sistemas Computacionales',
  'school' : 'IPN',
  'stars': 4,
  'message': 'La carrera es buena, hay profesores preparados. Es recomendable que tengas carrera técnica en algo similar a sistemas o aprender lo básico antes para que no te sientas desorientado al inicio. La carrera se siente pesada, son 9 semestres, pero vale la pena. Te puedes titular con un proyecto.',
  'date': '28-01-2025'
}];// Array allComments

//Almacenando comentarios en el localStorage como cadena de texto
if (!localStorage.getItem("comments")) {
  localStorage.setItem("comments", JSON.stringify(allComments));
}

//Mostrando localstorage en la página al cargarla
window.addEventListener("load", function(event){
  event.preventDefault();

  //si hay datos en local storage, asignalos al arreglo inicial
  if(this.localStorage.getItem("comments")!=null){
    allComments = JSON.parse(this.localStorage.getItem("comments"));
  }
    
  //Ciclo for para recorrer e imprimir el array "allComments" usando la funcion renderComment
  for (let j = 0; j < allComments.length; j++) {
    renderComment(allComments[j]);
  }
 

});//Window load

function renderComment(comment,positionIndicator=0) {//positionIndicator, si es 0 se toma como beforend, si es 1 se toma como afterbegirn
  // Al renderizar las estrellas (convertir rating a número):
  const rating = parseInt(comment.stars) || 0;
  let starsHTML = '';
  for (let i = 1; i <= 5; i++) {
    starsHTML += `<span class="star ${i <= rating ? 'selected' : ''}" data-value="${i}">&#9733;</span>`;
  }
let orderprint="beforeend";
if(positionIndicator==1){
  orderprint="afterbegin";
}
  listComments.insertAdjacentHTML (orderprint,`
    <div class="card mb-3"><div class="card-body d-flex">
      <img src="${comment.img}" class="rounded-circle me-3" alt="Foto de usuario" width="60" height="60">
      <div>
        <h4 class="card-title mb-1">${comment.username}</h4>
        <h6 class="card-subtitle mb-2 text-muted">${comment.career} / ${comment.school}</h6>
        <div class="d-flex align-items-center mb-2">
          <h6 class="card-subtitle text-muted mb-0 me-2">${comment.date}</h6>
          <div class="rating d-flex static-rating">
            ${starsHTML}
          </div>
        </div>
        <p class="card-text">${comment.message}</p>
      </div>
    </div>`);
}//renderComment


//Botón para agregar nuevos comentarios desde el formulario
btnPublicar.addEventListener("click", function(event){
  event.preventDefault();

  //Bandera, al ser true permite agregar los datos a la tabla
  let isValid=true;

  //Limpiando formatos de alerta e input
  schoolSelect.style.border=""; //sin estilo para escuela
  careerSelect.style.border=""; //sin estilo para carrera
  txtComment.style.border=""; //sin estilo para comentario
  txtUser.style.border=""; //sin estilo para usuario

  const validarUsuario = new RegExp("^[a-zA-Z0-9.-]{8,20}$"); //limitacion que debe de tener el nombre de usuario

  alertValidacionesTexto.innerHTML="" //sin mensaje
  alertValidaciones.style.display="none";  //oculto

  txtComment.value = txtComment.value.trim(); //quita espacios vacios al inicio y al final del comentario
  txtUser.value = txtUser.value.trim(); //quita espacios vacios al inicio y al final del nombre de usuario, ES TEMPORAL

  //Validaciones
  if(!validarUsuario.test(txtUser.value)){ //valida que el usuario cumpla parametros de 8-20 carcateres, puede utilizar numeros y/o guiones, puntos.
    txtUser.style.border = "solid medium red";
    alertValidacionesTexto.innerHTML +="<strong> El nombre de usuario debe tener entre 8-20 caracteres, y puede incluir números, así como los caracteres punto (.) y/o guion (-). </strong><br/>";
    alertValidaciones.style.display="block";
    isValid=false;
  }

  if(schoolSelect.value === ""){ //valida que el campo de escuela tengo una opcion.
    schoolSelect.style.border = "solid medium red";
    alertValidacionesTexto.innerHTML +="<strong> Selecciona una opción válida para Escuela. </strong><br/>";
    alertValidaciones.style.display="block";
    isValid=false;
  }

  if(careerSelect.value === ""){//el campo de carrera debe de estar seleccionado
    careerSelect.style.border = "solid medium red";
    alertValidacionesTexto.innerHTML +="<strong> Selecciona una opción válida para Carrera. </strong><br/>";
    alertValidaciones.style.display="block";
    isValid=false;
  }

  if(selectedRating == 0){ // si no contiene una calificacion, cambia el texto y lo pone en rojo
    ratingValue.textContent = "No hay calificación";
    ratingValue.style.color="red";
    alertValidacionesTexto.innerHTML +="<strong> No se ingresó una calificación. </strong><br/>";
    alertValidaciones.style.display="block";
    isValid=false;
  }

  if(txtComment.value.length <= 15 || txtComment.value.length > 550){ //el comentariodebe de tener minimo 15 caracteres para ser enviado
    txtComment.style.border = "solid medium red";
    charCounter.style.color="red";
    alertValidacionesTexto.innerHTML +="<strong> Tu comentario debe de tener de 15 a 550 caracteres. </strong><br/>";
    alertValidaciones.style.display="block";
    isValid=false;
  }else{
    charCounter.style.color="";
  }

  if(isValid){

    let elemento =  { //Creando OBJETO con notación JSON (clave, valor)
                        "username" : txtUser.value,
                        "img" : "",
                        "career" : careerSelect.value,
                        "school" : schoolSelect.value,
                        "stars" : selectedRating,
                        "message" : txtComment.value,
                        "date": isoDate
                    };
    //Agregando el objeto al inicio del array
    allComments.unshift(elemento);
    //Recargando el array actualizado al local storage
    localStorage.setItem("comments", JSON.stringify(allComments));

    //console.log(elemento);
    // Renderiza el nuevo comentario
    renderComment(elemento,1);

    //Alerta -> Se subio publicacion 
    Swal.fire({
      title: "Bien!",
      text: "Tu opinión ha sido publicada",
      imageUrl: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2tpdnZ5NXZ6dGF5dzFka296emk2OGd3ZDZrM3NmYmdhbW94NTVnayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10uJ0IFxlCA06I/giphy.gif",
      imageWidth: 240,
      imageHeight: 168,
      imageAlt: "Custom image",
      confirmButtonColor: "#EB5A3C"
    });

    //Limpia los campos después de agregarlos a la tabla
    txtUser.value="";
    schoolSelect.value="";
    careerSelect.value="";
    txtComment.value="";
    

    // Elimina clase 'selected' de todas las estrellas
    interactiveStars.forEach(star => {
    star.classList.remove("selected");
    star.style.color = ""; // Limpia estilos inline si los hay
    });

   // Reinicia calificación seleccionada
    selectedRating = 0;
    ratingValue.textContent = "Tu calificación: 0";

    //Regresa el puntero a el primer campo para seguir escribiendo
    txtUser.focus(); 
}

});



