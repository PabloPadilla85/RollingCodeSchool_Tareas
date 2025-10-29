class producto {
    constructor(id,nombre,detalle,marca,precio,stock) {
        this.id = id;
        this.nombre = nombre;
        this.detalle = detalle;
        this.marca = marca;
        this.precio = Number(precio);
        this.stock = stock;
    }
    getNombre(){
        return this.nombre;
    }
    getPrecio(){
        return this.precio;
    }
    getStock(){
        return this.stock;
    }
    static sumaDePrecios(productos){
        let sumaTotal = productos.reduce(function (total,datoProducto) {
            return total + datoProducto.getPrecio();
        },0);
        return sumaTotal;
    }
    static productosDisponibles(productos = []){
        const disponibles = productos.filter((datoProducto) => {
            return ( datoProducto.getStock() > 0 );
        });
        console.log('Productos disponibles');
        disponibles.forEach(function(datoProducto) {
            console.log(datoProducto.getNombre());
        });
    }
}

const producto01 = new producto(1,'Helado','1kg de helado','Frigo',10000,0);
const producto02 = new producto(2,'Lentejas','Bolsa 700g','Salteña',1780,8);
const producto03 = new producto(3,'Arroz','Bolsa 900g','La granja',1800,3);
const producto04 = new producto(4,'Fideos','Tallarin 900g','Muchetti',1400,10);
const producto05 = new producto(5,'Jugo de naranja','Botella de 500ml','Levite',1500,5);
const listaProductos = [ producto01 , producto02 , producto03 , producto04 , producto05 ];
console.log("Suma de precios unitarios: " + producto.sumaDePrecios(listaProductos));
producto.productosDisponibles(listaProductos);