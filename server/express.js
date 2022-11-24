const express = require('express');
const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

import App from "../src/components/App";

const app = express();

app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '../dist')));

app.use('*', (req, res) => {

    let indexHTML = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), {
        encoding: 'utf8',
    });
    let appHTML = ReactDOMServer.renderToString(<App />);
    indexHTML = indexHTML.replace('<div id="app"></div>', `<div id="app">${appHTML}</div>`);

    res.contentType('text/html');

    return res.status(200).send(indexHTML);
});

app.listen('9000', () => {
    console.log('Express server started at http://localhost:9000');
});