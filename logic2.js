let n = parseInt(prompt("Номер варіанту(n):", "21"));
let elCount = parseInt(prompt("Введіть кількість елементів у списку (не більше 50):", "10"));

if (elCount>50){
    elCount=50;
}
let p= new Array(elCount);
let a=new Array(elCount);
p[0]=n;

for(let i=0;i<elCount;i++){
    if(i>0){
        p[i]=(p[i-1]*67+11)%128;
    }
    a[i]=p[i]-64;
}
let maxElement=a[0];
let maxIndex=0;
for (let i=1;i<a.length;i++) {
    if (a[i]>maxElement) {
        maxElement=a[i];
        maxIndex=i;
    }
}
let tableBody = document.querySelector("#dataTable tbody");
for (let i = 0; i < elCount; i++) {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${i}</td><td>${p[i]}</td><td>${a[i]}</td>`;
    tableBody.appendChild(row);
}
document.getElementById("result").textContent = `Найбільший елемент масиву "а": ${maxElement}, його індекс: ${maxIndex}`;

