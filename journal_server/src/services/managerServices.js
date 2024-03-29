const fs = require("fs");
const { url } = require("inspector");
const db = require("../utils/db");
const fileUtils = require("../utils/fileUtils");
const resizeCover = require("../utils/imageUtils").resizeImage;

// 录入杂志系列信息
exports.uploadJournalSeries = (req, res) => {
  const journalSeriesInfo = req.body.journalSeriesInfo;
  const sqlInfo = {
    tableName: "JournalSeries",
    addSql:
      "(`journal_name`, `kind_id`, `journal_type`,`description`,`location`,`tag`,`language`,`price`,`kind_name`,`kind_nameCN`, `journal_type_name`) VALUES (?,?,?,?,?,?,?,?,?,?,?);",
    addSqlParams: [
      journalSeriesInfo.journalName,
      journalSeriesInfo.journalKind,
      journalSeriesInfo.journalType,
      journalSeriesInfo.description,
      journalSeriesInfo.location,
      journalSeriesInfo.tag,
      journalSeriesInfo.language,
      journalSeriesInfo.price,
      journalSeriesInfo.journalKindName,
      journalSeriesInfo.journalKindNameCN,
      journalSeriesInfo.journalTypeName,
    ],
  };
  db.add(sqlInfo, (sqlResult) => {
    console.log(sqlResult);
  });
  res.send("ok");
};
// 请求杂志系列的信息
exports.askJournalSeries = (req, res) => {
  const journalName = req.body.journalName;
  var sql =
    "SELECT * FROM JournalSeries WHERE journal_name = " +
    "'" +
    journalName +
    "'";
  db.retrive(sql, (sqlResult) => {
    if (sqlResult === "fail") {
      res.send("fail");
    } else {
      res.send({
        status: 200,
        message: "ok",
        journalSeriesInfos: sqlResult,
      });
    }
  });
};
// 录入杂志信息
exports.uploadJournal = (req, res) => {
  const journalInfo = req.body.journalInfo;
  // 剥除dataURL的头部原信息
  let imageBuffer = fileUtils.decodeBase64Image(journalInfo.cover);
  // 写入杂志封面
  fs.writeFileSync("./assets/cover/" + journalInfo.url, imageBuffer.data);
  // 创建裁剪后450×450的杂志封面
  resizeCover(
    "./assets/cover/" + journalInfo.url,
    "./assets/cover_crop/" + journalInfo.url
  );
  const sqlInfo = {
    tableName: "Journal",
    addSql:
      "(`collect_id`, `url`,`count_click`,`publish_date`) VALUES (?,?,?,?);",
    addSqlParams: [
      journalInfo.collectId,
      journalInfo.url,
      0,
      journalInfo.publishDate,
    ],
  };
  db.add(sqlInfo, (sqlResult) => {});
  res.send("ok");
};
