const express = require('express')
const router = express.Router()
const signupTemplateCopy = require('../models/signupmodels')
const bcrypt = require('bcrypt')

router.post('/signup', async (request, response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

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
})

module.exports = router