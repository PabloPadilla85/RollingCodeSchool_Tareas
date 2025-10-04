let num;

do{
    num = prompt("Ingrese número: ","");
}while(typeof(num) == 'object' || isNaN(num) == true || num.length == 0)
par(Number(num));

function par(numero){
    if(numero % 2 == 0){
        alert("El número ingresado es par.");
    }
    else{
        alert("El número ingresado es impar.");
    }
}