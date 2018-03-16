const path = require('path');

const config = {
  context: __dirname,
  entry: './frontend/yak.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*'],
    modules: [
      path.resolve(__dirname, 'frontend'),
      path.resolve(__dirname, 'frontend', 'components'),
      'node_modules'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  }
};

if (process.env.NODE_ENV !== 'production') {
  console.log('Building in development mode -- adding sourcemap');
  config.devtool = 'source-map';
}

module.exports = config;