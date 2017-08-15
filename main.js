const electron = require('electron')
const {app, BrowserWindow} = electron

console.log("Before On Ready")

app.on('ready', () => {
    console.log("Creating Browser Windows")
    let win = new BrowserWindow({width: 800, height: 600})
    console.log("Loading index.html")
    win.loadURL(`file://${__dirname}/index.html`)
})