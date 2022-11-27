/*ESERCIZI JAVASCRIPT

        21) Date le variabili x = "John" e y = "Doe", mostra in console "John <> Doe" ***
        22) Crea un oggetto con le seguenti proprietà: name, surname, email***
        23) Cancella la proprietà email dall'oggetto appena creato***
        24) Crea un array contenente 10 stringhe***
        25) Mostra in console ogni stringa del precedente array
        26) Crea un array contenente 100 numeri random
        27) Scrivi una funzione per trovare il valore massimo e il valore minimo dall'array appena creato
        28) Crea un array di array, nel quale ogni array "figlio" ha 10 numeri random
        29) Crea una funzione che riceve 2 array come parametri e ritorni quello con più elementi
        30) Crea una funzione che riceve 2 array numerici come parametri e ritorna quello con la somma totale degli elementi maggiore
        */

//21//

let x ="John";
let y = "Doe";
console.log(x + '< >' + y);

//22//

var Utente = {
name:'John',
surname:'Doe',
email:'js@email.com'
}

//23//

delete Utente.email;

//24//

const Strings = [
"lorem",
"ipsum",
"dolor",
"sit",
"amet",
"consectetur",
"adipiscing",
"elit",
"sed",
"do"
]

//25//

//26//

const numbers = Array(100)
.fill()
.map(() => Math.floor(50 * Math.random()));

console.log(numbers)


//27//

//28//

//29//

//30//
