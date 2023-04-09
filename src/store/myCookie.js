// set cookie
function setCookie(name, key, expires, path) {
  document.cookie =
    name + "=" + key + "; " + "expires=" + expires + "; " + "path=" + path;
}

// get keyvalue
function getKey(name) {
  let cookieArr = document.cookie.split(";");
  for (var i = 0; i < cookieArr.length; i++) {
    var c = cookieArr[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length + 1, c.length);
  }
}

// remove cookie
function removeCookie(name, path) {
  const now = new Date();
  now.setDate(-100);
  document.cookie =
    name + "=" + name + "; " + "expires=" + now + "; " + "path=" + path;
}

exports.setCookie = setCookie;
exports.getKey = getKey;
exports.removeCookie = removeCookie;
