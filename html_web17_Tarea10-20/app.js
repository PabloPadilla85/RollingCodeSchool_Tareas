let inputTipo = document.querySelector("#tipo");
let inputMarca = document.querySelector("#marca");
let inputStock = document.querySelector("#stock");
let inputPrecio = document.querySelector("#precio");
let inputDescuento = document.querySelector("#descuento");
let inputDescripcion = document.querySelector("#decripcion");

let tablaProductos = document.querySelector("tbody");
let formulario = document.querySelector("#formularioProducto");

let actualizar = false;
let idActualizar = null;

const productos = [
    {
        id:1,
        tipo:"Denario",
        marca:"Swarovski",
        stock: 10,
        precio: 110000,
        preciodescuento: 93500,
        descripcion:"Denario de Plata 925 - Con esferas de cristales Swarovski",
    },
    {
        id:2,
        tipo:"Gargantilla",
        marca:"Swarovski",
        stock: 10,
        precio: 44000,
        preciodescuento: 28600,
        descripcion:"Collar de Plata 925 - Con cristales cubos y mariposas de cristal Swarovski Largo 45cm.",
    },
    { 
        id:3,
        tipo:"Gargantilla",
        marca:"Swarovski",
        stock: 10,
        precio: 43000,
        preciodescuento: 34400,
        descripcion:"Collar de Plata 925 - Con corazones de cristal Swarovski Largo 45cm.",
    }
];

getProductos();

/*****************************************************************/
/******************** Eventos enlazados **************************/
/*****************************************************************/

formulario.addEventListener("submit",function(evento){
    evento.preventDefault();
    if (actualizar == false) {
        agregarProducto();
    } else {
        let auxDatos = {
            tipo: inputTipo.value,
            marca: inputMarca.value,
            stock: inputStock.value,
            precio: inputPrecio.value,
            preciodescuento: inputDescuento.value,
            descripcion: inputDescripcion.value,
        };
        actualizarProducto(idActualizar,auxDatos);
    }
    formulario.reset();
    inputTipo.focus();
    getProductos();
});

/*****************************************************************/
/*************************** Funciones ***************************/
/*****************************************************************/

function getProductos(auxVector = productos){
    tablaProductos.innerHTML = "";
    auxVector.forEach( (auxProducto) => {
        let fila = document.createElement("tr");
        let columnas = '<td>' + auxProducto.tipo + '</td><td>' + auxProducto.marca + '</td><td>' 
        + auxProducto.stock + '</td><td>' + auxProducto.precio + '</td><td>' + auxProducto.preciodescuento
        + '</td><td><button class="btn btn-danger btn-sm" onclick="borrarProducto(' + auxProducto.id
        + ')"><i class = "bi bi-x-lg"></i></button>'
        + '<button class="btn btn-warning btn-sm ms-md-2" onclick="editarProducto(' + auxProducto.id
        + ')"><i class = "bi bi-pencil-square"></i></button></td>';
        fila.innerHTML = columnas;
        tablaProductos.append(fila);
    });
};

const agregarProducto = function(){
    let auxId = productos[productos.length-1].id + 1;
    const auxDatos = {
        id: auxId,
        tipo: inputTipo.value,
        marca: inputMarca.value,
        stock: Number(inputStock.value),
        precio: Number(inputPrecio.value),
        preciodescuento: Number(inputDescuento.value),
        descripcion: inputDescripcion.value,
    };
    productos.push(auxDatos);
};

function borrarProducto(auxId){
    let auxIndex = productos.findIndex(function(auxProducto){
        return auxProducto.id === auxId;
    });
    let comprobar = confirm("¿Confirma el borrado del producto "
        + productos[auxIndex].tipo + " de la marca " + productos[auxIndex].marca + " ?");
    if (comprobar == true) {
        productos.splice(auxIndex,1);
        getProductos();
    }
}

function editarProducto(auxId){
    actualizar = true;
    idActualizar = auxId;
    let auxModificar = productos.find(function(auxProducto){
        return auxProducto.id === auxId;
    });
    inputTipo.value = auxModificar.tipo;
    inputMarca.value = auxModificar.marca;
    inputStock.value = auxModificar.stock;
    inputPrecio.value = auxModificar.precio;
    inputDescuento.value = auxModificar.preciodescuento;
    inputDescripcion.value = auxModificar.descripcion;
    document.querySelector("#botonAgregar").innerText = "Actualizar Datos del producto";
}

function actualizarProducto(auxId,auxDatos){
    auxIndice = productos.findIndex(function(auxProducto){
        return auxProducto.id === auxId;
    });
    productos[auxIndice].tipo = auxDatos.tipo;
    productos[auxIndice].marca = auxDatos.marca;
    productos[auxIndice].stock = Number(auxDatos.stock);
    productos[auxIndice].precio = Number(auxDatos.precio);
    productos[auxIndice].preciodescuento = Number(auxDatos.preciodescuento);
    productos[auxIndice].descripcion = auxDatos.descripcion;
    actualizar = false;
    document.querySelector("#botonAgregar").innerText = "Agregar producto";
}

function buscarProductos(){
    let auxBuscar = document.querySelector("#inputBuscar").value;
    if (auxBuscar) {
        let busqueda = productos.filter((auxProducto) => {
            return auxProducto.tipo.toLowerCase().includes(auxBuscar.toLowerCase());
        });
        getProductos(busqueda);
    } else {
        getProductos();
    }
}