// função para criar uma nova conta
function criarConta(){

    // Recebendo os dados do HTML, através dos IDs
    var usu = document.getElementById("usu")
    var estab = document.getElementById("estab")
    var adm = document.getElementById("adm")
    var entrar = document.getElementById("entrar")
    var esqueciSenha = document.getElementById("esqueciSenha")
    var criarConta = document.getElementById("criarConta")
    var confirmarSenha = document.getElementById("senha_estab_email_adm")
    var checkbox = document.getElementById("senha_adm")
  
    esqueciSenha.innerHTML = ""
    criarConta.innerHTML = ""
  
    // Retornando ao HTML os dados feitos com o JS
    usu.innerHTML = "<input type=text placeholder='Nome:'></input>"
    estab.innerHTML = "<input type=text placeholder='E-mail:'></input>"
    adm.innerHTML = "<input type=password placeholder='Senha:'></input>"
    confirmarSenha.innerHTML = "<input type=password placeholder='Repita a senha:'></input>"
    checkbox.innerHTML = "<input type='checkbox' id='remover' name='remover'>Aceito os termos de licença</input>"
    entrar.innerHTML = "<button> Continuar </button>"

}