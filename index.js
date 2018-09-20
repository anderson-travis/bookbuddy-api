require("dotenv-safe").config({ allowEmptyValues: true });
const express = require('express')
const morgan = require("morgan");
const { Client } = require('pg');
const { User, sequelize } = require("./models");

const app = express();

app.set("port", process.env.PORT || 3000);


app.use(morgan("tiny"));
app.use(express.json());

 
 app.get('/login', (req, res) => {
    res.send({ stuff: 'vfgkj,ecd' })
 });
 
 app.listen(3000, () => {
    console.log('app listening on port 3000!')
 });
 