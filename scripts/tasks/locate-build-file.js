const chalk = require('chalk');
const recursive = require('recursive-readdir');

function isJs(asset) {
  return /\.(js)$/.test(asset);
}

module.exports = function (bundleFolder) {
  return new Promise((resolve) => {
    recursive(bundleFolder, (err, fileNames) => {
      if (!err && fileNames) {
        const jsFiles = fileNames.filter(isJs);
        if (jsFiles.length > 1) {
          console.log(
            chalk.red(
              `Multiple bundle files were found in your build directory, but the portal only supports a single build file.`
            )
          );
          console.log(
            `If this was unintentional, try clearing your build folder and rebuilding your app.`
          );
          process.exit(1);
        }
        if (jsFiles.length === 0) {
          chalk.red(
            `No build files were found in the build directory. Did you forget to run the build script?`
          );
          process.exit(1);
        }

        return resolve(jsFiles[0]);
      }

      console.log(err);
      process.exit(1);
    });
  });
};
