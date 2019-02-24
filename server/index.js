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
app.put('/auth/edit', controller.edit);
app.get('/auth/users', controller.user);
app.get('/auth/user', controller.logout);
app.delete('/auth/delete/:id', controller.delete);

app.get('/api/room', controller.room);

app.get('/api/hero', controller.hero);
app.get('/api/monster', controller.monster);
app.get('/api/rndRoom', controller.rndRoom);
app.get('/api/events', controller.event);
app.get('/api/good', controller.good);
app.get('/api/bad', controller.bad);
app.get('/api/analytics/:id', (req,res,next)=>{console.log('hit'); next()}, controller.data);
app.post('/api/endings/total_points', controller.totalPoints);

app.listen(process.env.EXPRESS_PORT, ()=>{
    console.log(`listening on port ${process.env.EXPRESS_PORT}`)
})