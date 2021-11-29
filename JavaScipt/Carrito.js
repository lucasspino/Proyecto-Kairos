
const botonAgregarCarrito = document.querySelectorAll('.btnId') 

botonAgregarCarrito.forEach(AddToCar =>{
    AddToCar.addEventListener('click', addFunction)
}) 

const ContenedorProducto = document.querySelector('.panel-carrito-contenedor');

function addFunction(event){
    const button = event.target
    const producto = button.closest('.col-md-4');

    const tituloProducto = producto.querySelector('.divMacetas__subtitle').textContent;
    const precioProducto = producto.querySelector('.div--Precio').textContent;
    const imagenProducto = producto.querySelector('img').src;

   agregarProducto(tituloProducto, precioProducto, imagenProducto); 
}

function agregarProducto (tituloProducto, precioProducto, imagenProducto){

    const carrito = document.createElement('div');
    const carritoContenedor =`
   
        <article class="col-md-4 productoItem">
           
            <img src="${imagenProducto}" class="img-thumbnail img-carrito" alt="${tituloProducto}">
            
            <aside class= "aside-carrito">
                <h2 class="divMacetas__subtitle">${tituloProducto}</h2>
                <span class="precio-Producto">${precioProducto}</span>
            </aside>
            
            <p class="p-carrito">Cantidad</p>
            <input class="cantidadElement" type="number" value="1">
            <button class="botonBorrar" type="button">X</button>

        </article>
      
    `;
    
    carrito.innerHTML = carritoContenedor;
    ContenedorProducto.append(carrito);

    carrito.querySelector('.botonBorrar').addEventListener('click', borrarElemento);
    
    PrecioTotal()
}    

function PrecioTotal (){
    let total = 0;
    const totalCarrito = document.querySelector('.Precio-Total');
    const productos = document.querySelectorAll('.productoItem');
    
    
    productos.forEach(productos =>{
        const productosPrecioEl = productos.querySelector('.precio-Producto');
        const productosPrecio = Number(productosPrecioEl.textContent.replace('$', ''));
        const cantElementCarrito = productos.querySelector('.cantidadElement');
        const cantElement = Number(cantElementCarrito.value);
        
        total = total + productosPrecio * cantElement;
        totalCarrito.innerHTML = `$${total.toFixed(2)}`;
        console.log(total)
    });
    
}

function borrarElemento (e){
    const btnBorrar = e.target;
    btnBorrar.closest('.productoItem').remove();
    PrecioTotal();
}