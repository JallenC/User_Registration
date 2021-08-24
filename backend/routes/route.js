const express = require('express')
const router = express.Router()
const signupTemplateCopy = require('../models/signupmodels')

router.post('/signup', (request, response) => {
    const signedupUser = new signupTemplateCopy({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    })
    signedupUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router