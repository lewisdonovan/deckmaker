const path = require('path');

module.exports = {
  entry: {
    filename: './src/index.js'
  },
  target: 'node',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}