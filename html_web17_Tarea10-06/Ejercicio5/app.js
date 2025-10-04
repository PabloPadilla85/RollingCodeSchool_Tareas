let cadena;

do {
    cadena = prompt("Ingrese el texto: ", "");
} while (
    typeof cadena == "object" ||
    cadena.length == 0 ||
    cadena.trim().length == 0 ||
    isNaN(cadena) == false
);
informacionCadena(cadena);

function informacionCadena(cadenaTexto = "cadena") {
    let banderaMayusculas = false;
    let banderaMinusculas = false;
    for (i = 0; i < cadenaTexto.length; i++) {
        if ( cadenaTexto.at(i) != "." && cadenaTexto.at(i) != " " && cadenaTexto.at(i) != ",") {
            if(cadenaTexto.at(i) == cadenaTexto.at(i).toUpperCase()){
                banderaMayusculas = true;
            }
            else{
                banderaMinusculas = true;
            }
        }
    }
    if (banderaMayusculas == false) {
        alert("El texto solo tiene minúsculas.");
    } else if (banderaMinusculas == true) {
        alert("El texto tiene mayúsculas y minúsculas.");
    } else {
        alert("El texto tiene solo mayúsculas.");
    }
}
