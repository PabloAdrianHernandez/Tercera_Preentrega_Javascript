let listaCarrito = document.getElementById('listaCarrito');

function eliminarProducto(indice) {
    var productosSeleccionados = JSON.parse(localStorage.getItem('carrito')) || [];
    productosSeleccionados.splice(indice, 1);
    localStorage.setItem('carrito', JSON.stringify(productosSeleccionados));
    mostrarProductosEnCarrito();
}


function mostrarProductosEnCarrito() {
   
    listaCarrito.innerHTML = "";

    let productosSeleccionados = JSON.parse(localStorage.getItem('carrito')) || [];

    productosSeleccionados.forEach(function(producto, indice) {
        let li = document.createElement('li');
        li.textContent = `Producto: ${producto.descripcion} - Talle: ${producto.talle} - Precio: $${producto.precio}`;

        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = function() {
            eliminarProducto(indice);
        };

        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
    });
}

mostrarProductosEnCarrito();

function mostrarSumatoriaPrecios() {
    let sumatoria = 0;

    let productosSeleccionados = JSON.parse(localStorage.getItem('carrito')) || [];

    productosSeleccionados.forEach(function(producto) {
        sumatoria += producto.precio;
    });

    let sumatoriaElement = document.getElementById('sumatoriaPrecios');
    sumatoriaElement.textContent = `Sumatoria de precios: $${sumatoria}`;
}

mostrarSumatoriaPrecios();



/* let modo_entrega = parseInt(prompt("Elegir modo de entrega (0= retiro por local, 1= envío por Correo Argentino): "));

if (modo_entrega == 0) { 
    recargo_envio = 1;
} else if (modo_entrega == 1) {
    recargo_envio = 1.05;
} else {
    alert ("ERROR")
}

const lista_compras2 = lista_compras.map((el) => {
    return {
    descripcion: el.descripcion,
    precio: parseInt(el.precio * recargo_envio)
    }
   })

for (let index = 0; index < lista_compras2.length; index++) {
    lista_compras_str += lista_compras2[index].descripcion + " $" + lista_compras2[index].precio + "\n";
}

const subtotal = lista_compras2.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)

alert("El listado de productos seleccionados es: " + "\n" + lista_compras_str);
alert("El subtotal es: $" + subtotal);

let modo_pago = prompt("Elegir modo de pago (0= efectivo/transferencia, 1= MercadoPago): ");

if (modo_pago == "0") {
    total = subtotal;
} else if (modo_pago == "1") {
    total = parseInt(subtotal*recargo);
} else {
    alert ("ERROR")
}

alert("El total de todos los productos seleccionados es: $" + total);
 */

