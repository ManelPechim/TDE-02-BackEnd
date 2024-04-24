
function soma(a, b){

    let resultado;
    resultado = a + b

    console.log("soma: " , resultado)

    if(resultado % 5 === 0){
        console.log("eh divisivel por 5: " , resultado)

    } else {
        console.log("nao eh divisivel por 5: " , resultado)
    }
}

soma(1, 2)
