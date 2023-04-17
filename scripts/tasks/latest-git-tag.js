const exec = require('./exec');

module.exports = function () {
  try {
    return exec('git tag --sort=committerdate | tail -1', { stdio: 'pipe' })
      .toString()
      .trim('\n');
  } catch (e) {
    return false;
  }
};
