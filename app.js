const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'), (err) => {
        if(err) throw err;
        else console.log('Sent file');
    });
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'), (err) => {
        if(err) throw err;
        else console.log('Sent file');
    });
});

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'), (err) => {
        if(err) throw err;
        else console.log('Sent file');
    });
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css'), (err) => {
        if(err) throw err;
        else console.log('Sent file');
    });
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

const PORT = 8080;
app.listen(PORT, (err) => {
    if(err) throw err;
    console.log('Listening to port: ', PORT)
})