function banBadWords(arr, str) {
  arr.forEach(function (word) {
    var pattern = new RegExp(`\\b${word}\\b`, 'g');
    console.log(pattern);
    str=str.replace(pattern, '****');
  })
  console.log(str);
}

module.exports =banBadWords
