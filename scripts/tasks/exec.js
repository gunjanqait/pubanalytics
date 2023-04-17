const execSync = require('child_process').execSync;

module.exports = function (command) {
  try {
    return execSync(command, { stdio: 'pipe' }).toString().trim();
  } catch (e) {
    console.error('Failed to execute command ' + command);
    console.error(e);
    process.exit(1);
  }
};
