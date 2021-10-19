//Zadanie 3
console.log("\nZADANIE 3\n---------");

function f1 (tab) {
    let suma = 0;
    while (suma < 200) {
    let wartosc = parseInt(Math.random() * 10 + 1);
    tab.push(wartosc);
    suma += wartosc;
  }
}

function f2 (tab) {
    najmniejsza = 0;
    for(i = 0; i < tab.length; i++) {
        if (tab[i] < tab[najmniejsza])
        najmniejsza = i;
    }

    tab.splice(najmniejsza, 1);
}

function f3 (tab) {
    najwieksza = 0;
    for(i = 0; i < tab.length; i++) {
        if (tab[i] >= tab[najwieksza])
        najwieksza = i;
    }

    tab.splice(najwieksza, 1);
}

function f4 (tab) {
    let tab2 = new Array(11).fill(0);
    for (let el of tab) {
        tab2[el] += 1;
    }

    let wynik = "";
    for(let i = 1; i < tab2.length; i++) {
        wynik += "wartość \"" + i + "\"" + " pojawia się " + tab2[i] + " raz(y)\n";
    }
    return wynik;
}

function f5 (tab) {
    let tab2 = tab.splice(0, 10);

    for (let el of tab2) {
        tab.push(el);
    }
}

let liczby = [];

f1(liczby);
console.log("\nUtworzona tablica:")
console.table(liczby);

f2(liczby);
console.log("\nTablica po usunięciu pierwszego wystąpienia najmnieszego elementu:");
console.table(liczby);

f3(liczby);
console.log("\nTablica po usunięciu ostatniego wystąpienia największego elementu:");
console.table(liczby);

console.log("\nIle razy każda z wartości występuje w tablicy:");
console.log(f4(liczby));

f5(liczby);
console.log("\nTablica po przeniesieniu pierwszych dziesięciu elementów na jej koniec:");
console.table(liczby);
