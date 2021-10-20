//Zadanie 5
console.log("\nZADANIE 5\n---------");

let nazwy = "jajka, cebula, mleko, masło, chleb, czekolada, płatki, mąka, ryż, cukier";
var obiekty = [];

let tablicanazw = nazwy.split(', ');

for (let el of tablicanazw) {
    let nowyobj = {
        nazwa: el,
        cena: (Math.random() * 10 + 1).toFixed(2)
    }
    obiekty.push(nowyobj);
}

console.log("\nTablica obiektów:");
console.table(obiekty);

var losoweobiekty = obiekty;
var ileobiektow = parseInt(Math.random() * (tablicanazw.length / 2 - 1) + 2)
losoweobiekty = losoweobiekty.sort(() => Math.random() - Math.random()).slice(0, ileobiektow);

var zakupy = [];

for (let el of losoweobiekty) {
    let nowyobj = el;
    nowyobj.ilosc = parseInt(Math.random() * 10 + 1);
    zakupy.push(nowyobj);
}

var cenazakupow = 0;
for (let el of zakupy) {
    cenazakupow += el.cena * el.ilosc;
}
cenazakupow.toFixed(2);

console.log("\nLista zakupów:");
console.table(zakupy);
console.log("Całkowita cena zakupów: " + cenazakupow.toFixed(2));
