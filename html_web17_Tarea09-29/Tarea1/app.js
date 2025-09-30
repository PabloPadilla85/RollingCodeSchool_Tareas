let password;
let banderaMayuscula = false;
let banderaNumero = false;

do{
    password = prompt("Ingrese contraseña: ","");
}while(typeof(password) == 'object')

if(password.length >= 6){
    for(i=0;i<password.length;i++){
        if(isNaN(password[i]) == false){
           banderaNumero = true;
        }else if(password[i] == password[i].toUpperCase()){
            banderaMayuscula = true;
        }
    }
    if(banderaMayuscula == false){
        console.log('Contraseña incorrecta. Debe haber letras y al menos una mayuscula');
    }
    else if(banderaNumero == false){
        console.log('Contraseña incorrecta. Debe tener al menos un número');
    }
    else{
        console.log('Contraseña correcta.');
    }
}
else{
    console.log('Contraseña incorrecta. Debe tener minimo 6 caracteres.');
}