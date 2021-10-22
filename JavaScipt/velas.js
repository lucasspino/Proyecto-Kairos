alert('Selecciona un producto. Cuando termines ingresa "Salir"');

let prod = prompt('1)Kaidrá 2)Avavác 3)Polygono 4)Trigonikí Sfaíra 5)Strongyló 6)Trígono 7)Pyramída 8)Salir');

const carrito = [];

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


let producto1 = new Producto ("Amanecer", 1, 550, "1");
let producto2 = new Producto ("Hexagonal", 1, 480, "2");
let producto3 = new Producto ("Bombones", 1, 400, "3");


while(prod != "8"){
    switch (prod) {
        case "1":
            create(producto1);
            break
         case "2":
            create(producto2);
            break
        case "3":
            carrito.push(producto3);
            break
        case "8":
            break;
        default:
            break;
    }
    prod = prompt('1)Kaidrá 2)Avavác 3)Polygono 4)Trigonikí Sfaíra 5)Strongyló 6)Trígono 7)Pyramída 8)Salir');
    if (prod == "8"){
        break
    }
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

console.log(oferta);

console.log(getAll());