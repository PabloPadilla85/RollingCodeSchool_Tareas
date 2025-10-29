let num1 = [23,56,3,67];
let num2 = [100,456,2,347];

const arreglo = [...num1,...num2];
const valor = arreglo.reduce((maximo,numero)=>{
    if(maximo < numero){
        maximo = numero;
    }
    return maximo;
},0);

console.log('Arreglo: ' + arreglo);
console.log('Máximo: ' + valor);