const http = require("http");

const host = 'localhost';
const port = 8080;

if (url === '/') {
const requestListener = function (req, res) {
    res.setHeader ("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Welcome to our phones service"}));
};
}   
else if(url === '/phones') {
    res.setHeader ("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({id: 1, ram: '5gb', model: 'Infinix Hot 4', id: 2, ram: '20gb', model: 'iPhone', 
    id: 3, ram: '10gb', model: 'Samsung Galaxy'}));
}   
else if(url === '/phones/id') {
    res.setHeader ("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({id: 1, id: 2, id: 3}));
}   
else {
    res.setHeader ("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({hoops: "wrong search detected"}));
};


const server = http.createServer (requestListener);
server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`);
});