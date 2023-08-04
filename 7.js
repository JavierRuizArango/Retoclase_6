//7

let articule =prompt("ingrese por favor el articulo");
let cost =prompt("ingrese el costo del articulo");
let discount =(parseFloat(cost) * 0.20);
let vat = discount * 0.15
let totalPrice = discount + vat

console.log("el articulo que usted compro es:" + articule + "con un costo de $"+cost);
console.log("le aplicamos un descuento del 20% ");
console.log("precio del articulo con el 20% descuento  es de $"+discount);
console.log("su compra tiene un 15% de IVA en el precio final");
console.log("el precio total de su compra con descuento aplicado y el IVA es de $"+totalPrice);
