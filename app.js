const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// define paths for Express config
const distDirectoryPath = path.join(__dirname, './dist');
const viewsPath = path.join(__dirname, './dist');

// Setup html engine and views location
app.set('view engine', 'html');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(distDirectoryPath));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: viewsPath });
})

app.get('/compbuilder', (req, res) => {
    res.sendFile('index.html', { root: viewsPath });
})

app.get('/pro', (req, res) => {
    res.sendFile('pro.html', { root: viewsPath });
})

app.get('/progame', (req, res) => {
    res.sendFile('pro-game.html', { root: viewsPath });
})

app.listen(port, () => {
    console.log('Listening on port 3000');
})