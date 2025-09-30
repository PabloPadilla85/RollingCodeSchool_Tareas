let clasificacion = ["Oscar Piastri","Lando Norris","Max Verstappen","George Russell","Charles Leclerc","Lewis Hamilton"
,"Kimi Antonelli","Alexander Albon","Isack Hadjar","Nico Hülkenberg","Carlos Sainz","Liam Lawson","Fernando Alonso"
,"Esteban Ocon","Yuki Tsunoda","Gabriel Bortoleto","Franco Colapinto","Oliver Bearman","Franco Pérez"
,"Jack Doohan"];

/*Clasificación inicial*/
console.log('\nClasificación:\n');
for(i=0;i<clasificacion.length;i++){
    console.log( (i+1) + ': ' + clasificacion[i]);
}

/* Pilotos en el 3er y 5to puesto */
console.log('3er puesto: ' + clasificacion[3] + '\n5to Puesto: ' + clasificacion[5]);

/*Se suman tres pilotos a la final */
clasificacion.push("Pierre Gasly");
clasificacion.push("Valtteri Bottas");
clasificacion.push("Lance Stroll");

let auxPosicion;

/*Pilotos en orden alfabético*/
let pilotosCopia = clasificacion.slice();
let pilotosOrdenados = pilotosCopia.sort();

console.log('\n Pilotos en orden alfabético: \n');
for(i=0;i<pilotosOrdenados.length;i++){
    console.log(pilotosOrdenados[i]);
}

/*Hamilton pasa al 1er lugar*/
auxPosicion = clasificacion.indexOf("Lewis Hamilton");
clasificacion.splice(auxPosicion,1);
clasificacion.unshift("Lewis Hamilton");

/*George Russell pasa al 6to lugar*/
auxPosicion = clasificacion.indexOf("George Russell");
clasificacion.splice(auxPosicion,1);
clasificacion.splice(5,0,"George Russell");

/* Carlos Sainz se retira de la carrera*/
auxPosicion = clasificacion.indexOf("Carlos Sainz");
clasificacion.splice(auxPosicion,1);

/* Alonso pasa al 2do lugar dejando afuera de la carrera al piloto de dicho lugar*/
auxPosicion = clasificacion.indexOf("Fernando Alonso");
clasificacion.splice(auxPosicion,1);
clasificacion[1] = "Fernando Alonso";

/* Pérez se retira al último lugar*/
auxPosicion = clasificacion.indexOf("Franco Pérez");
clasificacion.splice(auxPosicion,1);
clasificacion.push("Franco Pérez");

/*Se muestra los podios*/
console.log("\nPodio\n");
for(i=0;i<clasificacion.length;i++){
    console.log('Puesto ' + (i+1) + ': ' + clasificacion[i]);
}
