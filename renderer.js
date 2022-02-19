// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
let tobackgroundBlack = true
document.querySelector("#app").addEventListener('click', () => {
  if (tobackgroundBlack) {
    document.querySelector('#app').style.setProperty('background', "black")
  } else {
    document.querySelector('#app').style.removeProperty('background')
  }
  
  tobackgroundBlack = !tobackgroundBlack
})
