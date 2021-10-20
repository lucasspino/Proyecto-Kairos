class Producto {

    constructor (nombre, cantidad, precio){
        this.nombre = nombre.toLowerCase();
        this.cantidad = cantidad;
        this.precio = precio;
    }

    sumarIva (){
        this.precio = this.precio * 1.21;
    }

}

const carrito = [];

const getAll = () => {
    return carrito;
} 

const create = (articulo) => {
    carrito.push(articulo);
}

let producto1 = new Producto ("Amanecer", 1, 550);
let producto2 = new Producto ("Hexagonal", 1, 480);
let producto3 = new Producto ("Bombones", 1, 400);


create(producto1);
create(producto2);
create(producto3);



for (const producto of carrito){
    producto.sumarIva()
}

const oferta = carrito.filter(producto => producto.precio < 600);

let orden = carrito.sort(function(a, b){
    if (a.precio < b.precio){
        return -1;
    } 
    if (a.precio > b.precio){
        return 1;
    } 
    if (a.precio = b.precio){
        return 0;
    } 
});



console.log(getAll());
console.log(oferta);