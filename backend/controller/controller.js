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
    if(request.query.id) {
        const id = request.query.id;
        signupTemplateCopy.findById(id)
        .then(data => {
            if(data) {
                response.status(404).send({message: "User not found"})
            } else {
                response.send(data)
            }
        })
        .catch(error => {
            response.status(500).send({message: "Error finding the user"})
        })
    } else {
        signupTemplateCopy.find()
        .then(user => {
            response.send(user)
        })
        .catch(error => {
            response.status(500).send({message: error.message||"Error occured while finding the user"})
        })
    }
}

//Update registered user
exports.update = (request, response) => {
    if(!request.body) {
        return response
        .status(400)
        .send({mesage:"Fill all the required fields to update"})
    }
    const id = request.parameters.id;
    signupTemplateCopy.findByIdAndUpdate(id, request.body, {useFindAndModify: false})
    .then(data => {
        if(data) {
            response.status(404).send({message: "Cannot update user"})
        } else {
            response.send(data)
        }
    })
    .catch(error => {
        response.status(500).send({message: "Error updating user"})
    })
}