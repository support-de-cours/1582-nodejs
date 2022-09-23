"use strict";

// Import du composant "https" de node, pour executer une requete sur une adresse HTTP SSL
const https = require('https');

// Import du composant args (fichiers : args.js)
const args = require('./args');

// Definition de la devise par defaut
const defaultCurrency = "USD";

// Definition de la devise
// + test de l'existance de la propriété "currency" sur l'objet "args"
let currency = args.currency ?? defaultCurrency;

// Definition des options de l'url
const options = {
    host: "api.coindesk.com",
    path: "/v1/bpi/currentprice.json",
    method: 'GET'
};

// On execute la requête (http.request)
const request = https.request(options, response => {

    // Definition d'une variable "content" qui nous servira au stockage des données
    let content = '';

    // Lorsque la "response" reçoit des données, on attrape les données avec "chunk" 
    // pour les ajouter à la variable "content"
    response.on('data', chunk => {
        content += chunk;
    });
    
    // Lorsque toutes les données sont réçues, on execute l'analyse des données json
    // stockée dans la variable "content"
    response.on('end', () => {

        // Convertion des données "application/javascript" en "json"
        const json = JSON.parse(content);

        // Récupération de la liste des prix du BTC (Bitcoin Price Index)
        const bpi = json.bpi;

        // Recupération du prix du BTC dans la devise souhaité
        const price = bpi[currency];

        // // Si "price" contient une donnée, on affiche le taux de change
        // if (price)
        // {
        //     console.log( `1 BTC vaux ${price.rate} ${currency}` );
        // }

        // // si "price " ne contient pas de donnée on affiche une message de devise inconnu
        // else 
        // {
        //     console.log("La devise est inconnue");
        // }

        price 
            ? console.log( `1 BTC vaux ${price.rate} ${currency}` )
            : console.log("La devise est inconnue")
        ;
    });
});

request.end();