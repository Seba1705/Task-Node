"use strict"

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TaskSchema = Schema({
    tittle: String,
    description: String,
    status: {
        type:Boolean, 
        default: false
    }
})

module.exports = mongoose.model('tasks', TaskSchema);
