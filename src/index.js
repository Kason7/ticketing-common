module.exports = Import = (folder, file) => {
  return folder === 'errors'
    ? require(`./${folder}`)
    : require(`./${folder}/${file}`);
};
