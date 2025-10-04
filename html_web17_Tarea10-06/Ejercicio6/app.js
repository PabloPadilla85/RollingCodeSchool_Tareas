let a;
let b;
do {
    a=prompt("Lado a: ","");
} while (typeof(a) == 'object' || isNaN(a) == true);
do {
    b=prompt("Lado b: ","");
} while (typeof(b) == 'object' || isNaN(b) == true);

alert("Perimetro: " + calcular(a,b) );

function calcular(a,b){ 
    return ( (Number(a) + Number(b)) * 2 );
}
