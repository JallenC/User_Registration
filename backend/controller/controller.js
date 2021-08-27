const { response } = require('express');
const signupTemplateCopy = require('../models/signupmodels');

//create user
exports.create = (request, response) => {
    if(!request.body) {
        response.status(400).send({message: "Fill all the required field!"})
        return;
    }
    const signedupUser = new signupTemplateCopy({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        dateOfBirth: request.body.dateOfBirth,
        age: request.body.age,
        username: request.body.username,
        email: request.body.email,
        password: securePassword
    })
    signedupUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
}

//find registered user
exports.find= (request, response) => {

}

//Update registered user
exports.update = (request, response) => {
    
}