const http = require("http");

const server = http.createServer();

const phones = [
    {
      id: 1,
      ram: '5gb',
      model: 'Infinix Hot 4'
    },
    {
      id: 2,
      ram: '20gb',
      model: 'iPhone'
    },
    {
      id: 3,
      ram: '10gb',
      model: 'Samsung Galaxy'
    }
 ]

server.on('request', (req, res) => {
    const {url} = req;

    if (url === '/') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Welcome to our phones service'}));

    } else if (url ==='/phones') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({data: phones}));

    } else if (url.match(/\/phones\/\d+/)) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'yes it matches'}));

    } else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Resource not found'}));
    }
});

const host = 'localhost';
const port = 8080;

server.listen(port, host, () => {
    console.log(`server is running on: http://${host}:${port}`);
});

