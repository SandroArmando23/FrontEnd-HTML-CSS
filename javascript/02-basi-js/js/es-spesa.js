/* 
Lista della spesa:
1 - Creare due array
    -il primo contiene la lista dei prodotti da comprare
    -il secondo i prezzi dei prodotti

2 - Stampare in console il secondo elemento dell'array e il suo prezzo

3 - Popolare la lista della spesa cha ha id lista con un list element (li) per ogni prodotto, che contenga il nome del prodotto e il suo costo

4 - Costruire un elemento html p nel quale verrà stampato il subtotale, cioè il tot senza iva

5 - Costruire un p nel quale verrà stampata l'iva (22%)

6 - Calcolare il totale dei prezzi dei prodotti compreso di iva e scriverlo nel paragrafo con  id totale

MINIMO 8 PRODOTTI
*/

let prodotti = ["Pane", "Nutella", "Biscotti","Pasta", "Carne", "Insalata", "Birra", "Farina"];
let prezzi = [1.80, 5.66, 2.00, 0.75, 12, 0.90, 2.45, 1];
    console.log(prodotti[1], prezzi [1]);

let lista = document.getElementById('lista');   // prendo elemento html 

for (let i = 0; i < prodotti.length; i++) {
    console.log(prodotti[i], prezzi[i]);
   lista.innerHTML += `<li>${prodotti[i]} ${prezzi[i].toFixed(2)}€</li>`; // solo con uguale stampa solo l'ultima voce della lista e si deve usare +=
}                                                                        //con .tofixed rendiamo tutte le cifre uguali indicando quanti decimali vuoi fra parentesi

