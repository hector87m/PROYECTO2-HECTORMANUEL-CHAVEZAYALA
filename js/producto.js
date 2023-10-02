document.addEventListener("DOMContentLoaded", () => {
    const producto = document.getElementById("detalles-producto");
    const urlParams = new URLSearchParams(window.location.search);
    const idProducto = parseInt(urlParams.get("id"));
    const productos = JSON.parse(localStorage.getItem("artesanias"));
    const productoSeleccionado = productos.find((elemento) => elemento.id === idProducto);
    if (productoSeleccionado) {
        const contenedorDetallesArtesania = document.createElement("div");
        contenedorDetallesArtesania.classList.add("detalles-artesania");
        contenedorDetallesArtesania.innerHTML = 
        `<h2>${productoSeleccionado.nombre}</h2>
        <p>${productoSeleccionado.descripcion}</p>
        <img class="responsive-image" src="img/${productoSeleccionado.imagen}"></img>
        <p>${productoSeleccionado.precio}</p>
        <p>${productoSeleccionado.puntuacion}</p>
        `;
        producto.appendChild(contenedorDetallesArtesania);
    }
});
const botonCompra = document.querySelector("#botonCompra");
const pedido = () => {
    Swal.fire({
        title: 'tu pedido se esta procesando.',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("../img/pikachu-running.gif")
          left top
          no-repeat
        `
      })
    };
    botonCompra.addEventListener("click", pedido);