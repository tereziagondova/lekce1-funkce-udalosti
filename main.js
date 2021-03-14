// tady je místo pro náš program

//1.Vytvořte tlačítko, při jehož stisknutí se změní barva Čtvereček na zelenou.
let squareElement = document.querySelector(".ctverecek");

function changeColorTo () {
  squareElement.style.backgroundColor="green";
}

//2.Upravte kód tak, aby se výsledek funkce secti() zobrazil v prvku s ID vysledek až po stiknutí nově přidaného tlačítka "Zobraz výsledek".
let calculation = document.querySelector("#vysledek").innerHTML;

function showRsesult(){
  calculation.valueOf = secti(4,5);
}

function secti(a, b) {
  let c = a + b;
  return c;
}


 //3.Uprav funkci upozorni() tak, aby se navíc vypisoval text i do konzole a také nahradil text v elementu Čtvereček.
 
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  squareElement.innerHTML ="Gratulace, právě jsi spustila tuto funkci!";
}



