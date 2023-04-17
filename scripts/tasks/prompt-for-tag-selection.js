const semver = require('semver');
const latestGitTag = require('./latest-git-tag');
const { escapeRegExp } = require('lodash');

function endWith(subject, suffix) {
  const escaped = escapeRegExp(suffix);
  return subject.replace(new RegExp(`(?:${escaped})$`, 'u'), '') + suffix;
}

module.exports = async function (options) {
  const suffixify = (str) =>
    options.tagSuffix ? endWith(str, `-${options.tagSuffix}`) : str;

  const inquirer = await import('inquirer');
  const prompt = inquirer.createPromptModule();

  let latest = latestGitTag() || '0.0.1';
  const patch = suffixify(semver.inc(latest, 'patch'));
  const minor = suffixify(semver.inc(latest, 'minor'));
  const major = suffixify(semver.inc(latest, 'major'));
  latest = suffixify(latest);

  return (
    await prompt({
      name: 'tag',
      type: 'list',
      message: `Please specify the app version: (latest git tag was: ${latest})`,
      choices: [
        { name: `latest (${latest})`, value: latest, short: latest },
        { name: `patch (${patch})`, value: patch, short: patch },
        { name: `minor (${minor})`, value: minor, short: minor },
        { name: `major (${major})`, value: major, short: major },
      ],
    })
  ).tag;
};
