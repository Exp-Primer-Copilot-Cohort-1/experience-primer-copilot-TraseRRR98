// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.
// The comments.html file should be returned in response to requests to the root URL.
// The comments.html file should have the following content:
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Comments</title>    
// </head>
// <body>
//   <h1>Comments</h1>
//   <ul>
//     <li>Comment 1</li>
//     <li>Comment 2</li>
//     <li>Comment 3</li>
//   </ul>



const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('comments.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('Error: File Not Found');
        } else {
            res.write(data);
        }
        res.end();
    });
}
);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);
// The server should return the comments.html file in response to requests to the root URL.
// The server should return an error message in response to requests for any other URL.
// The server should return the following content in response to requests for any other URL:
// Error: File Not Found
// The server should listen on port 3000.
// The server should log the following message when it starts:
// Server is running on port 3000
// The server should log the following message when it receives a request:
// Request received
// The server should log the following message when it sends a response:
// Response sent
// The server should log the following message when it encounters an error:
// Error: File Not Found
// The server should log the following message when it stops:
// Server is stopped
// The server should stop listening on port 3000 when it stops.
// The server should return the following content in response to requests to the root URL:
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Comments</title>
// </head>
// <body>
//   <h1>Comments</h1>
//   <ul>
//     <li>Comment 1</li>

//     <li>Comment 2</li>
//     <li>Comment 3</li>
//   </ul>
// </body>

