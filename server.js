const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist ')));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

const port = process.env.PORT || 4200;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log("Running"));
