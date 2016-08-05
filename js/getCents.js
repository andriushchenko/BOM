function getCents(str) {
  var result = str.match(/\.(\d{1,2})/);
  console.log(result ? result[1] : result);
}

module.exports = getCents;
