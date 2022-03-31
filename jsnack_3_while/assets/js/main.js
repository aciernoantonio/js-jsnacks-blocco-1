//chiedere per 10 volte all'utente di inserire

let i = 0;
let sum = 0;

while (i < 10) {
    let num = parseInt(prompt("Inserisci un numero"));

    //calcolo somma
    sum = sum + num;

    i++;
}

console.log(sum);