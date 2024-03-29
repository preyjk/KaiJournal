//引入mysql包
var mysql = require("mysql2");
// 建立数据库链接
function createConnection() {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "my_journal",
  });
  return connection;
}

// 增加操作
exports.add = function (sqlInfo, callback) {
  let connection = createConnection();
  connection.connect();
  var addSql = "INSERT INTO `my_journal`." + sqlInfo.tableName + sqlInfo.addSql;
  connection.query(addSql, sqlInfo.addSqlParams, function (err, result) {
    if (err) {
      console.log("[INSERT ERROR] - ", err.message);
      callback(err.code);
      return;
    }
    callback("OK");
    console.log("--------------------------INSERT----------------------------");
    //console.log('INSERT ID:',result.insertId);
    console.log("INSERT ID:", result);
    console.log(
      "-----------------------------------------------------------------\n\n"
    );
  });

  connection.end();
};
// 修改操作
exports.update = function (sql, callback) {
  let connection = createConnection();
  connection.connect();
  connection.query(sql, function (err, result) {
    if (err) {
      console.log("[UPDATE ERROR] - ", err.message);
      return;
    }
    callback("updateSuccess");
    console.log("--------------------------UPDATE----------------------------");
    console.log("UPDATE affectedRows", result.affectedRows);
    console.log(
      "-----------------------------------------------------------------\n\n"
    );
  });

  connection.end();
};
// 查询操作
exports.retrive = function (sql, callback) {
  let connection = createConnection();
  connection.connect();
  connection.query(sql, function (err, result) {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      return;
    }
    if (result.length === 0) {
      callback("fail");
    } else {
      callback(result);
    }
    // console.log("--------------------------SELECT----------------------------");
    // console.log(result);
    // console.log(
    //   "------------------------------------------------------------\n\n"
    // );
  });
  connection.end();
};
// 删除操作
exports.remove = function (reqInfo) {
  let connection = createConnection();
  connection.connect();
  var delSql = "DELETE FROM " + reqInfo.tableName + reqInfo.sql;
  connection.query(delSql, function (err, result) {
    if (err) {
      console.log("[DELETE ERROR] - ", err.message);
      return;
    }

    console.log("--------------------------DELETE----------------------------");
    console.log("DELETE affectedRows", result.affectedRows);
    console.log(
      "-----------------------------------------------------------------\n\n"
    );
  });

  connection.end();
};
