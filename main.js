#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organiseObj = require("./commands/organise");

let inputArr = process.argv.slice(2);

//node main.js tree "directoryPath"
//node main.js organise "directoryPath"
//node main.js help
let command = inputArr[0];
let types = {
    media : ["mp4", "mkv"],
    archives: ["zip", "7z" ,"rar", "tar", "gz", "ar", "iso", "xz"],
    documents: ["docx", "pdf", "doc", "xlsx", "xls", "odt", "ods", "odp", "odg", "odf", "txt", "ps", "tex"],
    app: ["exe", "dmg", "pkg", "deb"]
}

switch (command) {
  case "tree":
    treeObj.treekey(inputArr[1]);
    break;
  case "organise":
    organiseObj.organiseKey(inputArr[1]);
    break;
  case "help":
    helpObj.helpKey();
    break;
  default:
    console.log("Please input right command");
    break;
}


