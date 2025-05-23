

//  new Glider(document.getElementById('glider-personas'), {
//       slidesToShow: 2,
//       slidesToScroll: 1,
//       draggable: true,
//       arrows: {
//         prev: '.glider-prev',
//         next: '.glider-next'
//       },
//       responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 3
//           }
//         },
//         {
//           breakpoint: 992,
//           settings: {
//             slidesToShow: 4
//           }
//         }
//       ]
//     });

//     // Datos de las personas
//     const personas = [
//       { nombre: "Ana López", descripcion: "Diseñadora UX con 5 años de experiencia." },
//       { nombre: "Carlos Méndez", descripcion: "Desarrollador Full Stack apasionado por Vue.js." },
//       { nombre: "Lucía Torres", descripcion: "Product Manager experta en metodologías ágiles." }
//     ];

//     function mostrarInfo(index) {
//       const persona = personas[index];
//       document.getElementById("nombre").textContent = persona.nombre;
//       document.getElementById("descripcion").textContent = persona.descripcion;
//       document.getElementById("infoBox").style.display = "block";
//     }

//     function cerrarInfo() {
//       document.getElementById("infoBox").style.display = "none";
//     }



const personas = [
  {
    nombre: "María Luisa Montes Ramírez",
    rol: "Miembro SCRUM team",
    bio: "Desarrolladora Java Full Stack con experiencia en el desarrollo de aplicaciones Java, páginas web y API REST; trabajo en equipo, pruebas unitarias, corrección de errores y bases de datos.",
    linkedin: "https://www.linkedin.com/in/maria-luisa-montes",
    github: "https://github.com/marulane"
  },
  {
    nombre: "Samantha García Martínez",
    rol: "Miembro SCRUM team",
    bio: "Soy Samantha García, profesional apasionada por desarrollar soluciones tecnológicas que mejoren la experiencia del usuario. Desarrollo de soluciones escalables y mejora de flujos de trabajo.",
    linkedin: "https://www.linkedin.com/in/samantha-garcia-m/",
    github: "https://github.com/Samantha9705"
  },
  {
    nombre: "Raúl Ramírez González",
    rol: "Miembro SCRUM team",
    bio: "Desarrollador Java FullStack con formación y experiencia en Ingeniería en Mecatrónica. Nunca pierdo la oportunidad de buscar una solución creativa a los problemas que se presentan día a día.",
    linkedin: "https://www.linkedin.com/in/raúl-ramírez-gonzález-850078196/",
    github: "https://github.com/RaulRamirezGlez-00"
  },
  {
    nombre: "Kenya Nayara Gutierrez",
    rol: "Miembro SCRUM team",
    bio: "Soy Kenya Gutiérrez, desarrolladora Java Full Stack. Mi pasión reside en crear y diseñar interfaces funcionales que den solución a problemáticas y brinden una buena experiencia al usuario.",
    linkedin: "https://www.linkedin.com/in/kenya-gutierrez/",
    github: "https://github.com/Keny-gtz"
  },
  {
    nombre: "Itzel Annet Muñoz Espinosa",
    rol: "Miembro SCRUM team",
    bio: "Desarrolladora Java Full Stack, con experiencia en desarrollo de software, creación y administración de bases de datos, y gestión de redes. Mi compromiso y perseverancia me permiten enfrentar cualquier reto.",
    linkedin: "https://www.linkedin.com/in/itzel-annet-muñoz-espinosa-09a1411bb/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/ItzelAnnet13"
  },
  {
    nombre: "José Diego Ángeles López",
    rol: "Miembro SCRUM team",
    bio: "Soy un desarrollador Java Jr. Apasionado por crear aplicaciones que mejoren la vida de las personas, combino mi experiencia en análisis y resolución de problemas con habilidades de comunicación para lograr un diseño de software claro y funcional.",
    linkedin: "https://www.linkedin.com/in/jose-diego-angeles-lopez/",
    github: "https://github.com/DiegoAngeles3"
  },
  {
    nombre: "Joshua Yurem Mendez Mendoza",
    rol: "Miembro SCRUM teamr",
    bio: "Desarrollador Full Stack interesado en la tecnología, abierto a cualquier tipo de aprendizaje, con pensamiento crítico, adaptable y con una actitud proactiva que me permite anticiparme a los problemas.",
    linkedin: "https://www.linkedin.com/in/joshua-yurem-mendez-mendoza?",
    github: "https://github.com/Joshua-mendez"
  }
];

function mostrarInfo(index) {
  const card = document.getElementById("infoCard");
  const persona = personas[index];
  document.getElementById("name").textContent = persona.nombre;
  document.getElementById("role").textContent = persona.rol;
  document.getElementById("bio").textContent = persona.bio;
  document.getElementById("linkedin").href = persona.linkedin;
  card.classList.remove("d-none");
  card.scrollIntoView({ behavior: "smooth" });
}