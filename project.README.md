# 🏂 myapp

> project_description

## Getting Started

This project was scaffolded with [liveintent/tpl-portal-app](https://github.com/LiveIntent/tpl-portal-app), and is meant to be run inside the LiveIntent Portal.

## Development

The project requires that you are able to download from the LiveIntent npm repository. To do this, you'll need to head over to [https://github.com/settings/tokens](https://github.com/settings/tokens) and create a Github token with at least the `read:packages` permission enabled. Once you've generated your token, place the following in the file `~/.npmrc`:

```sh
registry=https://registry.npmjs.org/
@liveintent:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=<YOUR_GH_AUTH_TOKEN>
```

Then install the project dependencies via:

```sh
npm install
```

Once that is done, you should verify that the app has installed successfully by running:

```sh
npm start
```

If you visit [localhost:3000](http://localhost:3000) in your browser, you should see your appliction up and running!

## Deployment

See [releasing](/RELEASE.md).
