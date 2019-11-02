const express = require('express');
const app = express();
const router = require('./extension1')
const imports = require('./extinsion')

app.use(express.json());


app.use('/api/courses', router);
imports.pass(app);

app.listen(3000);