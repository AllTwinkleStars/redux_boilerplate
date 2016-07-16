const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./.babelrc'));

// Ignore scss, remove prop-types, webpack alias
const ignore = [
  [
    'babel-plugin-transform-require-ignore', {
      extensions: ['.scss'],
    },
  ],
  'babel-plugin-transform-react-remove-prop-types', ['babel-plugin-webpack-alias', {
    config: __dirname + '/../webpack/common.config.js',
  }],
];

config.plugins = config.plugins.concat(ignore);
require('babel-core/register')(config);
require('asset-require-hook')({
  extensions: ['jpg', 'png'],
});

global.__CLIENT__ = false;

require('../app/server/server-ssr.js');
