// VARIABILI

let age = 25;
let year = 2025;

console.log(age, year);

age = 34; //non uso più la aprola chiave let perche la variabile esiste gia ma cambio solo valore

console.log(age);

let firstName;                                        //prima dichiaro la variabile e posso decidere in futuro il valore
firstName = "Francesco";                              // inserisco il valore della var in questo caso tra""" perche è una stringa 

console.log(firstName);

//COSTANTI   sono una variabile con valore costante 

const POINTS = 100;

// POINTS = 50; non funzionerebbe perche non si puo cambiare valore alla costante

console.log(POINTS);

/* 
JavaScript usa piu tipi di dato: 
- String: serie di caratteri compresi tra apici o virgolette
- Number: numeri di tutti i tipi
- Boolean: un valore speciale che indica vero o falso 
- Null: si utilizza per indicare esplicitamente che una variabile non ha valore
- Undefined: come Null, ma per variabili non ancora definite e viene assegnato dal browser
- Object: sono strutture complesse di dati con proprietà e funzioni
*/

console.log(typeof POINTS);  //ci dice number
console.log(typeof firstName); //ci dice string

firstName = "gianni";
console.log("Ciao mi chiamo " + firstName + " e ho " + age + " anni!"); // aggiorno solo la variabile concatenando 

let ourString = "Io vengo prima. ";
ourString += "Io vengo dopo.";       // con += concateniamo le 2 stringhe e le stampa entrambe in console 
console.log(ourString);

console.log(ourString.length);     // le stringhe hanno proprieta come la lunghezza

console.log(ourString[0]);      //trova la prima lettera 

let nome = "Agamennone";
let lastLetterOfName = nome [nome.length - 1];   //bracket notation: si inserisce un numero e si ottiene il carattere, noi qui vogliamo l'ultima nome e la sua lengh -1 perche l'indice parte da zero

console.log(lastLetterOfName);

let txt = 'Oggi ho svolto 12 ore di lezione';

//metodi di ricerca
let search1 = txt.indexOf('lezione'); // lezione si trova al numero 25 dell'indice, indexOF è il metodo
console.log(search1);

let search2 = txt.lastIndexOf('o');

console.log(search2);

//Metodi per il taglio
//Metodi slice() e substring() estraggono una sezione della stringa e la restituiscono come una nuova stringa senza modificare l'originale 

let taglio1 = txt.slice(4, 10);
console.log(taglio1);

let taglio2 = txt.substring(10, 4);           //funzionano simi ma differenziano per la gestione dei numeri sub string funziona anche al contrario slice no
console.log(taglio2);

// Metodi per sostituzione
let affermazione = "Il miglior browser del mondo è Internet Explorer";

let sost = affermazione.replace("Internet Explorer", "Google Chrome");
console.log(sost);

let upp = affermazione.toUpperCase(); //le parentesi vanno messe anche se lasciate vuote;rende tutto maiuscolo
console.log(upp);

let low = affermazione.toLowerCase(); //tutto minuscolo
console.log(low);

// Metodo split() divide una stringa in una LISTA ordinata di sotto-stringhe, le raggruppa in un array e restituisce questo array(raccolta di elementi dello stesso tipo). la divisione avviene cercando un patterrn fornito come argomento tra le () e indica dove il metodo deve andare a separare.
let string1 = "Ciao mi chiamo Ale";
let arr1 = string1.split('') //lasciando vuoto solo con gli apici in questo caso fa una raccolta di caratteri 0 based e separa ogni carattere
console.log(arr1);

let arr2 = string1.split(' ');// mettendo uno spazio separa ad ogni spazio e taglia e crea un elemento nell' array. Divide parola per parola
console.log(arr2);  //si puo usare per cercare i pumti. e ci dividerebbe i paragrafi

let arr3 = ['M','I','L','O'];

let string2 = arr3.join('') // metodo array join è possibile ottenere una stringa unica chen concatena tutti gli elementi dell'array separati da virgola o da caratteri specificato come argomento del metodo.
console.log(string2);

//Esercizio 1: Salvare un nome in una variabile e stamparlo in console senza l'iniziale.
nome = "Francesco";
let nomeSenzaIniziale = nome.slice(1);
console.log(nomeSenzaIniziale);


// Esercizio 2: Data una stringa, stamparla a console al contrario. Punti in più se risolta in 2 rihe max compreso il console log.

let frase1 = "Quarantaquattro gatti, in fila per sei con il resto di due";
let fraseAlContrario = frase1.split('').reverse().join();
console.log(fraseAlContrario);


// Elabora uno script per estrarre l'estensione di un file ES: immagine86.jpg -> "L'estensione del file è jpg"

let nomeFile = "immagine86.jpg";

let estensione = nomeFile.slice(nomeFile.indexOf('.'));
console.log(estensione);
                                                        //due metodi diversi, il secondo migliore ed elimina anche il . prima del nome dell'estensione

let estensione2 = nomeFile.split('.').pop();
console.log(estensione2);

/* ------------------numbers------------------- */
let likes = 10;
likes++; //incrementa di uno  likes--; decrementa di 1
console.log(likes);

//possiamo usare JS per calcolare il resto. Questa operazione viene anchhe usata per determinare se un numero è pari o dispari: se dividendo il valore per 2 il risultato è 0 è pari, altrimenti è dispari
let resto;
resto = 11 % 3;  // % Vuol dire qual'è il resto di 11/3 ovvero 2
console.log(resto);

let numero = 5;
if (numero % 2 === 0) {
    console.log(numero + ' è pari');
} else {
    console.log(numero + ' è dispari');
}
//Operatori di confronto
/* 
< <= > >= 
== != === !==    
*/


if (5 === '5') {       //i 3 = fanno si che si controlli anche il tipo di variabile infatti dice che non sono uguali perche uno è un numero, l'altro una stringa
    console.log('Sono uguali');
} else {
    console.log('Non sono uguali');
}


// Template string    ALT + 096 su tastierino numerico per avere i backtick

let title = 'I giochi migliori del 2025';
let author = 'Mario';
let like = 30;

 let conc = "L'articolo si chiama \"" + title + "\", è stato scritto da " + author + "e ha raggiunto " + like + " likes.";    // è scomodo si usa altro metodo
 console.log(conc);
let template = `L'articolo si chiama ${title} è stato scritto da ${author} e ha raggiunto ${like} likes.`    //basta usare ${} 

console.log(template);

let htmlTemplate = `
    <h2>${title}<h2>
    <p>${author}</p>
    <span>Questo articolo ha ${like} like</span>`;
    console.log(htmlTemplate);

    //document.write(htmlTemplate);   Non si usa più

    /* gli array ci permettono di memorizzare una collezione di valori correlati fra loro. Sono oggetti 0-based
    
    -Le parentesi quadre indicano l'inizio e la fine di un array
    -Ogni elemento all' interno è separato da virgole
    */
     
    let docenti = ['Milo','Dario','Oscar','Luca']
    console.log(docenti);

    // Possiamo estrarre un singolo elemento specifico utilizzando la bracket motation, andando a richiamere l'indice dell'array

    let primoDocente = docenti[0];
    let terzoDocente = docenti[2];

    console.log(primoDocente,terzoDocente);
    
    
   // let random = ['Milo','Oscar', 34, 30];   //Non conviene per esempio accostare persone ed età in questo modo
//    Possiamo risalire alla lunghezza di un array, ovvero al numero di elementi al suo interno, tramite la proprietà lenght

let numeoDocenti = docenti.length;
console.log(numeoDocenti);

docenti[1] = 'Davide'; // modifichiamo il secondo elemento dell' array che si trova infatti in posizione 1
console.log(docenti);

docenti.push('Marco', 'Paola')    // push li aggiunge alla fine dell'array
console.log(docenti);
docenti.unshift('Paride');   // unshift aggiunge all'inizio
console.log(docenti);

// rimuovere elementi
docenti.pop();    //rimuove l'ultimo
docenti.shift(); //rimuove il primo
console.log(docenti);

//join()

let tuttiDocenti = docenti.join(', ');   //gli elementi dell'array diventano una stringa con gli elementi separati da spazio e virgola che abbiamo messo nelle parentesi tonde
console.log(tuttiDocenti);

// indexOf()
console.log(docenti.indexOf('Oscar'));  //ci dice due infatti è il terzo elemento

// ordinamento
console.log(docenti.sort());  //stampa un array in ordine alfabetico

console.log(docenti.reverse()); //ordine alfabetico decrescente

// Ciclo for --> fintanto che .... allora esegui...    percio se < 5 allora e stampa poi aggiunge uno e cosi via finche le condizioni sono vere 
for (let i = 0; i < 5; i++) {
    console.log(`In loop: ${i}`);
}

console.log('Loop finito');

let studenti = ['marco', 'luca', 'silvia', 'giovanni'];   

for (let i = 0; i < studenti.length; i++) {
    console.log(i);
     console.log(studenti[i]);           // mettiamo i perche si aspetta un numero nelle[] che indichi il numero di indice
}

//  Scrivi un loop che itera da 0 a 15. Per ogni ciclo controlla se il numero è pari o dispari. Mostra il risultato in console.

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i, 'è pari');
}else {
    console.log(i, 'è dispari');
}
}

// Ciclo while    funzionano in maniera simile ma hanno diversa sintassi. Richiede solo la condizione

let i = 0;   
while (i < 5) {
    console.log(`In loop: ${i}`);   
    i++;
}

// let input;
// while (input !== 'esci') {
//     input = prompt("inserisci un comando(digita 'esci' per uscire)");    //fa comparire un prompt in cui va digitato esci
// }

// IF statement dice di eseguire un codice fra le{} se viene rispettata condizione fra le ()
let age2 = 25;
if (age2 > 20) {
    console.log('Tu hai più di 20 anni');
}

//  IF ELSE

let password = 'password';

if (password.length >= 8) {
    console.log('Bravo la tua password spacca');
}else {
    console.log('La password deve contenere almeno 8 caratteri');
}

// Else If
let username = 'bohchenesoioditecazzo';

if (username.length > 12){
    console.log('Lo username non deve superare i 12 caratteri');
}else if (username.length >= 8) {
    console.log('Il tuo username è perfetto');
}else {
    console.log('Lo username deve avere almeno 8 caratteri');
}

//if in una sola riga    Operatore Ternario solo se si hanno due opzioni
let eta = 18;
let stato = (eta >= 18) ? "Maggiorenne" : "Minorenne"        // condizione (?)  "se vera" oppure(:) "se falsa"
console.log(stato);
















