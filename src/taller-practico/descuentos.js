const boton = document.querySelector('#boton');
const precio = document.querySelector('#precio');
const cupon = document.querySelector('#cupon');
const precioFinal = document.querySelector('#spanPrecio');
const cupones = {
    "platzi": 90,
    "javascript": 40,
    "front-end": 20
}
boton.addEventListener('click', calcularDescuento);


function calcularDescuento() {
    let price = Number(precio.value);
    let value = cupon.value;
    let keys = Object.keys(cupones)
    if (!price || !value) {
        alert("LLENA LOS CAMPOS!");

    } else if (keys.some((element)=> element == value)) {
        total = (price * (100 - cupones[value])) / 100
        precioFinal.innerText = `Cupon de $${cupones[value]}, Precio: ` + total;
    }
}