function getSelfClosingTags(domString) {
  return domString.match(/< *\w{1, } *\/>/g);
}

module.exports = getSelfClosingTags;
