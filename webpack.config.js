const path = require('path')
module.exports = {
  entry: 'app.js',
  resolve: {
    root: [
      path.resolve('./src')
    ]
  }
}