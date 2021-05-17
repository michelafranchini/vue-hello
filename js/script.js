// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.

var app = new Vue(
    {
        el: "#root", 
        data: {
            messaggio: "Eccoci finalmente su VueJS!", 
            immagine: "https://www.luigisabbetti.it/wp-content/uploads/2018/04/guida-vue-js-italiano.png"
        }
    }
); 