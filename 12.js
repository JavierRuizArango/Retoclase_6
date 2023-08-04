//12

let totalArticule = prompt("ingrese el valor total de su compra");
alert("escoja el numero de cuotas para su compra");
alert("ingrese (1) para una cuota, (2) para dos cuotas y (6) para hacer el pago en 6 cuotas");
let ncuotas = prompt("ingrese el numero de cuotas")

switch (parseInt(ncuotas)) {
    case 1:
        ncuotas = 1
        console.log("el costo de su compra es $" + totalArticule + " tiene un 0% de recargo")
        break;
    case 2:
        ncuotas = 2 
        let val = totalArticule * 0.05
        console.log("el costo de su compra es $"+ totalArticule + " tiene un recargo adicional del %5 el valor final con recargo es de $"+ val)
        break;
    case 3:
        ncuotas = 6
        let cost = totalArticule * 0.40
        console.log("el costo de su compra es $"+ totalArticule + " tiene un recargo adicional del %5 el valor final con recargo es de $"+ cost)
        break;
    case 4:
        ncuotas != 1 && ncuotas != 2 || ncuotas != 6
        console.log("ingrese una opcion validad usted ingreso :" + ncuotas)
        break;
}