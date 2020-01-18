const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Dan Haggerty: Docker based deployment of minimal node app');
});

app.listen(8080, () => {
    console.log('listening on port 8080');
});
