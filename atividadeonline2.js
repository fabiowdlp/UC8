const evento1 = "curso full stack"
var data1 = "20/02"
var idade = 17
var oQueCadastrar = "evento"
if (oQueCadastrar == "evento") {
    console.log("digite a data do evento")
    if (data1 == "20/02"){
        console.log("data disponivel para o evento, digite o nome do evento")
    }else {
        console.log("data invalida")
    }
    if (evento1.length >= 3){
        console.log("evento cadastrado com sucesso")
    }else if (evento1.length == 0) {
        console.log("evento não pode ter 0 caracteres")
    }else {"O evento precisa ter 3 ou mais caracteres"}

}
