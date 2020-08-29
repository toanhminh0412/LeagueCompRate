const path = require('path');
const port = process.env.PORT || 3000;

module.exports = {
    entry: {
        script: "./models/script.js",
        pro: "./pro-models/pro.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name]-bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: port
    }
};