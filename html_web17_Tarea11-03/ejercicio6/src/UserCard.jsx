
function UserCard() {
    let contenido;
    const usuario = { nombre: "Lucas", activo: true };
    
    { usuario.activo == true ? (
        contenido = <p>{usuario.nombre} - Activo</p>
    ) : (
        contenido = <p>{usuario.nombre} - Inactivo</p>
    )}
    return contenido;
}

export default UserCard