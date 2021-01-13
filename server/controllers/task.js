const Tasks = require("../models/task")

module.exports.addTask = (req, res) => {
    const taskDetails = req.body;
    Tasks.create(taskDetails, (err, data) => {
        if(err){
            res.json(err)
        }
        res.json({success: true, data})
    })
}

module.exports.getTasks = (req, res) => {
    Tasks.find({projectId: req.params.id}, (err, data) => {
        if(err){
            res.json(err)
        }
        res.json({success: true, data})
    })
}

module.exports.deleteTask = (req, res) => {
    Tasks.findByIdAndRemove({_id: req.params.id}, (err, data) => {
        if(err){
            res.json(err)
        }
        res.json({success: true, data})
    })
}