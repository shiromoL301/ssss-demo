import path from 'path'
import { app, BrowserWindow } from 'electron'

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      worldSafeExecuteJavaScript: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    width: 800,
    height: 500,
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools({ mode: 'detach' })
  }

  mainWindow.setMenu(null)
  mainWindow.loadFile('dist/index.html')
}

app.whenReady().then(async () => {
  createWindow()
})

app.once('window-all-closed', () => app.quit())
