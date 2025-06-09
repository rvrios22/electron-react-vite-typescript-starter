import { getStaticData } from "./resourceManager"

const electron = require('electron')

electron.contextBridge.exposeInMainWorld('electron', {
    subscribeStatistics: (callback: (statisttics: any) => void) => callback({}),
    getStaticData: () => console.log('static')
})