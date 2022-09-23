"use strict";

// Liste des arguments NodeJS
// console.log( process.argv );

// Recupère l'argument numéro 3
// console.log( process.argv[2] );

// const args = process.argv;
// const username = args[2];
// const age = args[3];

// console.log( `Name : ${username}\nAge : ${age}` );


const args = require('./utils/args');

console.log( args.name );


// const data = args();
// console.log( data.age );

