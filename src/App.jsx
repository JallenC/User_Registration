import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
    constructor () {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: ''
        }
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
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

    render() {
        return ( 
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form>
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
                </div>
            </div>
         );
    }
}

export default App;