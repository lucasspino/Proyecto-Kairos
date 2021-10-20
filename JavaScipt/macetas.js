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

let producto1 = new Producto ("Kaidá", 1, 600);
let producto3 = new Producto ("Avavác", 1, 500);
let producto2 = new Producto ("Polygono", 1, 430);
let producto4 = new Producto ("Trigonikí Sfaíra", 1, 470);
let producto5 = new Producto ("Strongyló Polýgono", 1, 450);
let producto6 = new Producto ("Trígono", 1, 450);
let producto7 = new Producto ("Pyramída", 1, 450);


create(producto1);
create(producto2);
create(producto3);
create(producto4);
create(producto5);
create(producto6);
create(producto7);


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