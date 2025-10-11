
let auxPantalla = document.querySelector("#display");

function agregarCaracter(auxCaracter){
    if (auxPantalla.value != '0') {
        auxPantalla.value += auxCaracter;
    } else {
        auxPantalla.value = auxCaracter;
    }
}

function resetear(){
    auxPantalla.value = 0;
}

function evaluar(){
    let auxResultado =  eval(auxPantalla.value);
    if (auxResultado == Infinity || auxResultado == undefined) {
        resetear();
    } else {
        auxPantalla.value = auxResultado;
    }
}