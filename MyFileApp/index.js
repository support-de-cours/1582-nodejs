"use strict";

// Import du module FileSystem de NodeJS
const fs = require('fs');

// Lit le contenu du fichier "hello.txt"
// Decode le contenu en UTF-8
// Affecte le contenu à la constante "content"
const content = fs.readFileSync('hello.txt', "utf8");

// Affiche la constante, donc le texte du fichier "hello.txt"
console.log( content );

// AJOUTE du contenu à la fin du fichier "hello.txt"
fs.appendFileSync('hello.txt', "Hello Bobby !!");




function prependFile()
{
    // Lit le contenu du fichier

    // Concat. une chaine avant le contenu du fichier

    // Remplace le contenu du fichier par la nouvelle chaine

    // retourne la nouvelle chaine

}
prependFile('hello.txt', "Ceci est un texte au début un fichier.\n");