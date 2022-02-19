var listaDePecas = ["Amortecedo", "Motor", "Filtro de Ar"]
let peso = 50
if (peso < 100) {
    console.log("A peça tem que pesar no minimo 100g")
 }
 else {
     console.log("Pode cadastrar")
 }
 if (listaDePecas.length < 10) {
     console.log("ainda pode cadastrar mais")
 }
 else {
     console.log("a caixa já está cheia")
 }
 let nomePeca = "Disco de Freio"
 if (nomePeca.length > 3){
     console.log("O nome da peça está adequado")
 } else if (nomePeca == 0){
     console.log("O nome da peça não pode ser vazio")
 } else {
     console.log("O nome da peça deve ter mais de 3 caracteres, digite um nome adequado")
 }