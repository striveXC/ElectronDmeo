const { app, BrowserWindow } = require('electron');

const createMain = () => {
	let win = new BrowserWindow({
		show: false,
		width: 800,
		height: 800,
		x: 1000,
		y: 120,
		alwaysOnTop: true,
		title: "xc的应用",
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true,
			contextIsolation: false,
		}
	})
	win.webContents.toggleDevTools();

	win.loadFile("index.html")

	require('@electron/remote/main').initialize()
	require('@electron/remote/main').enable(win.webContents)

	win.on("ready-to-show", () => {
		win.show()
	})

	win.on("close", () => {
		win = null
	})
}

app.whenReady().then(() => {
	createMain();
})

app.on("window-all-closed", () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
})