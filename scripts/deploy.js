const { name: appName } = require('../package.json');
const exec = require('./tasks/exec');
const locateBuildFile = require('./tasks/locate-build-file');
const promptForTagSelection = require('./tasks/prompt-for-tag-selection');
const assertNotDirty = require('./tasks/assert-not-dirty');
const gitTag = require('./tasks/git-tag');

const ctx = {
  tagSuffix: process.env.TAG_PREFIX,
};

/**
 * Deploy to the cloud ✈️.
 */
(async function () {
  assertNotDirty();

  // Locate build file
  console.log('> Locate build file');
  ctx.buildFile = await locateBuildFile('./build/static/js');
  ctx.checksum = ctx.buildFile.match(new RegExp(`.*${appName}\.(.*)\.js`))[1];
  console.log(
    `> Found acceptable file '${ctx.buildFile}' with checksum '${ctx.checksum}'.`
  );
  console.log();

  // Detemine tag to use
  console.log('> Determine tag to use');
  exec('git fetch --tags'),
    (ctx.gitTag = await promptForTagSelection({ tagSuffix: ctx.tagSuffix }));
  console.log(`> Using tag ${ctx.gitTag}`);
  console.log();

  // Create git tag
  console.log(`> Create git tag ${ctx.gitTag}`);
  await gitTag(ctx.gitTag);
  exec(`git push origin ${ctx.gitTag} -f`);
  console.log(`> Tagged and pushed ${ctx.gitTag}`);
  console.log();

  // Push to s3
  console.log(`> Push to s3`);
  exec(
    `aws s3 cp ./${ctx.buildFile} s3://liveintent-prod-frontend/apps/${appName}/${ctx.gitTag}/${appName}.${ctx.checksum}.js`
  );
  console.log(`> Pushed`);
  console.log();

  // Final Message
  console.log(`> WAIT, YOU'RE NOT DONE!`);
  console.log(
    `> Now that your file is in s3, you need to adjust the bifrost database to point to your new file!`
  );
  console.log(`> Good Luck :)`);
})();
