const d = document;

function btnCarrito(carritoBtn, panelCarrito){

    const d = document;

    d.addEventListener("click", e =>{
        if(e.target.matches(carritoBtn)|| e.target.matches(`${carritoBtn} *`)){
            d.querySelector(panelCarrito).classList.toggle("activo")
        }
    });  
}

d.addEventListener("DOMContentLoaded", (e)=>{
    btnCarrito(".carrito-btn", ".panel-carrito")
});
