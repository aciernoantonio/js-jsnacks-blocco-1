//chiedere per 10 volte di inserire un numero
let num_list = [];
let sum = 0;

for (i = 0; i < 10; i++) {
    let num_new = parseInt(prompt("Inserisci un numero"));
    
    //calcolo della somma
    sum = sum + num_new;  
}

//stampare la somma 
console.log(sum);
