const request = require("./netUtils");

// 杂志系列录入
exports.uploadJournalSeries = function (journalSeriesInfo) {
  const config = {
    url: "/api/upload/journalSeries",
    method: "post",
    data: { journalSeriesInfo },
  };
  request(config)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// 杂志资源上传
exports.uploadJournal = function (journalInfo) {
  const config = {
    url: "/api/upload/journal",
    method: "post",
    data: { journalInfo },
  };
  request(config)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// 杂志系列信息查询
exports.askJournalSeries = function (journalName, callback) {
  const config = {
    url: "/api/ask/journalSeries",
    method: "post",
    data: { journalName },
  };
  request(config)
    .then((res) => {
      callback(res.data.journalSeriesInfos);
    })
    .catch((err) => {
      console.log(err);
    });
};
