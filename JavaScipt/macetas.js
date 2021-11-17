
const botonAgregarCarrito = document.querySelectorAll('.btnId') 

botonAgregarCarrito.forEach(AddToCar =>{
    AddToCar.addEventListener('click', addFunction)
}) 

const ContenedorProducto = document.getElementsByClassName('.panel-carrito');

function addFunction(event){
    const button = event.target
   
    const producto = button.closest('.col-md-4');
   
    const tituloProducto = producto.querySelector('.divMacetas__subtitle').textContent;

    const precioProducto = producto.querySelector('.divMacetas__precio').textContent;
   
    const imagenProducto = producto.querySelector('img').src;


   agregarProducto(tituloProducto, precioProducto, imagenProducto); 
}

function agregarProducto (tituloProducto, precioProducto, imagenProducto){

    const carrito = document.createElement('div')
    const carritoContenedor =`
    <article class="col-md-4">
        <img src="${imagenProducto}" class="img-thumbnail" alt="${tituloProducto}">
        <aside>
            <h2 class="divMacetas__subtitle">${tituloProducto}</h2>
            <span class="divMacetas__precio">Precio: ${precioProducto}</span>
        </aside>
    </article>
    `;
    
    carrito.innerHTML = carritoContenedor;
    ContenedorProducto.append(carrito)
}    
