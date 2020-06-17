
const cors  = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const app = express();
app.use(cors());

// all requests that start with '/static'  will go directly to the dist folder  
// --> publicPath option in config : static prefix for all generated assets
app.use('/static', express.static(path.resolve(__dirname, '../../dist')));
//
app.use(express.json());

const extract = async (headers, params) => {
    const res = await axios('https://api.aylien.com/api/v1/extract', {headers, params});
    return res.data;
}

const analyze = async (headers, params) => {
    const res = await axios('https://api.aylien.com/api/v1/sentiment', {headers, params});
    return res.data;
}

app.get('/', function(req, res) {
    res.redirect('/article');
})

app.get('/article', function (req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../../dist/article.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

app.get('/tweet', function (req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../../dist/tweet.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

headers = {
    'X-AYLIEN-TextAPI-Application-Key' : process.env.API_KEY,
    'X-AYLIEN-TextAPI-Application-ID' : process.env.API_ID
};


app.post('/extract', (req, res) => {
    extract(headers, req.body)
    .then( (result) => {
        res.send(result)
    })
    .catch(error => { console.log('app.post("/extract" ... :', error)})
});

app.post('/analyze', (req, res) => {
    analyze(headers, req.body)
    .then( (result) => {
        res.send(result)
    })
    .catch(error => { console.log('app.post("/analyze" ... :', error)})
});



const port = 8888;
app.listen(port, function () {
    console.log(`Express server listening on port ${port}.`)
})

