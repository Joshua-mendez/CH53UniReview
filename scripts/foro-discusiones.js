let selectedRating = 0;
const listComments= document.getElementById("list-comments")

function addItem(item) {
  const rating = item.stars || 0;
  let starsHTML = '';

  for (let i = 1; i <= 5; i++) {
    starsHTML += `<span class="star ${i <= rating ? 'selected' : ''}" data-value="${i}">&#9733;</span>`;
  }
    
    listComments.insertAdjacentHTML ("afterbegin",`<div class="card mb-3"><div class="card-body d-flex">
  <img src="${item.img}" class="rounded-circle me-3" alt="Foto de usuario" width="60" height="60">
  <div>
    <h4 class="card-title mb-1">${item.username} </h5>
    <h6 class="card-subtitle mb-2 text-muted"> ${item.degree} </h6>
   <div class="d-flex align-items-center mb-2">
            <h6 class="card-subtitle text-muted mb-0 me-2">${item.date}</h6>
            <div class="rating d-flex static-rating">
              ${starsHTML}
            </div>
          </div>
    <p class="card-text"> ${item.message}</p>
  </div>
</div>`);

}

const interactiveStars = document.querySelectorAll(".interactive-rating .star");
interactiveStars.forEach(star => {
  star.addEventListener("mouseover", function () {
    highlightStars(interactiveStars, this.dataset.value);
  });

  star.addEventListener("mouseout", function () {
    highlightStars(interactiveStars, selectedRating);
  });

  star.addEventListener("click", function () {
    selectedRating = this.dataset.value;
    // Puedes guardar o mostrarlo donde quieras
    console.log("Seleccionaste: ", selectedRating);
  });
});

function highlightStars(stars, rating) {
  stars.forEach(star => {
    star.classList.remove("selected");
    if (star.dataset.value <= rating) {
      star.classList.add("selected");
    }
  });
}

//Objeto 1
addItem({
    'username': 'Maru.97',
    'img': './assets/profile-pictures/user-2.webp',
    'degree': 'Ing. TIC’s / TecNM Reynosa',
    'stars': 4,
    'message': 'Mi experiencia estudiando Ing. TICs en el Tec de Reynosa fue buena en general, el temario fue completo, se vieron temas desde programación, soporte técnico y fundamentos de redes. Lo único a considerar es la asistencia de los profesores y la atención individual que brindan, ya que la mayoría no cuenta con la apertura para salirse del temario para explicar otras dudas técnicas que no forman parte del plan de retícula.',
    'date': '29-04-2025'
});
//Objeto 2
addItem({
    'username': 'Itzel.Annet',
    'img': './assets/profile-pictures/user-3.webp',
    'degree': 'Ing. Telemática / UPIITA,  IPN',
    'stars': 3,
    'message': 'La carrera puede resultar demandante, ya que abarca una amplia variedad de temas relacionados con las telecomunicaciones. Entre ellos se encuentran el estudio de señales AM y FM, antenas, conexión de redes y los distintos protocolos de Internet. Además, se incluyen asignaturas de programación, siempre orientadas al ámbito de las telecomunicaciones. Es importante mencionar que las matemáticas tienen un papel fundamental a lo largo de los cinco años de estudio, por lo que, si no existe afinidad por esta área, podría no ser la opción más adecuada. Asimismo, el conocimiento del idioma inglés representa una herramienta valiosa, ya que gran parte de los libros y referencias técnicas se encuentran en este idioma. Comprenderlo facilita el aprendizaje y la comprensión de los conceptos relacionados con las telecomunicaciones.',
    'date': '25-03-2025'
});
//Objeto 3
addItem({
    'username': 'Samantha9705',
    'img': './assets/profile-pictures/user-5.webp',
    'degree': 'Comunicación y Periodismo (UNAM)',
    'stars': 2,
    'message': 'La ubicación de Fes Aragón no es la mejor, pero tiene el plan de estudios más actualizado del área. Los primeros semestres son de teoría, pero en su mayoría la carrera es muy práctica. Antes de titularse, tienes la opción de elegir el área profesional que quieres (prensa, radio, tv). Si eres sociable y te gusta saber de todo un poco, la recomiendo 100%. ¡También diría que es una carrera que necesita amor a la profesión, si solo te llama un poco la atención, piensa dos veces tu decisión! ',
    'date': '18-03-2025'
});
//Objeto 4
addItem({
    'username': 'Diego.Angeles3',
    'img': './assets/profile-pictures/user-1.webp',
    'degree': 'Arquitectura/Facultad de Arquitectura (UNAM)',
    'stars': 4,
    'message': 'La carrera de arquitectura es muy buena, si te gusta la parte de las matemáticas, el diseño, los materiales, la creatividad y sobre todo un compromiso social. La arquitectura te da las herramientas para  crear espacios con un sentido de pertenencia y buscar las opciones más óptimas para hacerlo realidad.',
    'date': '03-03-2025'
});
//Objeto 5
addItem({
    'username': 'Keny.Gtz',
    'img': './assets/profile-pictures/user-9.webp',
    'degree': 'Ing en Tic´s TecNM Tlahuac II',
    'stars': 4,
    'message': 'La carrera es buena, pues a lo largo de mi formación, el temario fue concreto. La experiencia fue muy enriquecedora porque te enfocan a desarrollar diferentes habilidades, aplicar conocimientos en problemas planteados de casos reales.',
    'date': '22-02-2025'
});
//Objeto 6
addItem({
    'username': 'Joshua.Mendez',
    'img': './assets/profile-pictures/user-4.webp',
    'degree': 'Lic en Educacion Fisica / Escuela Superior de Educacion Fisica',
    'stars': 4,
    'message': 'Es una carrera enfocada en la formación integral de docentes especializados en el movimiento humano, con énfasis en la enseñanza de la actividad física, el deporte y la promoción de estilos de vida saludable, esta licenciatura está dirigida a personas con vocación educativa y gusto por el deporte, trabajo en equipo y promoción del bienestar físico y emocional.',
    'date': '18-02-2025'
});
//Objeto 7
addItem({
    'username': 'Raúl.Ramírez',
    'img': './assets/profile-pictures/user-6.webp',
    'degree': 'Ing. en Mecatrónica / Universidad Tecmilenio',
    'stars': 4,
    'message': 'La carrera es muy buena, y las instalaciones que proporciona la universidad para ello, en ocasiones, son malas. Algunas partes de los laboratorios son inservibles, nunca llegué a usarlos en los 4 años que estudié ahí. Algunos profesores eran muy buenos y se les notaba que les gustaba enseñar, unos otros solo estaban ahí por compromiso y en ocasiones pareciese que no sabían lo que explicaban. Sí, recomiendo la carrera, más no la universidad.',
    'date': '15-02-2025'
});
//Objeto 8
addItem({
    'username': 'Jennifer.González',
    'img': './assets/profile-pictures/user-10.webp',
    'degree': ' Ing. Mecatrónica / IPN',
    'stars': 5,
    'message': 'Mi experiencia en mecatrónica fue buena, los maestros están bien preparados y el temario fue lo que esperaba, lo malo es que solo tienes oportunidad de recursar dos materias a la vez por lo que se debe tener en cuenta si por tema de tiempos o trabajo no puedes llevar ese ritmo de estudio, ya que al igual las materias se aprueban con un mínimo de 8.',
    'date': '12-02-2025'
});
//Objeto 9
addItem({
    'username': 'hugo970500',
    'img': './assets/profile-pictures/user-7.webp',
    'degree': 'Comunicación (UAEM)',
    'stars': 1,
    'message': 'La carrera es muy teórica, el plan de estudios es bueno pero desactualizado.  Fuera de eso, las instalaciones de la universidad son muy buenas, hay oportunidades de poder desarrollarte profesionalmente. Hay que tener en cuenta que la sede de la institución está en Toluca.',
    'date': '3-02-2025'
});
//Objeto 10
addItem({
    'username': 'Mar1392',
    'img': './assets/profile-pictures/user-8.webp',
    'degree': 'Ing en Sistemas Computacionales (IPN)',
    'stars': 4,
    'message': 'La carrera es buena, hay profesores preparados. Es recomendable que tengas carrera técnica en algo similar a sistemas o aprender lo básico antes para que no te sientas desorientado al inicio. La carrera se siente pesada, son 9 semestres, pero vale la pena. Te puedes titular con un proyecto.',
    'date': '28-01-2025'
});

