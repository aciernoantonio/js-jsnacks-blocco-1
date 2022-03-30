//chiedere per 10 volte di inserire un numero
let num_list = [];

for (i = 1; i <= 10; i++) {
    let num_new = Number(prompt("Inserisci un numero"));
    
    //calcolo della somma
    sum = num_new + num_list.push(num_new) - 1;    
}

//stampare la somma 

console.log(sum);