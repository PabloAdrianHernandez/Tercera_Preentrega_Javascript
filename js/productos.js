/* ------ Simulación de carrito de compras ------ */

/* let lista_compras = [];
let lista_compras_str = "";
const recargo = 1.1; 
let total = 0;
let recargo_envio = 0; */

class Producto{
    constructor(descripcion, talle, precio) {
    this.descripcion = descripcion;
    this.talle = talle;
    this.precio = precio;
    }
}

const producto1 = new Producto("Campera piel rosa Guess", "7", 6000);
const producto2 = new Producto("Zapatillas Le Coq Sportiff", "33", 5500);
const producto3 = new Producto("Remera ML Cheeky", "8", 1500);
const producto4 = new Producto("Campera jean Cheeky", "6", 6800);
const producto5 = new Producto("Vestido estampado Mimo", "L", 2700);
const producto6 = new Producto("Conjunto plush Cheeky", "M", 4200);

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

function agregarAlCarrito(producto) {
    let productosSeleccionados = JSON.parse(localStorage.getItem('carrito')) || [];
    productosSeleccionados.push(producto);
    localStorage.setItem('carrito', JSON.stringify(productosSeleccionados));
}

btn1.addEventListener("click", function() {
    agregarAlCarrito(producto1);
});

btn2.addEventListener("click", function() {
    agregarAlCarrito(producto2);
});

btn3.addEventListener("click", function() {
    agregarAlCarrito(producto3);
});

btn4.addEventListener("click", function() {
    agregarAlCarrito(producto4);
});

btn5.addEventListener("click", function() {
    agregarAlCarrito(producto5);
});

btn6.addEventListener("click", function() {
    agregarAlCarrito(producto6);
});

















