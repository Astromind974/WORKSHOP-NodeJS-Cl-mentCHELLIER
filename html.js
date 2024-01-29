const http = require('http');
const host = 'localhost';
const port = 3001;

const requestListener = function (req, res) {
    res.setHeader("Content-type", "text/html")
    switch(req.url) {
        case "/accueil":
            res.writeHead(200);
            res.end(`<html><body><h1>Bienvenue sur l'accueil</h1></body></html>`);
            console.log("Vous êtes a l'accueil");
            break
        case "/Logo":
            res.writeHead(200);
            res.end(`<html><body><img src="./logo.png" alt="Epitech"/></body></html>`);
            console.log("Vous êtes au logo");
            break
        case "/profile":
            res.writeHead(200);
            res.end(`<html><body><h1>Bienvenue sur votre profile</h1></body></html>`);
            console.log("Vous êtes sur votre profile");
            break
        default:
            res.writeHead(404);
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});