
function verificar(valor){

    if(valor < 0){
        console.log("Valor negativo: " , valor)

    } else if(valor === 0){
        console.log("Valor zero: " , valor)

    } else {
        console.log("Valor positivo: " , valor)
    }

}

verificar(2)
verificar(0)
verificar(-7)