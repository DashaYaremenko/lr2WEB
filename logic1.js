let a = parseFloat(prompt("Введіть значення а:", "0.7"));
let b = parseFloat(prompt("Введіть значення b:", "0.05"));
let x = parseFloat(prompt("Введіть значення x:", "0.5"));
let r = (Math.pow(x, 2) * (x + 1)) / b - Math.pow(Math.sin(x + a), 2);
let s = Math.sqrt((x * b) / a) + Math.pow(Math.cos(x + Math.pow(b, 3)), 2);
document.getElementById("resultR").innerHTML = "для R = " + r.toFixed(4);
document.getElementById("resultS").innerHTML = "для S = " + s.toFixed(4);

