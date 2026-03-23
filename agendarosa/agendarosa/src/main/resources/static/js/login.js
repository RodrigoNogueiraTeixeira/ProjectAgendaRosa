// 1) Alterna entre mostrar e ocultar a senha.
var campoSenha = document.getElementById("senha");
var botaoSenha = document.getElementById("botao-mostrar-senha");

function alternarSenha() {

  if (!campoSenha || !botaoSenha) {
    return;
  }

  if (campoSenha.type === "password") {
    campoSenha.type = "text";
    // textContent: altera o texto exibido dentro do botao.
    botaoSenha.textContent = "Oculta";
    botaoSenha.setAttribute("aria-label", "Ocultar senha");
  } else {
    campoSenha.type = "password";
    // textContent: altera o texto exibido dentro do botao.
    botaoSenha.textContent = "Mostrar";
    botaoSenha.setAttribute("aria-label", "Mostrar senha");
  }
}

if (botaoSenha) {
  // addEventListener: escuta o clique e executa a funcao alternarSenha.
  botaoSenha.addEventListener("click", alternarSenha);
}

// 2) Atualiza o texto de orientacao conforme o perfil escolhido.
var seletorPerfil = document.getElementById("perfil");
var campoInformacao = document.getElementById("informacao");


function atualizarInfoPerfil() {
  if (!seletorPerfil || !campoInformacao) {
    return;
  }

  var perfil = seletorPerfil.value;
  var texto = "Selecione um perfil para visualizar os campos necessarios.";

  if (perfil === "cliente") {
    texto = "Cliente: entre com email/usuario e senha cadastrados.";
  } else if (perfil === "empresa") {
    texto = "Empresa/Profissional: use o acesso da conta profissional.";
  } else if (perfil === "administrador") {
    texto = "Administrador: informe as credenciais de administracao.";
  }

  campoInformacao.textContent = texto;
}

if (seletorPerfil) {
  // addEventListener: escuta mudanca no select e executa atualizarInfoPerfil.
  seletorPerfil.addEventListener("change", atualizarInfoPerfil);
}

// Executa uma vez ao carregar a pagina para exibir o texto inicial.
atualizarInfoPerfil();
