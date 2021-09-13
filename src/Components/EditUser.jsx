import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { editUser, getUsers } from "../Service/api";
import { useHistory, useParams } from 'react-router-dom';

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

const EditUser = () => {
    const [user, setUser] = useState(initialValues);
    const { firstname, lastname, username, email, dateofbirth, gender, password } = user;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit User</Typography>
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
                <Input onChange={(e) => onValueChange(e)} name='password' value={password} />
            </FormControl>
            <Button variant="contained" onClick={() => editUserDetails()} color="primary">Update</Button>
        </FormGroup>
    )
}

export default EditUser;