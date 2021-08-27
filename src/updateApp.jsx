import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class updateApp extends Component {
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
        axios.post('http://localhost:4000/updateapp/update', registered)
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
                        <form onSubmit={this.onSubmit}>
                            <input type = 'text' 
                            placeholder='First Name'
                            onChange={this.changeFirstName}
                            value={this.state.firstName}
                            className='form-control form-group'/>
                            <br/>
                            <input type = 'text' 
                            placeholder='Last Name'
                            onChange={this.changeLastName}
                            value={this.state.lastName}
                            className='form-control form-group'/>
                            <br/>
                            <input type="date"
                            onChange={this.changeDateOfBirth} 
                            value={this.state.dateOfBirth}
                            className='form-control form-group'/>
                            <br/>
                            <input type="number"
                            placeholder='Age'
                            onChange={this.changeAge}
                            value={this.state.age}
                            className='form-control form-group'/>
                            <br/>
                            <input type = 'text' 
                            placeholder='Username'
                            onChange={this.changeUsername}
                            value={this.state.username}
                            className='form-control form-group'/>
                            <br/>
                            <input type = 'text' 
                            placeholder='E-mail'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'/>
                            <br/>
                            <input type = 'text' 
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'/>
                            <br/>
                            <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
                        </form>
                    </div>
                    <div className="post-users">
                        {this.displayUserList(this.state.posts)}
                    </div>
                </div>
            </div>
         );
    }
}

export default updateApp;