const request = require("./netUtils.js");

const config = {
  url: "index/1",
  method: "get",
};
request(config)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
