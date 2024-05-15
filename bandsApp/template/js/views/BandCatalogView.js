// BandCatalogView.js


function generateCard(band) {
  let result = ` 
        <div class="col">
            <div class="card mb-3" style="widht: 300px; ">
                <img src="${band.cover}" class="card-img-top" style="height: 300px;">
                <div class="card-body">
                    <h5 class="card-title">${band.name}</h5>
                    <p class="card-text">${band.genre}</p>
                    <button id="${band.name}" class="btn btn-primary view">Ver mais</button>
        `;
  // Só adiciona botão de "Remover" a um utilizador autenticado
  if (User.isLogged()) {
    result += `<button id="${band.name}" class="btn btn-danger remove">Remover</button>`;
  }
  result += ` 
                </div>
            </div>
        </div> `;
  return result;
}