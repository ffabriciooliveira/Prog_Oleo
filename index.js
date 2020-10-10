// função para quando for acessar pelo campo USUARIO
function usuario(){

  // Recebendo os dados do HTML, através dos IDs
  var estab = document.getElementById("estab")
  var adm = document.getElementById("adm")
  var entrar = document.getElementById("entrar")
  var esqueciSenha = document.getElementById("esqueciSenha")
  var criarConta = document.getElementById("criarConta")
  var voltar = document.getElementById("voltar")

  // Retornando ao HTML os dados feitos com o JS
  estab.innerHTML = "<input placeholder='E-mail:'></input>"
  adm.innerHTML = "<input type='password' placeholder='Senha:'></input>"
  entrar.innerHTML = "<button> ENTRAR </button>"
  esqueciSenha.innerHTML = "Esqueci minha senha:"
  criarConta.innerHTML = "Criar Conta:"
  voltar.innerHTML = "Voltar"

}

// função para quando for acessar pelo campo ESTABELECIMENTO
function estabelecimento(){

  // Recebendo os dados do HTML, através dos IDs
  var usu = document.getElementById("usu")
  var adm = document.getElementById("adm")
  var entrar = document.getElementById("entrar")
  var senha = document.getElementById("senha_estab_email_adm")
  var esqueciSenha = document.getElementById("esqueciSenha")
  var voltar = document.getElementById("voltar")
  
  usu.innerHTML = ""
  
  // Retornando ao HTML os dados feitos com o JS
  adm.innerHTML = "<input type=text placeholder='E-mail:'></input>"
  senha.innerHTML = "<input type='password' placeholder='Senha:'></input>"
  entrar.innerHTML = "<button> ENTRAR </button>"
  esqueciSenha.innerHTML = "Esqueci minha senha:"
  voltar.innerHTML = "Voltar"

}

// função para quando for acessar pelo campo ADM
function adm(){

  // Recebendo os dados do HTML, através dos IDs
  var usu = document.getElementById("usu")
  var estab = document.getElementById("estab")
  var entrar = document.getElementById("entrar")
  var email = document.getElementById("senha_estab_email_adm")
  var senha = document.getElementById("senha_adm")
  var voltar = document.getElementById("voltar")
  
  usu.innerHTML = "" 
  estab.innerHTML = ""

  // Retornando ao HTML os dados feitos com o JS
  email.innerHTML = "<input placeholder='E-mail:'></input>"
  senha.innerHTML = "<input type='password' placeholder='Senha:'></input>"
  entrar.innerHTML = "<button onclick=''> ENTRAR </button>"
  voltar.innerHTML = "Voltar"

}