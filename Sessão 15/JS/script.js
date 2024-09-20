var nomeUser = document.querySelector("#txtNome")
var phoneNumber = document.querySelector("#txtNumber")
var passOne = document.querySelector("#txtPassOne")
var passTwo = document.querySelector("#txtPassTwo")
var botun = document.querySelector("#btn")

botun.onclick = function inserir_dados(){
    if(nomeUser.value=="" || phoneNumber.value=="" || passOne.value=="" || passTwo.value==""){
        alert("Preencha todos os campos!")
    }
    else{
        if(passOne.value != passTwo.value){
            alert("As passwords estão erradas!")
        }
        else{
            localStorage.setItem("nome", nomeUser.value)
            localStorage.setItem("number", phoneNumber.value)
            localStorage.setItem("password1", passOne.value)
            localStorage.setItem("password2", passTwo.value)

            alert("Usuário cadastrado com sucesso!")

            location.href = "./login.html"
        }
    }
}