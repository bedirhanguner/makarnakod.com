const mongoose = require('mongoose');
const schema = mongoose.Schema; 

const userSchema = new schema({
    // _id: ObjectId
    username: {type: String, required: true},
    fullname: {type: String, required: true},
    age: {type: Number, required: true},
    entrydate: {type: Date, default: Date.now}
});

const algorithmProblemSchema = new schema({
    // _id
    description: {type: String, required: true},
    difficulty: {type: String, required: true},
    level: {type: String, required: true},
    name: {type: String, required: true},
    examples:{type:Array}
});

const Users = mongoose.model('users', userSchema, 'users');
const AlgorithmProblems = mongoose.model('algorithm_problems', algorithmProblemSchema, 'algorithm_problems');

const mySchemas = {'Users': Users, 'AlgorithmProblems': AlgorithmProblems};

module.exports = mySchemas;