const bcrypt = require('bcrypt');

module.exports={
    login: (req, res)=>{
        const db = req.app.get('db');
        db.findUser({username: req.body.username})
        .then( async users => {
            if(!users.length){
                res.status(401).json({error: 'Please register to play.'})
            }else{
                if(await bcrypt.compare(req.body.password, user[0].password)){
                    res.json({username: user[0].username});
                }else{
                    res.status(401).json({error: 'Incorrect password. Please try again or register to play.'});
                }
            }
        })
    },

    register: async (req, res)=>{
        const db = req.app.get('db');
        const has = await bcrypt.hash(req.body.password, 10)
        try{
            const respopse = await db.addUser({username: req.body.username, password: hash});
            res.json({username: response[0].username})
        }catch(e){
            console.log(e);
            res.status(401).json('Error, please try again.')
        }
    },

    hero: (req, res)=>{
        if(req.session.user){
            res.json(req.session.user)
        }else{
            res.status(401).json({error: 'Please log in to play.'})
        }
    }
}