var nomeLocal= localStorage.getItem("nome", JSON.stringify(nomeLocal))

function pegarUser(usuario){
    var pegarUsuario = document.querySelector(".user_name")
    pegarUsuario.innerHTML = nomeLocal
    //console.log(nomeLocal)
}
pegarUser(nomeLocal)

//botun.computedStyleMap.display.flex - para activar o botão alterar
// var spanNome = spanHTML.outerText
// antes de alterar o nome, o sistema deve verificar vprimeiro se a password digitada pelo user está certo

var spanName = document.querySelector(".user_name")
var botun = document.querySelector("#btnAlterar")

spanName.onclick = function alterarUser(){
    botun.style.display = "flex"
}

botun.onclick = function alterarUser(){
    var data = new Date()
    var hora = data.getHours()

    if(hora >=0 && hora <=11){
        var time = "Bom dia"
        var pass = localStorage.getItem("password1")
        var passawor = prompt(time + " ,digite sua password para alterar o nome.")

        if(pass != passawor){
            alert("Password inválida. Tente novamente!")
        }
        else{
            localStorage.setItem("nome", spanName.outerText)
            alert("Alteração feita com sucesso!")
            botun.style.display = "none"
        }
    }

    if(hora >=12 && hora <=17){
        var time = "Boa tarde"
        var pass = localStorage.getItem("password1")
        var passawor = prompt(time + " ,digite sua password para alterar o nome.")

        if(pass != passawor){
            alert("Password inválida. Tente novamente!")
        }
        else{
            localStorage.setItem("nome", spanName.outerText)
            alert("Alteração feita com sucesso!")
            botun.style.display = "none"
        }
    }

    if(hora >=18 && hora <=23){
        var time = "Boa noite"
        var pass = localStorage.getItem("password1")
        var passawor = prompt(time + " ,digite sua password para alterar o nome.")

        if(pass != passawor){
            alert("Password inválida. Tente novamente!")
        }
        else{
            localStorage.setItem("nome", spanName.outerText)
            alert("Alteração feita com sucesso!")
            botun.style.display = "none"
        }
    }
}