#!/usr/bin/env node

let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organiseObj = require("./commands/organise");

let inputArr = process.argv.slice(2);

//node main.js tree "directoryPath"
//node main.js organise "directoryPath"
//node main.js help
let command = inputArr[0];

switch (command) {
  case "tree":
    treeObj.treeKey(inputArr[1]);
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


