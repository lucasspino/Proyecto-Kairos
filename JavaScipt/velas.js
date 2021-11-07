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

const Bombones = document.getElementById("bombones");
const Hexagonal = document.getElementById("hexagonal");
const Amanecer = document.getElementById("amanecer");



const agregarCarrito = (e) => {
    let click = e.target;
    if(click == Bombones){
        carrito.push(new Producto ("Bombones", 1, 230, "1"));
        localStorage.setItem("Carrito", JSON.stringify(carrito))
        console.log("Agregaste a tu carrito bombones")
    }else if (click == Hexagonal) {
        carrito.push(new Producto ("Hexagonal", 1, 400, "1"));
        localStorage.setItem("Carrito", JSON.stringify(carrito))
        console.log("Agregaste a tu carrito una vela Hexagonal")
    }else if (click == Amanecer) {
        carrito.push(new Producto ("Amanecer", 1, 400, "1"));
        localStorage.setItem("Carrito", JSON.stringify(carrito))
        console.log("Agregaste a tu carrito una vela Amanecer")
    }
}

productosAgregar.forEach(productoAgregar => {   
    productoAgregar.addEventListener("click", agregarCarrito) 
})
