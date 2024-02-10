console.log("Launching Delta");

const electron = require("electron");
const app = electron.app;
const path = require("path");
const url = require("url");

let win;

function createWindow() {
    win = new electron.BrowserWindow({
        autoHideMenuBar: true,
        titleBarStyle: "hidden",
        width: 300,
        height: 250,
        frame: false,
        titleBarStyle: 'hidden',
        resizable: false,
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, "src/index.html"),
        protocol: 'file',
        slashes: true
    }));

    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow);