function debounce(inputFunction, delay) {
  clearTimeout(timer);
  var timer=setTimeout(inputFunction, delay);
  return function() {timer};
}

module.exports = debounce;
