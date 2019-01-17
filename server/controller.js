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

    hero: (req, res)=>{
        if(req.session.user){
            res.json(req.session.user)
        }else{
            res.status(401).json({error: 'Please log in to play.'})
        }
    },

    event: (req, res)=>{
        const db = req.app.get('db');
        db.event({question: req.body.question, answer: req.body.answer})
        .then(events=>{
            res.status(200).json({question: events[0].question, answer: events[0].answer})
        })
    }
}