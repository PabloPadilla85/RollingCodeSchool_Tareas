let dado1;
let dado2;
let repeticiones = [[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]];

for(i=0;i<50;i++){
    dado1 = Math.floor(Math.random() * 5 + 1);
    dado2 = Math.floor(Math.random() * 5 + 1);
    /*
    repeticiones[dado1+dado2-2][1]++;
    */
    for(j=0;j<11;j++){
        if(repeticiones[j][0] == dado1+dado2){
            repeticiones[j][1]++;
            break;
        }
    }
}
console.log("Suma Apariciones");
for(i=0;i<11;i++){
    console.log(repeticiones[i][0] + " - " + repeticiones[i][1]);
}