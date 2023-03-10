const path = require('path')
module.exports = {
mode: 'development',
entry: {
    index: './src/index.js',
    auth: './src/auth.js',
    createUser: './src/createUser.js'
},
output: {
path: path.resolve(__dirname, 'dist'),
filename: '[name].bundle.js'
},
watch: true
}