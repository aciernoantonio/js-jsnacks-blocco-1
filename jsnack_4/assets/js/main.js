//dichiarazione lista invitati

let invitati = ["marco", "fabio", "enzo", "franco"];

//chiedere nome all'utente
let user_name = prompt("Qual è il tuo nome?");

//controllo nome nella lista
if (invitati.includes(user_name)) {
    console.log("Il tuo nome è sulla lista...puoi entrare!")
} else {
    console.log("Il tuo nome non è sulla lista...va a farti un kebab!")
}