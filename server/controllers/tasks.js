const mongoose = require('mongoose')

//Pulling the model 
const Task = mongoose.model('Task')

module.exports = { 
    allTasks: (req,res) => {
        Task.find({})
            .then( tasks => res.json(tasks))
            .catch( err =>  res.json(err))
    },
    oneTask: (req,res) => {
        Task.findOne({_id: req.params.id})
            .then( task =>  res.json(task))
            .catch( err => res.json(err))
    },
    createTask: (req,res) => {
        const newTask = new Task()
        newTask.title = req.body.data.title;
        newTask.description = req.body.data.description;
        newTask.save()
            .then( newTask =>  res.redirect('/tasks'))
            .catch(err =>  res.json(err))
    },
    updateTask: (req,res) => {
        Task.updateOne({_id: req.params.id}, {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        })
            // .then(res.redirect('/tasks'))
            .catch( err =>  res.json(err))
    },
    destroyTask: (req,res) => {
        Task.deleteOne({_id:req.params.id})
            .then( res.redirect('/tasks'))
            .catch(err =>  res.json(err))
    }
}