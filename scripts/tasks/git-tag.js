const exec = require('./exec');
const execSync = require('child_process').execSync;

function rescue(cb, fallback = null) {
  try {
    return cb();
  } catch (e) {
    return fallback;
  }
}

module.exports = async function (tag) {
  const inquirer = await import('inquirer');
  const prompt = inquirer.createPromptModule();

  const exists = !!rescue(() =>
    execSync(`git rev-list ${tag}`, { stdio: 'pipe' })
  );

  if (exists) {
    const confirm = await prompt({
      name: 'override',
      type: 'confirm',
      message: `Tag '${tag}' already exists. Really overwrite?`,
    });

    if (!confirm.override) {
      console.log('> Aborting');
      process.exit(1);
    }
  }

  exec(`git tag ${tag} -f`);
};
