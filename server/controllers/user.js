const User = require("../models/user");

module.exports.createUser = (req, res) => {
    const userDetails = req.body;
    User.create(userDetails, (err, data) => {
        if(err){
            res.json(err)
        }
        res.json({success: true, data})
    })
}

module.exports.login = (req, res) => {
    const {email, password} = req.body
    User.find({email, password }, (err, data) => {
        if(err){
            res.json(err)
        }else if(!data.length){
            res.json({error: "email or password incorrect"})
        }else {
            res.json({success: true, data})
        }
        
    })
}