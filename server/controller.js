const bcrypt = require('bcryptjs');

module.exports={
    login: (req, res)=>{
        const db = req.app.get('db');
        db.findUser({username: req.body.username})
        .then( async users => {
            if(!users.length){
                res.status(401).json({error: 'Please register to play.'})
            }else{
                if(await bcrypt.compare(req.body.password, users[0].password)){
                    res.json({username: users[0].username, display_name: users.display_name, email: users.email});
                }else{
                    res.status(401).json({error: 'Incorrect password. Please try again or register to play.'});
                }
            }
        })
    },

    register: async (req, res)=>{
        console.log(req.body)
        const db = req.app.get('db');
        const hash = await bcrypt.hash(req.body.password, 10)
        try{
            const response = await db.addUser([req.body.username, hash, req.body.display_name, req.body.email]);
            res.json({username: response[0].username})
        }catch(e){
            console.log(e);
            res.status(401).json('Error, please try again.')
        }
    },

    edit: async (req,res)=>{
        console.log(req.body)
        const db = req.app.get('db');
        const hash = await bcrypt.hash(req.body.password, 10)
        try{
            const response = await db.updateUser([req.body.username, hash, req.body.display_name, req.body.email]);
            res.json({username: response[0].username})
        }catch(e){
            console.log(e);
            res.status(401).json('Error, please try again')
        }
    },

    room: (req, res)=>{
        const db = req.app.get('db')
        db.room({room_id: req.body.room_id, setting: req.body.setting})
        .then(room=>{
            res.status(200).json({room_id: room[0].room_id, setting: room[0].setting})
        })
    },

    rndRoom: (req, res)=>{
        const db = req.app.get('db')
        db.rndRoom({room_id: req.body.room_id, setting: req.body.setting})
        .then(rndRoom=>{
            res.status(200).json({room_id: rndRoom[0].room_id, setting: rndRoom[0].setting})
        })
    },

    event: (req, res)=>{
        const db = req.app.get('db');
        db.event({question: req.body.question, answer: req.body.answer})
        .then(events=>{
            res.status(200).json({question: events[0].question, answer: events[0].answer})
        })
    },

    good: (req, res)=>{
        const db = req.app.get('db');
        db.good({praise: req.body.praise, points: req.body.points})
        .then(good=>{
            res.status(200).json({praise: good[0].praise, points: good[0].points})
        })
    },

    bad: (req, res)=>{
        const db = req.app.get('db');
        db.bad({mean: req.body.mean, points: req.body.points})
        .then(bad=>{
            res.status(200).json({mean: bad[0].mean, points: bad[0].points})
        })
    },

    hero: (req, res)=>{
        const db = req.app.get('db');
        db.hero({class: req.body.class, health: req.body.health, weapon: req.body.weapon})
        .then(hero=>{
            res.status(200).json(hero)
        })
    },

    monster: (req,res)=>{
        console.log(req.body)
        const db = req.app.get('db');
        db.monster({type: req.body.type, health: req.body.health})
        .then(monster=>{
            console.log(monster)
            res.status(200).json(monster)
        })
    }
}