import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    let path = './';

    if (req.url === '/style.css') {
        path += 'style.css';
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');

        fs.readFile(path, (err, data) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                res.end(data);
            }
        });
        return;
    }

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/contact-me':
            path += 'contact-me.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    res.setHeader('Content-Type', 'text/html');

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    })
})

server.listen(8080)