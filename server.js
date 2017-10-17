const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const port = process.env.PORT || '3000';

const app = express();

// Point express to the static files
app.use(express.static(path.join(__dirname, 'dist')));

// Send all routes to the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// set the port
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port, () => console.log(`App running on localhost:${port}`))