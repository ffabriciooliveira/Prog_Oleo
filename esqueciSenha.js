// função para criar nova senha, quando esquecer a senha
function esqueciSenha(){

  // Recebendo os dados do HTML, através dos IDs
  var usu = document.getElementById("usu")
  var estab = document.getElementById("estab")
  var adm = document.getElementById("adm")
  var entrar = document.getElementById("entrar")
  var senha = document.getElementById("senha_estab_email_adm")
  var esqueciSenha = document.getElementById("esqueciSenha")
  var criarConta = document.getElementById("criarConta")
  
  esqueciSenha.innerHTML = ""
  criarConta.innerHTML = ""
  senha.innerHTML = ""

  adm.innerHTML = ""

  // Retornando ao HTML os dados feitos com o JS
  usu.innerHTML = "<input type=password placeholder='Senha:'></input>"
  estab.innerHTML = "<input type=password placeholder='Repita a senha:'></input>"
  entrar.innerHTML = "<button> Continuar </button>"

}