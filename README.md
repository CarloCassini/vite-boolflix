# booflix

## Milestone 0: (fatto)

Progettare la struttura del global state sulla linea degli esercizi svolti nei giorni
precedenti.

### svolgimento:

    - creo un progetto e installo al suo interno i seguenti programmi: (fatto)
        -   bootstrap
        - fontawesome
        - axios
    - creo uno store e lo implemento nel progetto (fatto)

    - creo un file scss generale (fatto)
    - creo e collego le componenti del progetto

## Milestone 1: (fatto)

Creare un layout base con una searchbar (una input e un button) in cui possiamo
scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il
bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni
film trovato:

1. Titolo
2. Titolo Originale
3. Lingua
4. Voto

### svolgimento:

- Creare un layout base con una searchbar (una input e un button) in cui possiamo
  scrivere completamente o parzialmente il nome di un film. - la inserisco grazie a bootstrap nel modulo ----
- scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il bottone.
  - lo gestisco grazie al v-model nella label del form in questione
    - questo v-model valorizzerà una variabile denominata searchValue
- cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
  - eseguo una chiamata ad axios per recuperare l'array dei film cercati
  - mappo la risposta per avere solo le variabili dell'array che mi interessano (vedi elenco nella consegna)
- Vogliamo dopo la risposta dell’API visualizzare a schermo i valori per ogni film trovato:
  - al momento le stampo nelle card grazie al v-for e alla scrittura tra le {{ }}

## Milestone 2 (fatto):

Trasformiamo la stringa statica della lingua in una vera e propria bandiera della
nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della
nazione ritornata dall’API (le flag non ci sono in FontAwesome).
Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca
dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando
attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di
risposta diversi, simili ma non sempre identici)
Qui un esempio di chiamata per le serie tv:
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=s
crubs

### svolgimento

- Trasformiamo la stringa statica della lingua in una vera e propria bandiera della
  nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della
  nazione ritornata dall’API (le flag non ci sono in FontAwesome).
  - lego all'oggetto recuperato dalla API anche il valore della flag
  - lo stampo all'interno della card
- Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca eccecc (fatto)

## Milestone 3:

In questa milestone come prima cosa aggiungiamo la copertina del film o della serie
al nostro elenco. Ci viene passata dall’API solo la parte finale dell’URL, questo
perché poi potremo generare da quella porzione di URL tante dimensioni diverse.
Dovremo prendere quindi l’URL base delle immagini di TMDB:
https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare
(troviamo tutte le dimensioni possibili a questo link:
https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) per poi aggiungere la
parte finale dell’URL passata dall’API.
Esempio di URL:
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da
permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5,
lasciando le restanti vuote (troviamo le icone in FontAwesome).
Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze
piene (o mezze vuote :P)

### svolgimento

- In questa milestone come prima cosa aggiungiamo la copertina del film o della serie
  - aggiungo anche il valore della copertina dentro l'elemento reso dall'api(fatto)
  - costruisco il link della copertina grazie a una computed. (fatto)
  - stampo la copertina facendo bind in un tag img(fatto)

-Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, (stelle piene e vuote)

- collego le stelline di fontawesome al progetto(fatto)
- stampo le stelline sotto il valore della votazione.(fatto)

## Milestone 4:

Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp,
creando un layout completo simil-Netflix:
● Un header che contiene logo e search bar
● Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma
di “card” in cui lo sfondo è rappresentato dall’immagine di copertina (consiglio
la poster_path con w342)
● Andando con il mouse sopra una card (on hover), appaiono le informazioni
aggiuntive già prese nei punti precedenti più la overview
Mockup:

### SVOLGIMENTO:

- creare il layout
