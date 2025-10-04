let numero;
do {
    numero = prompt("Numero: ","");
} while (typeof(numero) == 'object' || isNaN(numero) == true || numero.trim().length == 0);
for(i=1;i<=10;i++){
    console.log( numero + " * " + i + " = " + Number(numero) * i);
}