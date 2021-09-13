import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { addUser } from "../Service/api";
import { useHistory } from 'react-router-dom';

const initialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    dateofbirth: '',
    gender: '',
    password: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '3% 0 0 25%',
        '& > *': {
            marginTop: 20,
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValues);
    const { firstname, lastname, username, email, dateofbirth, gender, password } = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Register</Typography>
            <FormControl>
                {/* <label>First Name</label>
                <TextField type="text" required /> */}
                <InputLabel required>First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='firstname' value={firstname} />
            </FormControl>
            <FormControl>
                {/* <label>Last Name</label>
                <TextField type="text" required /> */}
                <InputLabel required>Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lastname' value={lastname} />
            </FormControl>
            <FormControl>
                {/* <label>Username</label>
                <TextField type="text" required /> */}
                <InputLabel required>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} />
            </FormControl>
            <FormControl>
                {/* <label>Email</label>
                <TextField type="text" required /> */}
                <InputLabel required>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} />
            </FormControl>
            <FormControl>
                {/* <label>Date of Birth</label>
                <TextField type="date" required/> */}
                <InputLabel required>mm/dd/yyyy</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='dateofbirth' value={dateofbirth} />
            </FormControl>
            <FormControl>
                {/* <label>Gender</label>
                <TextField type="text" /> */}
                <InputLabel required>Gender</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='gender' value={gender} />
            </FormControl>
            <FormControl>
                {/* <label>Password</label>
                <TextField type="password" required /> */}
                <InputLabel required>Password</InputLabel>
                <Input required onChange={(e) => onValueChange(e)} name='password' value={password} />
            </FormControl>
            <Button variant="contained" onClick={() => addUserDetails()} color="primary">Register</Button>
        </FormGroup>
    )
}

export default AddUser;