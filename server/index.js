require('dotenv').config();

const express = require('express')
const session = require('express-session')
const massive = require('massive');
const {json} = require('body-parser');
const bcrypt = require('bcryptjs');
const controller = require('./controller');

const app = express();
app.use(json());
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 7}
}));

massive(process.env.CONNECTION_STRING)
    .then(db => {app.set('db', db);
    console.log('database connected')
})

app.post('/auth/login', controller.login);
app.post('/auth/register', controller.register);
app.get('/auth/hero', controller.hero);


app.listen(process.env.EXPRESS_PORT, ()=>{
    console.log(`listening on port ${process.env.EXPRESS_PORT}`)
})