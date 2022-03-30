//crea array vuoto
let num = [];

let ins_num;

//chiedi per 6 volte di inserire un numero

for (let i = 1; i <= 6; i++){
    ins_num = parseInt(prompt("Inserisci un numero"))

    if (ins_num % 2 != 0) {
        num.push(ins_num);
    } else {
       console.log(ins_num); 
    }
}

console.log(`I numeri dispari sono ${num}`);