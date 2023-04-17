const webpack = require('webpack');
const { name } = require('./package.json');

module.exports = {
  webpack: function (config, env) {
    if (env === 'development') {
      return config;
    }

    const shouldHash = process.env.REACT_APP_BUILD_ENV !== 'local';

    // build for portal with a special commnt
    config.output.filename = shouldHash
      ? `static/js/${name}.[contenthash:8].js`
      : `static/js/${name}.js`;
    config.output.chunkFilename = 'static/js/[id].js'; // see https://github.com/webpack/webpack/issues/12535
    config.optimization.runtimeChunk = false;

    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      })
    );

    config.module.rules.forEach((parentRule) => {
      if (parentRule.hasOwnProperty('oneOf')) {
        parentRule.oneOf.forEach((rule) => {
          if (String(rule.test) === String(/\.css$/)) {
            rule.use[0] = { loader: require.resolve('style-loader') };
          }
        });
      }
    });

    return config;
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
