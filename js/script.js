fetch("artesanias.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    localStorage.setItem("artesanias", JSON.stringify(datos));
    const gridProductos = document.getElementById("grid-productos");
    const datosProductos = JSON.parse(localStorage.getItem("artesanias"));
    console.log(datosProductos);
    if (datosProductos) {
        datosProductos.forEach((productos) => { 
        const griditems = document.createElement("div");
        griditems.classList.add("grid-items");
        griditems.innerHTML = `<h5>${productos.nombre}</h5>`;
        gridProductos.appendChild(griditems);
        griditems.addEventListener("click", () => { 
            mostrardetallesproducto(productos); 
        griditems.appendChild(griditems);
    })});
}});
function mostrardetallesproducto(producto) {
    window.location.href = `producto.html?id=${producto.id}`;
}