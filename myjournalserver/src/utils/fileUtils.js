const fs = require("fs");

// base64格式文件编码
exports.codeBase64Image = function (path) {
  let bitmap = fs.readFileSync(path); // 同步读取文件
  let base64String = Buffer.from(bitmap, "binary").toString("base64"); // base64编码
  return "data:image/webp;base64," + base64String;
};

//base64格式文件解码
exports.decodeBase64Image = function (dataString) {
  var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {};

  if (matches.length !== 3) {
    return new Error("Invalid input string");
  }

  response.type = matches[1];
  response.data = Buffer.from(matches[2], "base64");

  return response;
};
