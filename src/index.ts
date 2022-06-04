import config from './config.json';
const express = require('express')
const app = express()

app.get('/', function (req: any, res: any) {
    res.send('Hello World');
})

app.listen(config.port, () => console.log(`Server running on port ${config.port}`));
