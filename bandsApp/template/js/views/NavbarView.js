import * as User from "../models/UserModel.js";

function navbarView() {
  User.init();

  // CONSTRUIR CONTEÚDO DA NAVBAR (VERIFICAR SE USER AUTENTICADO)
  let result = `
      <a class="navbar-brand ml-2" href="../index.html">
        <img src="/img/logo.png" style="width: 100px; height:56px"/>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">            
  `;

  if (User.isLogged()) {
    result += `<a id="btnAddBand" class="nav-link" href="html/bandAdd.html">Add band</a>
                    <!-- Descrição do utilizador autenticado -->
                    <div id="authButtons" class="ms-auto m-1">
                        Olá <a href="#">${User.getUserLogged().username}</a>
                        <button id="btnLogout" class="btn btn-outline-success m-2 my-sm-0">
                            Logout
                        </button>
                    </div>
                `;
  } else {
    result += `  
                    
                    <!-- Botão para ativar a janela modal de login -->
                    <div id="authButtons" class="ms-auto m-1">                    
                        <button class="btn btn-outline-success m-1" data-bs-toggle="modal" data-bs-target="#mdlLogin">
                            Login
                        </button>
                        <button class="btn btn-outline-success m-1" data-bs-toggle="modal" data-bs-target="#mdlRegister">
                            Register
                        </button>                
                    </div>          
                      
                `;
  }
  result += `</div>`;

  // INJETAR CONTEÚDO NA NAVBAR
  document.querySelector("nav").innerHTML = result;

}

function displayMessage(modal, message, type) {
  const divMessage = document.getElementById(modal);
  divMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  setTimeout(() => {
    divMessage.innerHTML = "";
  }, 2000);
}

navbarView();
