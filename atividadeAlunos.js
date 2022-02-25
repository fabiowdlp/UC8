let contadorDeAlunos = 10
for (let index = 0; index <= contadorDeAlunos; index++){
  
    if (index == 0){
        console.log("o numero atual é zero")
    }else if (index % 2 == 0){
        console.log(`o numero ${index} é par`)
    }else {
        console.log(`o numero ${index} é impar`)
    }
}