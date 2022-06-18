const fs = require("fs");
const path = require("path");
const types = require("../utility").types;

function organiseFn(dirPath) { 
  let destPath = path.join(dirPath, "organised_files");
  if (dirPath == undefined) {
    destPath = process.cwd();
    return;
  } else {
    let doesExist = fs.existsSync(dirPath);
    if (doesExist) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath);
      }
    } else {
      console.log("Kindly enter the correct path");
      return;
    }
  }
  organise(dirPath, destPath);
}

function organise(src, dest) {
  let content = fs.readdirSync(src);
  for (let i = 0; i < content.length; i++) {
    let childAddress = path.join(src, content[i]);
    let isFile = fs.lstatSync(childAddress).isFile();
    if (isFile) {
      let category = getCategory(content[i]);
      sendFiles(childAddress, dest, category);
    }
  }
}
function sendFiles(srcFilePath, dest, category) {
  let categoryPath = path.join(dest, category);
  if (fs.existsSync(categoryPath) == false) {
    fs.mkdirSync(categoryPath);
  }
  let fileName = path.basename(srcFilePath);
  let destFilePath = path.join(categoryPath, fileName);
  fs.copyFileSync(srcFilePath, destFilePath);
  fs.unlinkSync(srcFilePath);
}

function getCategory(name) {
  let ext = path.extname(name).slice(1);
  for (let type in types) {
    let typeArray = types[type];
    for (let i = 0; i < typeArray.length; i++) {
      if (ext == typeArray[i]) {
        return type;
      }
    }
  }
  return "others";
}

module.exports = {
    organiseKey: organiseFn
}