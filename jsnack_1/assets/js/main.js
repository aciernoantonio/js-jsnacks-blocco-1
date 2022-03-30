//inserimento numeri

let num_1 = Number(prompt("Inserisci il primo numero"));
let num_2 = Number(prompt("Inserisci il secondo numero"));

//stampa valore più grande

if (num_1 > num_2) {
    console.log(`${num_1} è più grande!`);
} else if (num_1 == num_2) {
    console.log("Hanno lo stesso valore!");
} else {
    console.log(`${num_2} è più grande!`);
}