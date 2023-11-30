// Native
import { join } from 'path'
import { format } from 'url'

// Packages
import { BrowserWindow, app, screen } from 'electron'
import isDev from 'electron-is-dev'
import prepareNext from 'electron-next'

const createWindow = async () => {
  const {width, height} = screen.getPrimaryDisplay().workAreaSize
  const mainWindow = new BrowserWindow({
    useContentSize: true,
    x: 0,
    y: 0,
    width: width,
    height: height,
    kiosk: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  })
  
  const url = isDev
  ? 'http://localhost:8000/'
  : format({
    pathname: join(__dirname, '../renderer/out/index.html'),
    protocol: 'file:',
    slashes: true,
  })
  
  await mainWindow.loadURL(url)
  // mainWindow.webContents.openDevTools()
}

// Prepare the renderer once the app is ready
app.whenReady().then(async () => {
  await prepareNext('./renderer')
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Quit the app once all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
