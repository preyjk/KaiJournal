const axios = require("axios");

module.exports = function request(config) {
  const instance = axios.create({
    // baseURL: "http://127.0.1:900/",
    timeout: 5000,
  });
  return instance(config);
};
