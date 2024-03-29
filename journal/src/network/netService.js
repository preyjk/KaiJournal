const request = require("./netUtils");

// ask for the information of a group of journal: cover，name, id
module.exports.askJournalKindInfo = function (kind, callback) {
  const config = {
    url: "/api/journalkind",
    method: "post",
    data: { kind },
  };
  request(config)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// ask for the information of single journal
module.exports.askJournalInfo = function (journal_id, callback) {
  const config = {
    url: "/api/journal",
    method: "post",
    data: { journal_id },
  };
  request(config)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// add the click count
module.exports.addClick = function (journalId) {
  const config = {
    url: "/api/addClick",
    method: "post",
    data: { journalId },
  };
  request(config)
    .then((res) => {
      // callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
