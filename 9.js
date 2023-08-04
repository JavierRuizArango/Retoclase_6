//9

let nDays = prompt("ingrese el numero de dias que viajara el empleado");
let costDayh = prompt("ingrese el costo de hospedaje por dia");
let foodCostDay =prompt("ingrese el costo de alimentacion por dia");
let othercost = 200

let totalCostDay =(parseInt(costDayh)*nDays);
let totalFood =(parseInt(foodCostDay)*nDays);
let totalothercost = othercost * nDays
let totalCheck = totalCostDay + totalFood + totalothercost

console.log("el costo total de alimientacions durante el tiempo de estadia es de $"+totalFood)
console.log("el costo total de la estadia en el hotel fue de $"+totalCostDay)
console.log("el costo total de los demas gastos fue de $"+totalothercost)
console.log("por lo tanto se determina que el valor final del cheque sera $"+totalCheck)