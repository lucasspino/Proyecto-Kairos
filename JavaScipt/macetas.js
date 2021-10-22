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

let producto1 = new Producto ("Kaidá", 1, 600, "1");
let producto3 = new Producto ("Avavác", 1, 500, "2");
let producto2 = new Producto ("Polygono", 1, 430, "3");
let producto4 = new Producto ("Trigonikí Sfaíra", 1, 470, "4");
let producto5 = new Producto ("Strongyló Polýgono", 1, 450, "5");
let producto6 = new Producto ("Trígono", 1, 450, "6");
let producto7 = new Producto ("Pyramída", 1, 450, "7");


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
        case "4":
            carrito.push(producto4);
            break
        case "5":
            carrito.push(producto5);
            break
        case "6":
            carrito.push(producto6);
            break
        case "7":
            carrito.push(producto7);
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