const db = require("../utils/db");
const jwt = require("jsonwebtoken");
const sercetKey = require("../secret.js");
const fileUtils = require("../utils/fileUtils");

// sign up
exports.sign = (req, res) => {
  console.log("start sign up");
  const sqlInfo = {
    tableName: "User",
    addSql:
      "(`userName`, `userAccount`, `userPassword`, `userStatus`) VALUES (?,?,?,?);",
    addSqlParams: ["", req.body.userEmail, req.body.userPwd, "1"],
  };
  db.add(sqlInfo, (sqlResult) => {
    if (sqlResult === "ER_DUP_ENTRY") {
      res.send("email has been signed up");
    } else if (sqlResult === "OK") {
      res.send("sign up successful!");
    }
  });
};

// sign in
exports.login = (req, res) => {
  console.log("login vertify");
  console.log(req.body.userAccount);
  console.log(req.body.userPwd);
  var sql =
    "SELECT userPassword FROM User WHERE userAccount = " +
    "'" +
    req.body.userAccount +
    "'";
  db.retrive(sql, (sqlResult) => {
    if (sqlResult === "fail") {
      res.send("LoginFail");
    } else if (req.body.userPwd === sqlResult[0].userPassword) {
      const tokenStr = jwt.sign(
        { userAccount: req.body.userAccount },
        sercetKey,
        { expiresIn: "72000s" }
      );
      res.send({
        status: 200,
        message: "LoginOK",
        token: tokenStr,
      });
    } else {
      res.send("LoginFail");
    }
  });
};
// query login status
exports.confirmLoginStatus = (req, res) => {
  console.log("login successful");
  res.send("isLoginedOK");
};

// Profile
exports.profile = (req, res) => {
  res.send({
    status: 200,
    birth: "19960108",
  });
};

// query a kind of journal information
exports.askJournalKindInfo = (req, res) => {
  let kindId = "";
  let sql = "";
  if (req.body.kind.type == "journalKind") {
    if (req.body.kind.value === "recommand") {
      sql =
        "SELECT a.collect_id, a.journal_name, a.price, a.location,a.tag, b.journal_id, b.url,b.count_click, b.publish_date FROM JournalSeries as a inner join Journal as b on a.collect_id = b.collect_id ORDER BY b.count_click DESC";
    } else if (req.body.kind.value === "latest") {
      sql =
        "SELECT a.collect_id, a.journal_name, a.price, a.location,a.tag, b.journal_id, b.url,b.count_click, b.publish_date FROM JournalSeries as a inner join Journal as b on a.collect_id = b.collect_id ORDER BY b.publish_date DESC";
    } else if (req.body.kind.value === "fansion") {
      kindId = 1;
      sql =
        "SELECT a.collect_id, a.journal_name, a.price, a.location,a.tag, b.journal_id, b.url,b.count_click, b.publish_date FROM JournalSeries as a inner join Journal as b on a.collect_id = b.collect_id WHERE kind_id =" +
        kindId;
    } else if (req.body.kind.value === "economic") {
      kindId = 2;
      sql =
        "SELECT a.collect_id, a.journal_name, a.price, a.location,a.tag, b.journal_id, b.url,b.count_click, b.publish_date FROM JournalSeries as a inner join Journal as b on a.collect_id = b.collect_id WHERE kind_id =" +
        kindId;
    } else if (req.body.kind.value === "sport") {
      kindId = 3;
      sql =
        "SELECT a.collect_id, a.journal_name, a.price, a.location,a.tag, b.journal_id, b.url,b.count_click, b.publish_date FROM JournalSeries as a inner join Journal as b on a.collect_id = b.collect_id WHERE kind_id =" +
        kindId;
    } else if (req.body.kind.value === "game") {
      kindId = 4;
      sql =
        "SELECT a.collect_id, a.journal_name, a.price, a.location,a.tag, b.journal_id, b.url,b.count_click, b.publish_date FROM JournalSeries as a inner join Journal as b on a.collect_id = b.collect_id WHERE kind_id =" +
        kindId;
    }
  } else if (req.body.kind.type === "search") {
    sql =
      "SELECT a.collect_id, a.journal_name, a.price, a.location,a.tag, b.journal_id, b.url,b.count_click, b.publish_date FROM JournalSeries as a inner join Journal as b on a.collect_id = b.collect_id WHERE a.journal_name LIKE " +
      "'%" +
      req.body.kind.value +
      "%'";
  } else if (req.body.kind.type === "location") {
    console.log(req.body.kind);
    sql =
      "SELECT a.collect_id, a.journal_name, a.price, a.location,a.tag, b.journal_id, b.url,b.count_click, b.publish_date FROM JournalSeries as a inner join Journal as b on a.collect_id = b.collect_id WHERE location =" +
      "'" +
      req.body.kind.value +
      "'";
  } else if (req.body.kind.type === "language") {
    sql =
      "SELECT a.collect_id, a.journal_name, a.price, a.location,a.tag, b.journal_id, b.url,b.count_click, b.publish_date FROM JournalSeries as a inner join Journal as b on a.collect_id = b.collect_id WHERE language =" +
      "'" +
      req.body.kind.value +
      "'";
  } else if (req.body.kind.type === "publishTime") {
    sql =
      "SELECT a.collect_id, a.journal_name, a.price, a.location,a.tag, b.journal_id, b.url,b.count_click, b.publish_date FROM JournalSeries as a inner join Journal as b on a.collect_id = b.collect_id WHERE publish_date =" +
      "'" +
      req.body.kind.value +
      "'";
  } else if (req.body.kind.type === "journalName") {
    sql =
      "SELECT a.collect_id, a.journal_name, a.price, a.location,a.tag, b.journal_id, b.url,b.count_click, b.publish_date FROM JournalSeries as a inner join Journal as b on a.collect_id = b.collect_id WHERE a.journal_name LIKE " +
      "'%" +
      req.body.kind.value +
      "%'";
  }
  db.retrive(sql, (sqlResult) => {
    if (sqlResult === "fail") {
      res.send("No");
      return;
    }
    let journalInfos = [];
    for (let i = 0; i < sqlResult.length; i++) {
      // 杂志封面剪切版地址
      let cover_cropPath = "./assets/cover_crop/" + sqlResult[i].url;
      let coverURL = fileUtils.codeBase64Image(cover_cropPath);
      journalInfos.push({
        collectId: sqlResult[i].collect_id,
        journalId: sqlResult[i].journal_id,
        url: coverURL,
        journalName: sqlResult[i].journal_name,
        journalTag: sqlResult[i].tag,
        journalPublishDate: sqlResult[i].publish_date,
        journalLocation: sqlResult[i].location,
        price: sqlResult[i].price,
        countClick: sqlResult[i].count_click,
      });
    }
    res.send(journalInfos);
  });
};

// query signal journal info: URL、journal_id
exports.askJournalInfo = (req, res) => {
  let journal_id = req.body.journal_id;
  let journalInfo = {};
  var sql =
    "SELECT a.journal_name, a.location,a.price, a.tag, a.kind_id,a.kind_name, a.kind_nameCN, a.journal_type_name,a.language, b.publish_date, b.url FROM JournalSeries as a inner join Journal as b on a.collect_id = b.collect_id WHERE journal_id = " +
    journal_id;
  db.retrive(sql, (sqlResult) => {
    let coverURL = fileUtils.codeBase64Image(
      "./assets/cover/" + sqlResult[0].url
    );
    journalInfo = {
      journalName: sqlResult[0].journal_name,
      journalLocation: sqlResult[0].location,
      journalTag: sqlResult[0].tag,
      journalPublishDate: sqlResult[0].publish_date,
      coverURL: coverURL,
      kindId: sqlResult[0].kind_id,
      kindName: sqlResult[0].kind_name,
      kindNameCN: sqlResult[0].kind_nameCN,
      price: sqlResult[0].price,
      countClick: sqlResult[0].count_click,
      journalTypeName: sqlResult[0].journal_type_name,
      language: sqlResult[0].language,
      location: sqlResult[0].location,
    };
    res.send(journalInfo);
  });
};
// add click count
exports.addClick = (req, res) => {
  let sql =
    "UPDATE Journal SET count_click = count_click +1 where journal_id = " +
    req.body.journalId;
  // db.update(sql);
  db.update(sql, (sqlResult) => {
    if (sqlResult === "updateSuccess") {
      console.log("update success!");
      res.send("ok");
    } else {
      res.send("fail");
    }
  });
};
