import { app, BrowserWindow } from 'electron'
import path from 'path'
import isDev from './utils/isDev.js'
import { getPreloadPath } from './utils/pathResolver.js'
/* 
  This if check remove the following error from constantly running in the terminal.
  EGL Driver message (Error) eglQueryDeviceAttribEXT: Bad attribute.
  There may be a performance hit depending on your application.
  Remove if necessary, does not affect app building if its not there, just removes unneccesary erros in terminal.
*/
import os from 'os';
if (os.platform() === 'darwin' && os.arch() === 'x64') {
  app.disableHardwareAcceleration();
}
app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: getPreloadPath()
        }
    })
    if (isDev()) {
        mainWindow.loadURL('http://localhost:5123')
    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'))
    }
})
