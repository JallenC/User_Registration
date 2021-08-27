import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class userLists extends Component {
    constructor () {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            age: '',
            username: '',
            email: '',
            password: ''
        }
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeDateOfBirth = this.changeDateOfBirth.bind(this)
        this.changeAge = this.changeAge.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFirstName(event) {
        this.setState({
            firstName:event.target.value
        })
    }
    changeLastName(event) {
        this.setState({
            lastName:event.target.value
        })
    }
    changeDateOfBirth(event) {
        this.setState({
            dateOfBirth:event.target.value
        })
    }
    changeAge(event) {
        this.setState({
            age:event.target.value
        })
    }
    changeUsername(event) {
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event) {
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event) {
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const registered = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dateOfBirth: this.state.dateOfBirth,
            age: this.state.age,
            username: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:4000/userLists/home', registered)
            .then(response => console.log(response.data))

        this.setState({
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            age: '',
            username: '',
            email: '',
            password: ''
        })
    }

    render() {
        return ( 
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <div className='list'>
                            <table>
                                <tr>
                                    <td>First Name</td>
                                    <td>Last Name</td>
                                    <td>Date of Birth</td>
                                    <td>Age</td>
                                    <td>Username</td>
                                    <td>E-mail</td>
                                </tr>
                                <tr>
                                    <td>First Name</td>
                                    <td>Last Name</td>
                                    <td>Date of Birth</td>
                                    <td>Age</td>
                                    <td>Username</td>
                                    <td>E-mail</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}

export default userLists;