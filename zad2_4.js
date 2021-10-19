//Zadanie 4
console.log("\nZADANIE 4\n---------");

var imiona = ["Monika", "Kazimierz", "Jolanta", "Jakub", "Filip", "Katarzyna", "Eugeniusz", "Mariusz"];

console.log("\nTablica imion:");
console.table(imiona);

for (let i = 0; i < imiona.length; i++) {
    imiona[i] = imiona[i].replace(/a/gi, '4');
    imiona[i] = imiona[i].replace(/e/gi, '3');
}

for (let i = 0; i < imiona.length; i++) {
    if (imiona[i].length > 6) {
        imiona[i] = imiona[i].substring(0, 3) + "..." + imiona[i].slice(-3);
    }
}

console.log("\nTablica wynikowa:");
console.table(imiona);
