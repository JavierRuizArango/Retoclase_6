//11

let examn1 = prompt("ingrese la nota de su primer examen");
let examn2 = prompt("Ingrese la nota de su  segundo examen");
let examn3 = prompt("ingrese la nota de su tercer examen");

let proExamn1 =(parseInt(examn1)  * 0.25);
let proExamn2 = (parseInt(examn2)* 0.25);
let proExamn3 =(parseInt(examn3) * 0.50);
let totalexamn = proExamn1 + proExamn2 + proExamn3

console.log("el promedio total es de " + totalexamn)