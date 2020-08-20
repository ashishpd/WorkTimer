const { app, BrowserWindow, Menu, ipcMain, shell } = require('electron')

let mainWindow

function createMainWindow() {
    mainWindow = new BrowserWindow({
      title: 'WorkTimer',
      width: 450,
      height: 400,      
      backgroundColor: 'white',
      webPreferences: {
        nodeIntegration: true,
      },
    })

    mainWindow.loadFile('./app/index.html')      
}

app.on('ready', createMainWindow)
  