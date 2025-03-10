const lista = `
Mele;5;Supermercato
Banane;3;Supermercato
Arance;4;Supermercato
Pane;2;Panetteria
Latte;1;Supermercato
Uova;12;Supermercato
Carote;500;Supermercato
Patate;1;Supermercato
Pollo;500;Macelleria
Manzo;300;Macelleria
Pesce;400;Pescheria
Gamberetti;200;Pescheria
Calamari;300;Pescheria
Vino rosso;1;Enoteca`


//1) creare una funzione che, partendo da lista, ritorni un array di oggetti: {nome: value, quantità: value, provenienza:value}

function objectList(str) {
    return str.split("\n").map(item => {
        const match = item.match(/^(.+);(\d+);(.+)$/);
        if (!match) return null; // Se la riga non è valida, la ignora

        let [_, nome, quantita, provenienza] = match; 

        return { nome, quantita: Number(quantita), provenienza };
    }).filter(item => item !== null); // Rimuove i nulli
}

const listaO = objectList(lista);
// console.log(listaO);

//2) creare una funzione che, partendo da lista, ritorni un array di oggetti che hanno come provenienza il supermercato: {nome: value, quantità: value, provenienza:value}


function objectListSuper(str) {
    return str.split("\n").map(item => {
        const match = item.match(/^(.+);(\d+);(.+)$/);
        if (!match) return null; 

        let [_, nome, quantita, provenienza] = match; 

        return { nome, quantita: Number(quantita), provenienza };
    }).filter(item => item !== null) 
      .filter(item => item.provenienza === "Supermercato");
}

const listaSupermercato = objectListSuper(lista);
// console.log(listaSupermercato);


//3) creare una funzione che, partendo da lista e da una stringa che indica la proveneienzz, ritorni un array di oggetti: {nome: value, quantità: value, provenienza:value}

function objectListWhere(str, provenienza) {
    return str.split("\n").map(item => {
        const match = item.match(/^(.+);(\d+);(.+)$/);
        if (!match) return null; 

        let [_, nome, quantita, provenienza] = match; 

        return { nome, quantita: Number(quantita), provenienza };
    }).filter(item => item !== null) 
      .filter(item => item.provenienza.toLowerCase() === where.toLowerCase());
}

const where = "SUperMercato";
const objList = objectListWhere(lista)
console.log(objList);

//4) creare una funzione che, partendo da lista e da un array di keys, ritorni un array di oggetti: {keys[0]: value, keys[1]: value, keys[2]: value}


function nameList(str, keys) {
    return str.split("\n").map(item => {
        const match = item.match(/^(.+);(\d+);(.+)$/);
        if (!match) return null; 

        let [_, nome, quantita, provenienza] = match; 

        let obj = {};
        obj[keys[0]] = nome;
        obj[keys[1]] = Number(quantita);
        obj[keys[2]] = provenienza;

        return obj;
    }).filter(item => item !== null); // Rimuove i nulli
}

const nomi = ["comprare", "quanti", "dove"];
const named = nameList(lista, nomi);
console.log(named);







