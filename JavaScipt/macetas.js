const carrito = [];

const productos = []; 

class Producto {

    constructor (nombre, cantidad, precio, id){
        this.nombre = nombre.toLowerCase()
        this.cantidad = cantidad
        this.precio = precio
        this.id = id
    }

    sumarIva (){
        this.precio = this.precio * 1.21;
    }

}

const create = (articulo) => {
    carrito.push(articulo);
     
}

for (const producto of carrito){
    producto.sumarIva()
}

const getAll = () => {
    return carrito;
} 

const productosAgregar = document.querySelectorAll(".btnId");

const Kaidra = document.getElementById("kaidra");
const Avavac = document.getElementById("avavac");
const Polygono = document.getElementById("polygono");
const Trigoniki = document.getElementById("trigoniki");
const Strongylo = document.getElementById("strongylo");
const Trigono = document.getElementById("trigono");
const Pyramida = document.getElementById("pyramida");


const agregarCarrito = (e) => {
    let click = e.target;
    if(click == Kaidra){
        carrito.push(new Producto ("Kaidrá", 1, 600, "1")); 
        localStorage.setItem("Carrito", JSON.stringify(carrito))
        console.log("Agregaste a tu carrito la maceta Kaidrá")
    }else if (click == Avavac) {
        carrito.push(new Producto ("Avavác", 1, 500, "2"));
        localStorage.setItem("Carrito", JSON.stringify(carrito))
        console.log("Agregaste a tu carrito la maceta Avavác")
    }else if (click == Polygono) {
        carrito.push(new Producto ("Polygono", 1, 430, "3"));
        localStorage.setItem("Carrito", JSON.stringify(carrito))
        console.log("Agregaste a tu carrito la amceta Polygono")
    }else if (click == Trigoniki) {
        carrito.push(new Producto ("Trigonikí Sfaíra", 1, 470, "4"));
        localStorage.setItem("Carrito", JSON.stringify(carrito))
        console.log("Agregaste a tu carrito la maceta Trigonikí Sfaíra")
    }else if (click == Strongylo) {
        carrito.push(new Producto ("Strongyló Polýgono", 1, 450, "5"));
        localStorage.setItem("Carrito", JSON.stringify(carrito))
        console.log("Agregaste a tu carrito la amceta Strongyló Polýgono")
    }else if (click == Trigono) {
        carrito.push(new Producto ("Trígono", 1, 450, "6"));
        localStorage.setItem("Carrito", JSON.stringify(carrito))
        console.log("Agregaste a tu carrito la maceta Trígono")
    }else if (click == Pyramida) {
        carrito.push(new Producto ("Pyramída", 1, 450, "7"));
        localStorage.setItem("Carrito", JSON.stringify(carrito))
        console.log("Agregaste a tu carrito la maceta Pyramída")
    }
}

productosAgregar.forEach(productoAgregar => {   
    productoAgregar.addEventListener("click", agregarCarrito) 
})
