//inserire due parole

let string_1 = prompt("Inserisci la prima parola");
let string_2 = prompt("Inserisci la seconda parola");

//restituisci prima la parola più corta e poi la più lunga

if (string_1.length > string_2.length) {

    console.log(`La parola ${string_2} è più corta e la parola ${string_1} è più lunga`);

} else if (string_1.length == string_2.length) {

    console.log(`le parole ${string_1} e ${string_2} sono uguali`);

} else {
    console.log(`la parola ${string_1} è più corta e la parola ${string_2} è più lunga`);
}
