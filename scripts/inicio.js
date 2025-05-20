
  const total = 4; // cantidad de tarjetas
  let current = 1;

  setInterval(() => {
    document.getElementById('c' + current).checked = true;
    current++;
    if (current > total) current = 1;
  }, 3000); // cambia cada 3 segundos

  function mostrarTop4Cards() {
     if (!document.getElementById("top4CardsStyle")) {
    const style = document.createElement("style");
    style.id = "top4CardsStyle";
    style.textContent = `
      #top4Cards {
        display: flex;
        justify-content: center;
        gap: 16px;
        flex-wrap: wrap;
        padding: 20px 0;
      }

      .card-section {
        background-color: #fff;
        border: 1px solid #e0e0e0;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        padding: 16px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .card-section:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }

      .interactive-rating {
        font-size: 22px;
        margin-bottom: 12px;
      }

      .star {
        color: #ccc;
        cursor: default;
      }

      .star.selected {
        color: #FFD700;
      }

      .card-title {
        font-weight: bold;
        margin-bottom: 8px;
      }

      .card-text {
        font-size: 0.95rem;
        color: #444;
      }

      .card-footer {
        border-top: 1px solid #eee;
        margin-top: 16px;
        padding-top: 12px;
        background-color: transparent;
      }

      .card-footer img {
        object-fit: cover;
        border: 2px solid #ddd;
      }

      #top4Cards .col {
        flex: 1 1 calc(25% - 16px);
        max-width: calc(25% - 16px);
      }

      @media (max-width: 992px) {
        #top4Cards .col {
          flex: 1 1 calc(50% - 16px);
          max-width: calc(50% - 16px);
        }
      }

      @media (max-width: 576px) {
        #top4Cards .col {
          flex: 1 1 100%;
          max-width: 100%;
        }
      }
    `;
    document.head.appendChild(style);
  }
  const contenedorTop4 = document.getElementById("top4Cards");
  contenedorTop4.innerHTML = ""; // Limpiar antes de volver a insertar

  // Obtener y ordenar los comentarios por calificación
  const comentarios = JSON.parse(localStorage.getItem("comments") || "[]");

  const top4 = comentarios
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 4); // solo los 4 primeros

  top4.forEach(comment => {
    const starsHTML = Array.from({ length: 5 }, (_, i) => {
      return `<span class="star ${i < comment.stars ? 'selected' : ''}" data-value="${i + 1}">&#9733;</span>`;
    }).join("");

    const cardHTML = `
      <div class="col">
        <div class="card-section">
          <div class="card-body">
            <div class="interactive-rating">
              ${starsHTML}
            </div>
            <h5 class="card-title">${comment.career}</h5>
            <p class="card-text">${comment.message.length > 150 ? comment.message.substring(0, 150) + '...' : comment.message}</p>
          </div>
          <div class="card-footer d-flex align-items-center">
            <img src="${comment.img}" class="rounded-circle me-2" alt="${comment.username}" width="40" height="40">
            <div>
              <small class="text-muted">${comment.username}</small><br>
              <small class="text-muted">${comment.date}</small>
            </div>
          </div>
        </div>
      </div>
    `;

    contenedorTop4.insertAdjacentHTML("beforeend", cardHTML);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  mostrarTop4Cards();
});
document.getElementById("btnBuscar").addEventListener("click", function (e) {
  e.preventDefault();

  const inputCarrera = document.getElementById("inputB").value.trim().toLowerCase();
  const comentarios = JSON.parse(localStorage.getItem("comments") || "[]");

  // Filtrar comentarios por coincidencia exacta o parcial de carrera
  const comentariosFiltrados = comentarios.filter(c =>
    c.career.toLowerCase().includes(inputCarrera)
  );

  // Guardar resultados para usarlos en foro.html
  localStorage.setItem("filteredComments", JSON.stringify(comentariosFiltrados));

  // Opcional: guardar la carrera buscada para mostrarla como título
  localStorage.setItem("searchedCareer", inputCarrera);

  // Redirigir a foro de discusión
  window.location.href = "foro-discusiones.html";
});



