// Integration des composants "app" et "BrowserWidow" de Electron
const { app, BrowserWindow } = require('electron');


// Createion de la fonction de demarrage
// => Doit creer une fenetre d'application
const createWindow = () => {

    // Definition des propriété de la fenetre d'application
    const win = new BrowserWindow({
        width: 900,
        height: 800,
    });

    // La fenetre d'application doit charger le fichier index.html
    win.loadFile('index.html');

}

// Lorsque Electron est pret on declenche l'appel de la fonction createWindow()
app.whenReady().then(() => createWindow());