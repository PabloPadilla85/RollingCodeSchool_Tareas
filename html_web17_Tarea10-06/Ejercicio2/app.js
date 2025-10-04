let ciudades = []
let auxCiudad, auxPais;

do{
    auxCiudad = prompt("Ingrese ciudad: ","");
    auxPais = prompt("País de la ciudad " + auxCiudad + ":","");
    if(typeof(auxCiudad) == 'string' && typeof(auxPais) == 'string'){
        auxCiudad = auxCiudad[0].toUpperCase() + auxCiudad.substring(1);
        auxPais = auxPais[0].toUpperCase() + auxPais.substring(1);
        ciudades.push(auxCiudad + "," + auxPais);
    }
}while(typeof(auxCiudad) != 'object' || typeof(auxPais) != 'object')

if(ciudades.length >= 3){
    alert("Primer Elemento: " + ciudades[0] + "\nTercer elemento: " + ciudades[2] + "\nUltimo: " + ciudades[ciudades.length-1]);
    console.log("El arreglo tiene " + ciudades.length + " elementos.");
    ciudades.push("Paris,Francia");
    console.log("Elemento en la segunda posición: " + ciudades[1]);
    console.log("\nArreglo de ciudades\n\n");
    for(i=0;i<ciudades.length;i++){
        console.log("Elemento: " + ciudades[i]);
    }
}
else{
    alert("Debe ingresar al menos 3 ciudades.");
}
