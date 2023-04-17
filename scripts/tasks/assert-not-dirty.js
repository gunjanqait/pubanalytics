const exec = require('./exec');

module.exports = function () {
  const isDirty = exec("git diff --quiet || echo 'dirty'") === 'dirty';

  if (isDirty) {
    console.log(
      'Current GIT working directory is dirty, please stash or commit your changes.'
    );
    process.exit(1);
  }
};
