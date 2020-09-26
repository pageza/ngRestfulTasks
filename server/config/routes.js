// Requiring mongoose for funcationality
const mongoose = require('mongoose');
// require the the controllers from "../controller/<file names>"
const tasks = require('../controllers/tasks');


module.exports = (app) => {
    // This is where all the routes go, calling on functions from the controllers
    app.get('/tasks', (req, res) => {
        tasks.allTasks(req,res)
    });

    app.get('/tasks/:id', (req, res) => {
        tasks.oneTask(req,res)
    });

    app.post('/tasks', (req, res) => {
        tasks.createTask(req,res)
    });

    app.put('/tasks/:id', (req, res) => {
        tasks.updateTask(req,res)
    });

    app.delete('/tasks/:id', (req, res) => {
        tasks.destroyTask(req,res)
    });
}