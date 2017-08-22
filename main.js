const electron = require("electron");
const { app, BrowserWindow } = electron;

console.log("Before On Ready");

let win = null;

app.on("ready", () => {
    console.log("Creating Browser Windows");

    win = new BrowserWindow({ width: 800, height: 600 });

    console.log("Loading index.html");

    win.loadURL(`file://${__dirname}/index.html`);

    win.on("closed", function() {
        win = null;
    });
});

app.on("window-all-closed", function() {
    console.log("App Quitting");

    app.quit();
});

app.on("browser-window-created", function() {
    console.log("New Browser Window Created");
});
