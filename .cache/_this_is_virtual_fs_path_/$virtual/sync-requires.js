
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\16127\\Coding Folder\\liturgical-template-maker\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\16127\\Coding Folder\\liturgical-template-maker\\src\\pages\\index.js"))
}

