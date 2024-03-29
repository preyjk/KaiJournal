const webp = require("webp-converter");
const Jimp = require("jimp");
const fs = require("fs");

// 图像类型转换: webp - jpg
function convertWebpToJpg(originFile, resFile, callback) {
  const result = webp.dwebp(originFile, resFile, "-o", (logging = "-v"));
  result.then((response) => {
    console.log(response);
    callback();
  });
}

// 图像类型转换 jpg - webp
function convertJpgToWebp(originFile, resFile, callback) {
  const result = webp.cwebp(originFile, resFile, "-q 80", (logging = "-v"));
  result.then((response) => {
    console.log(response);
    callback();
  });
}

// 图片大小调整 --- 剪裁下半部分，输出大小450*450
exports.resizeImage = function (originFile, resFile) {
  let tempFile = originFile.replace(".webp", ".jpg");
  let temResFile = resFile.replace(".webp", ".jpg");
  new Promise((resolve, reject) => {
    convertWebpToJpg(originFile, tempFile, () => {
      resolve();
    });
  }).then(() => {
    Jimp.read(tempFile)
      .then((file) => {
        file
          .crop(0, 0, file.bitmap.width, file.bitmap.width) // crop to the given region
          .resize(450, 450)
          .quality(60) // set JPEG quality
          .write(temResFile, () => {
            convertJpgToWebp(temResFile, resFile, () => {
              fs.unlink(tempFile, (err) => {
                fs.unlink(temResFile, (err) => {});
              });
            });
          }); // save
      })
      .catch((err) => {
        console.error(err);
      });
  });
};
