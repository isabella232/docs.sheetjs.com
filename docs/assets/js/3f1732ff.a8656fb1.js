"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5238],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(k,s(s({ref:t},d),{},{components:n})):a.createElement(k,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8296:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],l={sidebar_position:1},i="Data Import",p={unversionedId:"solutions/input",id:"solutions/input",title:"Data Import",description:"Parsing Workbooks",source:"@site/docs/06-solutions/01-input.md",sourceDirName:"06-solutions",slug:"/solutions/input",permalink:"/docs/solutions/input",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Interface Summary",permalink:"/docs/interface"},next:{title:"Data Processing",permalink:"/docs/solutions/processing"}},d={},u=[{value:"Parsing Workbooks",id:"parsing-workbooks",level:2},{value:"API",id:"api",level:4},{value:"Examples",id:"examples",level:4},{value:"Processing JSON and JS Data",id:"processing-json-and-js-data",level:2},{value:"API",id:"api-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"Processing HTML Tables",id:"processing-html-tables",level:2},{value:"API",id:"api-2",level:4},{value:"Examples",id:"examples-2",level:4}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-import"},"Data Import"),(0,o.kt)("h2",{id:"parsing-workbooks"},"Parsing Workbooks"),(0,o.kt)("h4",{id:"api"},"API"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Extract data from spreadsheet bytes")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var workbook = XLSX.read(data, opts);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"read"),' method can extract data from spreadsheet bytes stored in a JS string,\n"binary string", NodeJS buffer or typed array (',(0,o.kt)("inlineCode",{parentName:"p"},"Uint8Array")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayBuffer"),")."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Read spreadsheet bytes from a local file and extract data")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var workbook = XLSX.readFile(filename, opts);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"readFile")," method attempts to read a spreadsheet file at the supplied path.\nBrowsers generally do not allow reading files in this way (it is deemed a\nsecurity risk), and attempts to read files in this way will throw an error."),(0,o.kt)("p",null,"The second ",(0,o.kt)("inlineCode",{parentName:"p"},"opts")," argument is optional. ",(0,o.kt)("a",{parentName:"p",href:"../api/parse-options"},'"Parsing Options"'),"\ncovers the supported properties and behaviors."),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Here are a few common scenarios (click on each subtitle to see the code):"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Local file in a NodeJS server")," (click to show)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"readFile")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"fs.readFileSync")," under the hood:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var XLSX = require("xlsx");\n\nvar workbook = XLSX.readFile("test.xlsx");\n')),(0,o.kt)("p",null,"For Node ESM, the ",(0,o.kt)("inlineCode",{parentName:"p"},"readFile")," helper is not enabled. Instead, ",(0,o.kt)("inlineCode",{parentName:"p"},"fs.readFileSync"),"\nshould be used to read the file data as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Buffer")," for use with ",(0,o.kt)("inlineCode",{parentName:"p"},"XLSX.read"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { readFileSync } from "fs";\nimport { read } from "xlsx/xlsx.mjs";\n\nconst buf = readFileSync("test.xlsx");\n/* buf is a Buffer */\nconst workbook = read(buf);\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Local file in a Deno application")," (click to show)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"readFile")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Deno.readFileSync")," under the hood:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// @deno-types="https://deno.land/x/sheetjs/types/index.d.ts"\nimport * as XLSX from \'https://deno.land/x/sheetjs/xlsx.mjs\'\n\nconst workbook = XLSX.readFile("test.xlsx");\n')),(0,o.kt)("p",null,"Applications reading files must be invoked with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--allow-read")," flag.  The\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/deno/"},(0,o.kt)("inlineCode",{parentName:"a"},"deno")," demo")," has more examples")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,'User-submitted file in a web page ("Drag-and-Drop")')," (click to show)"),(0,o.kt)("p",null,"For modern websites targeting Chrome 76+, ",(0,o.kt)("inlineCode",{parentName:"p"},"File#arrayBuffer")," is recommended:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// XLSX is a global from the standalone script\n\nasync function handleDropAsync(e) {\n  e.stopPropagation(); e.preventDefault();\n  const f = e.dataTransfer.files[0];\n  /* f is a File */\n  const data = await f.arrayBuffer();\n  /* data is an ArrayBuffer */\n  const workbook = XLSX.read(data);\n\n  /* DO SOMETHING WITH workbook HERE */\n}\ndrop_dom_element.addEventListener("drop", handleDropAsync, false);\n')),(0,o.kt)("p",null,"For maximal compatibility, the ",(0,o.kt)("inlineCode",{parentName:"p"},"FileReader")," API should be used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function handleDrop(e) {\n  e.stopPropagation(); e.preventDefault();\n  var f = e.dataTransfer.files[0];\n  /* f is a File */\n  var reader = new FileReader();\n  reader.onload = function(e) {\n    var data = e.target.result;\n    /* reader.readAsArrayBuffer(file) -> data will be an ArrayBuffer */\n    var workbook = XLSX.read(data);\n\n    /* DO SOMETHING WITH workbook HERE */\n  };\n  reader.readAsArrayBuffer(f);\n}\ndrop_dom_element.addEventListener("drop", handleDrop, false);\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://oss.sheetjs.com/sheetjs/"},"https://oss.sheetjs.com/sheetjs/")," demonstrates the FileReader technique.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"User-submitted file with an HTML INPUT element")," (click to show)"),(0,o.kt)("p",null,"Starting with an HTML INPUT element with ",(0,o.kt)("inlineCode",{parentName:"p"},'type="file"'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<input type="file" id="input_dom_element">\n')),(0,o.kt)("p",null,"For modern websites targeting Chrome 76+, ",(0,o.kt)("inlineCode",{parentName:"p"},"Blob#arrayBuffer")," is recommended:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// XLSX is a global from the standalone script\n\nasync function handleFileAsync(e) {\n  const file = e.target.files[0];\n  const data = await file.arrayBuffer();\n  /* data is an ArrayBuffer */\n  const workbook = XLSX.read(data);\n\n  /* DO SOMETHING WITH workbook HERE */\n}\ninput_dom_element.addEventListener("change", handleFileAsync, false);\n')),(0,o.kt)("p",null,"For broader support (including IE10+), the ",(0,o.kt)("inlineCode",{parentName:"p"},"FileReader")," approach is recommended:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function handleFile(e) {\n  var file = e.target.files[0];\n  var reader = new FileReader();\n  reader.onload = function(e) {\n    var data = e.target.result;\n    /* reader.readAsArrayBuffer(file) -> data will be an ArrayBuffer */\n    var workbook = XLSX.read(e.target.result);\n\n    /* DO SOMETHING WITH workbook HERE */\n  };\n  reader.readAsArrayBuffer(file);\n}\ninput_dom_element.addEventListener("change", handleFile, false);\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/oldie/"},(0,o.kt)("inlineCode",{parentName:"a"},"oldie")," demo")," shows an IE-compatible fallback scenario.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,'Fetching a file in the web browser ("Ajax")')," (click to show)"),(0,o.kt)("p",null,"For modern websites targeting Chrome 42+, ",(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," is recommended:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// XLSX is a global from the standalone script\n\n(async() => {\n  const url = "http://oss.sheetjs.com/test_files/formula_stress_test.xlsx";\n  const data = await (await fetch(url)).arrayBuffer();\n  /* data is an ArrayBuffer */\n  const workbook = XLSX.read(data);\n\n  /* DO SOMETHING WITH workbook HERE */\n})();\n')),(0,o.kt)("p",null,"For broader support, the ",(0,o.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," approach is recommended:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var url = "http://oss.sheetjs.com/test_files/formula_stress_test.xlsx";\n\n/* set up async GET request */\nvar req = new XMLHttpRequest();\nreq.open("GET", url, true);\nreq.responseType = "arraybuffer";\n\nreq.onload = function(e) {\n  var workbook = XLSX.read(req.response);\n\n  /* DO SOMETHING WITH workbook HERE */\n};\n\nreq.send();\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/xhr/"},(0,o.kt)("inlineCode",{parentName:"a"},"xhr")," demo")," includes a longer discussion and more examples."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://oss.sheetjs.com/sheetjs/ajax.html"},"http://oss.sheetjs.com/sheetjs/ajax.html")," shows fallback approaches for IE6+.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Local file in a PhotoShop or InDesign plugin")," (click to show)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"readFile")," wraps the ",(0,o.kt)("inlineCode",{parentName:"p"},"File")," logic in Photoshop and other ExtendScript targets.\nThe specified path should be an absolute path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'#include "xlsx.extendscript.js"\n\n/* Read test.xlsx from the Documents folder */\nvar workbook = XLSX.readFile(Folder.myDocuments + "/test.xlsx");\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/extendscript/"},(0,o.kt)("inlineCode",{parentName:"a"},"extendscript")," demo")," includes a more complex example.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Local file in an Electron app")," (click to show)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"readFile")," can be used in the renderer process:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/* From the renderer process */\nvar XLSX = require("xlsx");\n\nvar workbook = XLSX.readFile(path);\n')),(0,o.kt)("p",null,"Electron APIs have changed over time.  The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/electron/"},(0,o.kt)("inlineCode",{parentName:"a"},"electron")," demo"),"\nshows a complete example and details the required version-specific settings.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Local file in a mobile app with React Native")," (click to show)"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/react"},(0,o.kt)("inlineCode",{parentName:"a"},"react")," demo")," includes a sample React Native app."),(0,o.kt)("p",null,"Since React Native does not provide a way to read files from the filesystem, a\nthird-party library must be used.  The following libraries have been tested:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://npm.im/react-native-file-access"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-file-access")))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"base64")," encoding returns strings compatible with the ",(0,o.kt)("inlineCode",{parentName:"p"},"base64")," type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import XLSX from "xlsx";\nimport { FileSystem } from "react-native-file-access";\n\nconst b64 = await FileSystem.readFile(path, "base64");\n/* b64 is a base64 string */\nconst workbook = XLSX.read(b64, {type: "base64"});\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://npm.im/react-native-fs"},(0,o.kt)("inlineCode",{parentName:"a"},"react-native-fs")))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ascii")," encoding returns binary strings compatible with the ",(0,o.kt)("inlineCode",{parentName:"p"},"binary")," type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import XLSX from "xlsx";\nimport { readFile } from "react-native-fs";\n\nconst bstr = await readFile(path, "ascii");\n/* bstr is a binary string */\nconst workbook = XLSX.read(bstr, {type: "binary"});\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"NodeJS Server File Uploads")," (click to show)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"read")," can accept a NodeJS buffer.  ",(0,o.kt)("inlineCode",{parentName:"p"},"readFile")," can read files generated by a\nHTTP POST request body parser like ",(0,o.kt)("a",{parentName:"p",href:"https://npm.im/formidable"},(0,o.kt)("inlineCode",{parentName:"a"},"formidable")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const XLSX = require("xlsx");\nconst http = require("http");\nconst formidable = require("formidable");\n\nconst server = http.createServer((req, res) => {\n  const form = new formidable.IncomingForm();\n  form.parse(req, (err, fields, files) => {\n    /* grab the first file */\n    const f = Object.entries(files)[0][1];\n    const path = f.filepath;\n    const workbook = XLSX.readFile(path);\n\n    /* DO SOMETHING WITH workbook HERE */\n  });\n}).listen(process.env.PORT || 7262);\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/server"},(0,o.kt)("inlineCode",{parentName:"a"},"server")," demo")," has more advanced examples.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Download files in a NodeJS process")," (click to show)"),(0,o.kt)("p",null,"Node 17.5 and 18.0 have native support for fetch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const XLSX = require("xlsx");\n\nconst data = await (await fetch(url)).arrayBuffer();\n/* data is an ArrayBuffer */\nconst workbook = XLSX.read(data);\n')),(0,o.kt)("p",null,"For broader compatibility, third-party modules are recommended."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://npm.im/request"},(0,o.kt)("inlineCode",{parentName:"a"},"request"))," requires a ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," encoding to yield Buffers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var XLSX = require("xlsx");\nvar request = require("request");\n\nrequest({url: url, encoding: null}, function(err, resp, body) {\n  var workbook = XLSX.read(body);\n\n  /* DO SOMETHING WITH workbook HERE */\n});\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://npm.im/axios"},(0,o.kt)("inlineCode",{parentName:"a"},"axios"))," works the same way in browser and in NodeJS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const XLSX = require("xlsx");\nconst axios = require("axios");\n\n(async() => {\n  const res = await axios.get(url, {responseType: "arraybuffer"});\n  /* res.data is a Buffer */\n  const workbook = XLSX.read(res.data);\n\n  /* DO SOMETHING WITH workbook HERE */\n})();\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Download files in an Electron app")," (click to show)"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"net")," module in the main process can make HTTP/HTTPS requests to external\nresources.  Responses should be manually concatenated using ",(0,o.kt)("inlineCode",{parentName:"p"},"Buffer.concat"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const XLSX = require("xlsx");\nconst { net } = require("electron");\n\nconst req = net.request(url);\nreq.on("response", (res) => {\n  const bufs = []; // this array will collect all of the buffers\n  res.on("data", (chunk) => { bufs.push(chunk); });\n  res.on("end", () => {\n    const workbook = XLSX.read(Buffer.concat(bufs));\n\n    /* DO SOMETHING WITH workbook HERE */\n  });\n});\nreq.end();\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Readable Streams in NodeJS")," (click to show)"),(0,o.kt)("p",null,"When dealing with Readable Streams, the easiest approach is to buffer the stream\nand process the whole thing at the end:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var fs = require("fs");\nvar XLSX = require("xlsx");\n\nfunction process_RS(stream, cb) {\n  var buffers = [];\n  stream.on("data", function(data) { buffers.push(data); });\n  stream.on("end", function() {\n    var buffer = Buffer.concat(buffers);\n    var workbook = XLSX.read(buffer, {type:"buffer"});\n\n    /* DO SOMETHING WITH workbook IN THE CALLBACK */\n    cb(workbook);\n  });\n}\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"ReadableStream in the browser")," (click to show)"),(0,o.kt)("p",null,"When dealing with ",(0,o.kt)("inlineCode",{parentName:"p"},"ReadableStream"),", the easiest approach is to buffer the stream\nand process the whole thing at the end:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// XLSX is a global from the standalone script\n\nasync function process_RS(stream) {\n  /* collect data */\n  const buffers = [];\n  const reader = stream.getReader();\n  for(;;) {\n    const res = await reader.read();\n    if(res.value) buffers.push(res.value);\n    if(res.done) break;\n  }\n\n  /* concat */\n  const out = new Uint8Array(buffers.reduce((acc, v) => acc + v.length, 0));\n\n  let off = 0;\n  for(const u8 of buffers) {\n    out.set(u8, off);\n    off += u8.length;\n  }\n\n  return out;\n}\n\nconst data = await process_RS(stream);\n/* data is Uint8Array */\nconst workbook = XLSX.read(data, {type: 'array'});\n"))),(0,o.kt)("p",null,"More detailed examples are covered in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/"},"included demos")),(0,o.kt)("h2",{id:"processing-json-and-js-data"},"Processing JSON and JS Data"),(0,o.kt)("p",null,"JSON and JS data tend to represent single worksheets.  This section will use a\nfew utility functions to generate workbooks."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Create a new Workbook")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var workbook = XLSX.utils.book_new();\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"book_new")," utility function creates an empty workbook with no worksheets."),(0,o.kt)("p",null,"Spreadsheet software generally require at least one worksheet and enforce the\nrequirement in the user interface.  This library enforces the requirement at\nwrite time, throwing errors if an empty workbook is passed to write functions."),(0,o.kt)("h4",{id:"api-1"},"API"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Create a worksheet from an array of arrays of JS values")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var worksheet = XLSX.utils.aoa_to_sheet(aoa, opts);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"aoa_to_sheet"),' utility function walks an "array of arrays" in row-major\norder, generating a worksheet object.  The following snippet generates a sheet\nwith cell ',(0,o.kt)("inlineCode",{parentName:"p"},"A1")," set to the string ",(0,o.kt)("inlineCode",{parentName:"p"},"A1"),", cell ",(0,o.kt)("inlineCode",{parentName:"p"},"B1")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"B1"),", etc:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var worksheet = XLSX.utils.aoa_to_sheet([\n  ["A1", "B1", "C1"],\n  ["A2", "B2", "C2"],\n  ["A3", "B3", "C3"]\n]);\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/utilities#array-of-arrays-input"},'"Array of Arrays Input"')," describes the function and the\noptional ",(0,o.kt)("inlineCode",{parentName:"p"},"opts")," argument in more detail."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Create a worksheet from an array of JS objects")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var worksheet = XLSX.utils.json_to_sheet(jsa, opts);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"json_to_sheet")," utility function walks an array of JS objects in order,\ngenerating a worksheet object.  By default, it will generate a header row and\none row per object in the array.  The optional ",(0,o.kt)("inlineCode",{parentName:"p"},"opts")," argument has settings to\ncontrol the column order and header output."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/utilities#array-of-objects-input"},'"Array of Objects Input"')," describes the function and\nthe optional ",(0,o.kt)("inlineCode",{parentName:"p"},"opts")," argument in more detail."),(0,o.kt)("h4",{id:"examples-1"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../example"},'"Complete Example"'),' contains a detailed example "Get Data\nfrom a JSON Endpoint and Generate a Workbook"'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/myliang/x-spreadsheet"},(0,o.kt)("inlineCode",{parentName:"a"},"x-spreadsheet"))," is an interactive\ndata grid for previewing and modifying structured data in the web browser.  The\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sheetjs/sheetjs/tree/master/demos/xspreadsheet"},(0,o.kt)("inlineCode",{parentName:"a"},"xspreadsheet")," demo")," includes a sample script with the\n",(0,o.kt)("inlineCode",{parentName:"p"},"xtos")," function for converting from x-spreadsheet data object to a workbook.\n",(0,o.kt)("a",{parentName:"p",href:"https://oss.sheetjs.com/sheetjs/x-spreadsheet"},"https://oss.sheetjs.com/sheetjs/x-spreadsheet")," is a live demo."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Records from a database query (SQL or no-SQL)")," (click to show)"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sheetjs/sheetjs/tree/master/demos/database/"},(0,o.kt)("inlineCode",{parentName:"a"},"database")," demo")," includes examples of working with\ndatabases and query results.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Numerical Computations with TensorFlow.js")," (click to show)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@tensorflow/tfjs")," and other libraries expect data in simple arrays, well-suited\nfor worksheets where each column is a data vector.  That is the transpose of how\nmost people use spreadsheets, where each row is a vector."),(0,o.kt)("p",null,"When recovering data from ",(0,o.kt)("inlineCode",{parentName:"p"},"tfjs"),", the returned data points are stored in a typed\narray.  An array of arrays can be constructed with loops. ",(0,o.kt)("inlineCode",{parentName:"p"},"Array#unshift")," can\nprepend a title row before the conversion:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const XLSX = require("xlsx");\nconst tf = require(\'@tensorflow/tfjs\');\n\n/* suppose xs and ys are vectors (1D tensors) -> tfarr will be a typed array */\nconst tfdata = tf.stack([xs, ys]).transpose();\nconst shape = tfdata.shape;\nconst tfarr = tfdata.dataSync();\n\n/* construct the array of arrays */\nconst aoa = [];\nfor(let j = 0; j < shape[0]; ++j) {\n  aoa[j] = [];\n  for(let i = 0; i < shape[1]; ++i) aoa[j][i] = tfarr[j * shape[1] + i];\n}\n/* add headers to the top */\naoa.unshift(["x", "y"]);\n\n/* generate worksheet */\nconst worksheet = XLSX.utils.aoa_to_sheet(aoa);\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/array/"},(0,o.kt)("inlineCode",{parentName:"a"},"array")," demo")," shows a complete example.")),(0,o.kt)("h2",{id:"processing-html-tables"},"Processing HTML Tables"),(0,o.kt)("h4",{id:"api-2"},"API"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Create a worksheet by scraping an HTML TABLE in the page")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var worksheet = XLSX.utils.table_to_sheet(dom_element, opts);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"table_to_sheet")," utility function takes a DOM TABLE element and iterates\nthrough the rows to generate a worksheet.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"opts")," argument is optional.\n",(0,o.kt)("a",{parentName:"p",href:"../api/utilities#html-table-input"},'"HTML Table Input"')," describes the function in more detail."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Create a workbook by scraping an HTML TABLE in the page")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var workbook = XLSX.utils.table_to_book(dom_element, opts);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"table_to_book")," utility function follows the same logic as ",(0,o.kt)("inlineCode",{parentName:"p"},"table_to_sheet"),".\nAfter generating a worksheet, it creates a blank workbook and appends the\nspreadsheet."),(0,o.kt)("p",null,"The options argument supports the same options as ",(0,o.kt)("inlineCode",{parentName:"p"},"table_to_sheet"),", with the\naddition of a ",(0,o.kt)("inlineCode",{parentName:"p"},"sheet")," property to control the worksheet name.  If the property\nis missing or no options are specified, the default name ",(0,o.kt)("inlineCode",{parentName:"p"},"Sheet1")," is used."),(0,o.kt)("h4",{id:"examples-2"},"Examples"),(0,o.kt)("p",null,"Here are a few common scenarios (click on each subtitle to see the code):"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"HTML TABLE element in a webpage")," (click to show)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- include the standalone script and shim.  this uses the UNPKG CDN --\x3e\n<script src="https://cdn.sheetjs.com/xlsx-latest/package/dist/shim.min.js"><\/script>\n<script src="https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js"><\/script>\n\n\x3c!-- example table with id attribute --\x3e\n<table id="tableau">\n  <tr><td>Sheet</td><td>JS</td></tr>\n  <tr><td>12345</td><td>67</td></tr>\n</table>\n\n\x3c!-- this block should appear after the table HTML and the standalone script --\x3e\n<script type="text/javascript">\n  var workbook = XLSX.utils.table_to_book(document.getElementById("tableau"));\n\n  /* DO SOMETHING WITH workbook HERE */\n<\/script>\n')),(0,o.kt)("p",null,"Multiple tables on a web page can be converted to individual worksheets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/* create new workbook */\nvar workbook = XLSX.utils.book_new();\n\n/* convert table "table1" to worksheet named "Sheet1" */\nvar sheet1 = XLSX.utils.table_to_sheet(document.getElementById("table1"));\nXLSX.utils.book_append_sheet(workbook, sheet1, "Sheet1");\n\n/* convert table "table2" to worksheet named "Sheet2" */\nvar sheet2 = XLSX.utils.table_to_sheet(document.getElementById("table2"));\nXLSX.utils.book_append_sheet(workbook, sheet2, "Sheet2");\n\n/* workbook now has 2 worksheets */\n')),(0,o.kt)("p",null,"Alternatively, the HTML code can be extracted and parsed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var htmlstr = document.getElementById("tableau").outerHTML;\nvar workbook = XLSX.read(htmlstr, {type:"string"});\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Chrome/Chromium Extension")," (click to show)"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/chrome/"},(0,o.kt)("inlineCode",{parentName:"a"},"chrome")," demo")," shows a complete example and details the\nrequired permissions and other settings."),(0,o.kt)("p",null,"In an extension, it is recommended to generate the workbook in a content script\nand pass the object back to the extension:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/* in the worker script */\nchrome.runtime.onMessage.addListener(function(msg, sender, cb) {\n  /* pass a message like { sheetjs: true } from the extension to scrape */\n  if(!msg || !msg.sheetjs) return;\n  /* create a new workbook */\n  var workbook = XLSX.utils.book_new();\n  /* loop through each table element */\n  var tables = document.getElementsByTagName("table")\n  for(var i = 0; i < tables.length; ++i) {\n    var worksheet = XLSX.utils.table_to_sheet(tables[i]);\n    XLSX.utils.book_append_sheet(workbook, worksheet, "Table" + i);\n  }\n  /* pass back to the extension */\n  return cb(workbook);\n});\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Server-Side HTML Tables with Headless Chrome")," (click to show)"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/headless/"},(0,o.kt)("inlineCode",{parentName:"a"},"headless")," demo")," includes a complete demo to convert HTML\nfiles to XLSB workbooks.  The core idea is to add the script to the page, parse\nthe table in the page context, generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"base64")," workbook and send it back\nfor further processing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const XLSX = require("xlsx");\nconst { readFileSync } = require("fs"), puppeteer = require("puppeteer");\n\nconst url = `https://sheetjs.com/demos/table`;\n\n/* get the standalone build source (node_modules/xlsx/dist/xlsx.full.min.js) */\nconst lib = readFileSync(require.resolve("xlsx/dist/xlsx.full.min.js"), "utf8");\n\n(async() => {\n  /* start browser and go to web page */\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto(url, {waitUntil: "networkidle2"});\n\n  /* inject library */\n  await page.addScriptTag({content: lib});\n\n  /* this function `s5s` will be called by the script below, receiving the Base64-encoded file */\n  await page.exposeFunction("s5s", async(b64) => {\n    const workbook = XLSX.read(b64, {type: "base64" });\n\n    /* DO SOMETHING WITH workbook HERE */\n  });\n\n  /* generate XLSB file in webpage context and send back result */\n  await page.addScriptTag({content: `\n    /* call table_to_book on first table */\n    var workbook = XLSX.utils.table_to_book(document.querySelector("TABLE"));\n\n    /* generate XLSX file */\n    var b64 = XLSX.write(workbook, {type: "base64", bookType: "xlsb"});\n\n    /* call "s5s" hook exposed from the node process */\n    window.s5s(b64);\n  `});\n\n  /* cleanup */\n  await browser.close();\n})();\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Server-Side HTML Tables with Headless WebKit")," (click to show)"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/headless/"},(0,o.kt)("inlineCode",{parentName:"a"},"headless")," demo")," includes a complete demo to convert HTML\nfiles to XLSB workbooks using ",(0,o.kt)("a",{parentName:"p",href:"https://phantomjs.org/"},"PhantomJS"),". The core idea\nis to add the script to the page, parse the table in the page context, generate\na ",(0,o.kt)("inlineCode",{parentName:"p"},"binary")," workbook and send it back for further processing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var XLSX = require(\'xlsx\');\nvar page = require(\'webpage\').create();\n\n/* this code will be run in the page */\nvar code = [ "function(){",\n  /* call table_to_book on first table */\n  "var wb = XLSX.utils.table_to_book(document.body.getElementsByTagName(\'table\')[0]);",\n\n  /* generate XLSB file and return binary string */\n  "return XLSX.write(wb, {type: \'binary\', bookType: \'xlsb\'});",\n"}" ].join("");\n\npage.open(\'https://sheetjs.com/demos/table\', function() {\n  /* Load the browser script from the UNPKG CDN */\n  page.includeJs("https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js", function() {\n    /* The code will return an XLSB file encoded as binary string */\n    var bin = page.evaluateJavaScript(code);\n\n    var workbook = XLSX.read(bin, {type: "binary"});\n    /* DO SOMETHING WITH workbook HERE */\n\n    phantom.exit();\n  });\n});\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"NodeJS HTML Tables without a browser")," (click to show)"),(0,o.kt)("p",null,"NodeJS does not include a DOM implementation and Puppeteer requires a hefty\nChromium build.  ",(0,o.kt)("a",{parentName:"p",href:"https://npm.im/jsdom"},(0,o.kt)("inlineCode",{parentName:"a"},"jsdom"))," is a lightweight alternative:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const XLSX = require("xlsx");\nconst { readFileSync } = require("fs");\nconst { JSDOM } = require("jsdom");\n\n/* obtain HTML string.  This example reads from test.html */\nconst html_str = fs.readFileSync("test.html", "utf8");\n/* get first TABLE element */\nconst doc = new JSDOM(html_str).window.document.querySelector("table");\n/* generate workbook */\nconst workbook = XLSX.utils.table_to_book(doc);\n'))))}m.isMDXComponent=!0}}]);