const { app, BrowserWindow, Menu, ipcMain, shell } = require('electron')

let mainWindow

function createMainWindow() {
    mainWindow = new BrowserWindow({
      title: 'WorkTimer',
      width: 450,
      height: 500,      
      backgroundColor: 'white',
      webPreferences: {
        nodeIntegration: true,
      },
      transparent: true, 
      frame: true
    })

    mainWindow.loadFile('./app/index.html')      
}

app.on('ready', createMainWindow)
  