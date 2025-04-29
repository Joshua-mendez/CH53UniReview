let selectedRating = 0;
const listComments= document.getElementById("list-comments")

function addItem(item) {
    
    listComments.insertAdjacentHTML ("afterbegin",`<div class="card mb-3"><div class="card-body d-flex">
  <img src="ruta-de-la-foto.jpg" class="rounded-circle me-3" alt="Foto de usuario" width="60" height="60">
  <div>
    <h5 class="card-title mb-1">${item.username} </h5>
    <h6 class="card-subtitle mb-2 text-muted"> ${item.date} </h6>
    <p class="card-text"> ${item.message}</p>
  </div>
</div>`);

}
document.querySelectorAll(".star").forEach(star => {
    star.addEventListener("mouseover", function () {
      highlightStars(this.dataset.value);
    });
  
    star.addEventListener("mouseout", function () {
      highlightStars(selectedRating);
    });
  
    star.addEventListener("click", function () {
      selectedRating = this.dataset.value;
      document.getElementById("rating-value").textContent = "Tu calificación: " + selectedRating;
    });
  });
  function highlightStars(rating) {
    document.querySelectorAll(".star").forEach(star => {
      star.classList.remove("selected");
      if (star.dataset.value <= rating) {
        star.classList.add("selected");
      }
    });
  }

/* <div class="card mb-3">
<div class="card-body d-flex">
  <img src="ruta-de-la-foto.jpg" class="rounded-circle me-3" alt="Foto de usuario" width="60" height="60">
  <div>
    <h5 class="card-title mb-1">Nombre del usuario</h5>
    <h6 class="card-subtitle mb-2 text-muted">Fecha del comentario</h6>
    <p class="card-text">Aquí va el texto del comentario enviado desde el formulario.</p>
  </div>
</div>  */




//Objeto 1
addItem({
    'username': 'Maru.97',
    'degree': 'Ing. TIC’s / TecNM Reynosa',
    'message': 'Mi experiencia estudiando Ing. TICs en el Tec de Reynosa fue buena en general, el temario fue completo, se vieron temas desde programación, soporte técnico y fundamentos de redes. Lo único a considerar es la asistencia de los profesores y la atención individual que brindan, ya que la mayoría no cuenta con la apertura para salirse del temario para explicar otras dudas técnicas que no formen parte del plan de retícula.',
    'date': '29-04-2025'
});
//Objeto 2
addItem({
    'username': 'Itzel.Annet',
    'degree': 'Ing. Telemática / UPIITA,  IPN',
    'message': 'La carrera puede resultar demandante, ya que abarca una amplia variedad de temas relacionados con las telecomunicaciones. Entre ellos se encuentran el estudio de señales AM y FM, antenas, conexión de redes y los distintos protocolos de Internet. Además, se incluyen asignaturas de programación, siempre orientadas al ámbito de las telecomunicaciones.Es importante mencionar que las matemáticas tienen un papel fundamental a lo largo de los cinco años de estudio, por lo que, si no existe afinidad por esta área, podría no ser la opción más adecuada. Asimismo, el conocimiento del idioma inglés representa una herramienta valiosa, ya que gran parte de los libros y referencias técnicas se encuentran en este idioma. Comprenderlo facilita el aprendizaje y la comprensión de los conceptos relacionados con las telecomunicaciones.',
    'date': '25-03-2025'
});
//Objeto 3
addItem({
    'username': 'Samantha9705',
    'degree': 'Comunicación y Periodismo (UNAM)',
    'message': 'La ubicación de Fes Aragon no es la mejor pero tiene el plan de estudios más actualizado del área, los primeros semestres son de teoría pero en su mayoría la carrera es muy práctica. Antes de titularse tienes la opción de elegir el área profesional que quieres (prensa, radio, tv). Si eres sociable y te gusta saber de todo un poco la recomiendo 100%. También diría que es una carrera que necesita amor a la profesión, si solo te llama un poco la atención  piensa dos veces tu decisión! ',
    'date': '18-03-2025'
});
//Objeto 4
addItem({
    'username': 'Diego.Angeles3',
    'degree': 'Arquitectura/Facultad de Arquitectura (UNAM)',
    'message': 'La carrera de arquitectura es muy buena, si te gusta la parte de las matemáticas, el diseño, los materiales, la creatividad y sobre todo un compromiso social. La arquitectura te da las herramientas para  crear espacios con un sentido de pertenencia y buscar las opciones más óptimas para hacerlo realidad.',
    'date': '03-03-2025'
});
//Objeto 5
addItem({
    'username': 'KenyGtz',
    'degree': 'Ing en Tic´s TecNM Tlahuac II',
    'message': 'La carrera es buena, pues a lo largo de mi formación, el temario fue concreto,la experiencia fue muy enriquecedora por que te enfocan a desarrollar diferentes habilidades, aplicar conocimientos en problemas planteados de casos reales.',
    'date': '22-02-2025'
});
//Objeto 6
addItem({
    'username': 'Joshua.Mendez',
    'degree': 'Lic en Educacion Fisica / Escuela Superior de Educacion Fisica',
    'message': 'Es una rarrera enfocada en la formacion integral de docentes especializados en el movimiento humano, con enfasis en la enseñanza de la actividad fisica, el deporte y la promocion de estilos de vida saludable, esta licenciatura esta dirigida a personas con vocacion educativa y gusto por el deporte, trabajo en equipo y promocion del bienestar fisico y emocional',
    'date': '18-02-2025'
});
//Objeto 7
addItem({
    'username': 'Raúl.Ramírez',
    'degree': 'Ing. en Mecatrónica / Universidad Tecmilenio',
    'message': 'La carrera es muy buena, y las instalaciones que proporciona la universidad para ello, en ocasiones es mala, algunas partes de los laboratorios son inservibles, nunca llegué a usarlos en los 4 años que estudié ahí. Algunos profesores eran muy buenos y se les notaba que les gustaba enseñar, unos otros solo estaban ahí por compromiso y en ocasiones pareciese que no sabían lo que explicaban. Sí recomiendo la carrera, mas no la universidad.',
    'date': '15-02-2025'
});
//Objeto 8
addItem({
    'username': 'Jennifer.González',
    'degree': ' Ing. Mecatrónica / IPN',
    'message': 'Mi experiencia en mecatrónica fue buena, los maestros están bien preparados y el temario fue lo que esperaba, lo malo es que sólo tienes oportunidad de recursar dos materias a la vez por lo que se debe tener en cuenta si por tema de tiempos o trabajo no puedes llevar ese ritmo de estudio, ya que al igual las materias se aprueban con un mínimo de 8.',
    'date': '12-02-2025'
});
//Objeto 9
addItem({
    'username': 'Sam970500',
    'degree': 'Comunicación (UAEM)',
    'message': 'La carrera es muy teórica, el plan de estudios es bueno pero desactualizado.  Fuera de eso, las instalaciones de la universidad son muy buenas, hay oportunidades de poder desarrollarte profesionalmente. Hay que tener en cuenta que la sede de la institución está en Toluca.',
    'date': '3-02-2025'
});
//Objeto 10
addItem({
    'username': 'Mar1392',
    'degree': 'Ing en Sistemas Computacionales (IPN)',
    'message': 'La carrera es buena, hay profesores preparados. Es recomendable que tengas carrera técnica en algo similar a sistemas o aprender lo básico antes para que no te sientas desorientado al inicio. La carrera se siente pesada, son 9 semestres pero vale la pena, te puedes titular con un proyecto.',
    'date': '28-01-2025'
});

