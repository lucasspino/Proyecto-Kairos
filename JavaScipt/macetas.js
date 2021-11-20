
const botonAgregarCarrito = document.querySelectorAll('.btnId') 

botonAgregarCarrito.forEach(AddToCar =>{
    AddToCar.addEventListener('click', addFunction)
}) 

const ContenedorProducto = document.querySelector('.panel-carrito');

function addFunction(event){
    const button = event.target
   
    const producto = button.closest('.col-md-4');
   
    const tituloProducto = producto.querySelector('.divMacetas__subtitle').textContent;

    const precioProducto = producto.querySelector('.divMacetas__precio').textContent;
   
    const imagenProducto = producto.querySelector('img').src;


   agregarProducto(tituloProducto, precioProducto, imagenProducto); 
}

function agregarProducto (tituloProducto, precioProducto, imagenProducto){

    const carrito = document.createElement('div');
    const carritoContenedor =`
    <div class="panel-carrito-contenedor">
        <article class="col-md-4 article-carrito">
            <img src="${imagenProducto}" class="img-thumbnail img-carrito" alt="${tituloProducto}">
            <aside class= "aside-carrito">
                <h2 class="divMacetas__subtitle">${tituloProducto}</h2>
                <span class="divMacetas__precio">${precioProducto}</span>
            </aside>
        </article>
    </div>    
    `;
    
    carrito.innerHTML = carritoContenedor;
    ContenedorProducto.append(carrito);
}    
