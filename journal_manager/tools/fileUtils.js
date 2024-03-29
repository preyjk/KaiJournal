const fs = require("fs");
const basePath = "../myjournalmanager/src/assets/cover/4";
// fs.rename(
//   basePath + "/" + "Vogue-CN-202203-450x450.webp",
//   basePath + "/Vogue-CN-202203.webp",
//   (res) => {
//     console.log(res);
//   }
// );

// 给目录所以文件改名，替换符合正则表达式的部分
renamefiles = function (path) {
  //读取目录下所有目录文件  返回数组
  let files = fs.readdirSync(path, { encoding: "utf8", withFileTypes: true });
  const reg = /-450x450/;
  //遍历读取到的文件列表
  files.forEach((file) => {
    let newName = file.name.replace(reg, "");
    fs.rename(path + "/" + file.name, path + "/" + newName, (err) => {
      if (err) {
        throw err;
      }
    });
  });
};

renamefiles(basePath);
