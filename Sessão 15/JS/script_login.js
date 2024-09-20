var nomeUser = document.querySelector("#txtNome")
var passUser = document.querySelector("#txtPass")
var btn = document.querySelector("#btn")


btn.onclick = function comparar_dados(){
var nome =  localStorage.getItem("nome")
var pass =  localStorage.getItem("password1")

    if(nomeUser.value == "" || passUser.value == ""){
        alert("Preencha todos os campos!")
    }
    else{
        if(nomeUser.value == nome && passUser.value == pass){
            location.href = "./index2.html"
            alert("Bem-vindo ao Sistema!")
        }
    
        else{
            alert("Senha ou usuário inválido")
        }
    }
}


/*
btn.onclick = function inserir_dados(){
    localStorage.setItem("nome", nomeUser.value)
    localStorage.setItem("pass", passUser.value)
    localStorage.setItem("dataa", datauser.value)
}
    */
