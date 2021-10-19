//Zadanie 1
console.log("ZADANIE 1\n---------");

var wynik = "";

for (let i = 1; i <= 101; i++) {
  if ((i % 3 === 0) && (i % 2 === 0))
    wynik += "FizBuz ";
  else if (i % 2 === 0)
    wynik += "Fiz ";
  else if (i % 3 === 0)
    wynik += "Buz ";
  else
    wynik += i + " ";
}

console.log(wynik);
