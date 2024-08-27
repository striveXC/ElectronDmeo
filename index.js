const { BrowserWindow } = require('@electron/remote')

window.addEventListener("DOMContentLoaded", () => {
  const obtn = document.getElementById("btn");
  obtn.addEventListener("click", () => {
    console.log(1111);
    let indexMain = new BrowserWindow({
      width: 200,
      height: 200,
      alwaysOnTop: true,
      x: 1200,
      y: 200
    })
    indexMain.loadFile("list.html")
  })
})