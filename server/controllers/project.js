const Projects = require("../models/project")

module.exports.addProject = (req, res) => {
    const ProjectDetails = req.body;
    Projects.create(ProjectDetails, (err, data) => {
        if(err){
            res.json(err)
        }
        res.json({success: true, data})
    })
}

module.exports.getProjects = (req, res) => {
    Projects.find((err, data) => {
        if(err){
            res.json(err)
        }
        res.json({success: true, data})
    })
}

module.exports.getSingleProject = (req, res) => {
    Projects.findById({_id: req.params.id}, (err, data) => {
        if(err){
            res.json(err)
        }
        res.json({success: true, data})
    })
}

module.exports.updateSingleProject = (req, res) => {
    const updateDetails = req.body;
    Projects.findByIdAndUpdate({_id: req.params.id}, updateDetails, {new: true}, (err, data) => {
        if(err){
            res.json(err)
        }
        res.json({success: true, data})
    })
}