import { TableCell, TableRow, Table, TableHead, TableBody, makeStyles, Button } from "@material-ui/core"
import { getUsers, deleteUser } from "../Service/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px',
    },
    thead: {
        '& > *': {
            background: '#3EB489',
            color: '#FFFFFF',
            fontSize: 20,
        }
    },
    row: {
        '& > *': {
            fontSize: 15
        }
    }
})

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyle();

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async() => {
        const response = await getUsers();
        console.log(response);
        setUsers(response.data);
    }

    const deleteUserData = async(id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Date of Birth</TableCell>
                    <TableCell>Gender</TableCell>
                    {/* <TableCell>Password</TableCell> */}
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow className={classes.row}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.firstname}</TableCell>
                            <TableCell>{user.lastname}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.dateofbirth}</TableCell>
                            <TableCell>{user.gender}</TableCell>
                            {/* <TableCell>{user.password}</TableCell> */}
                            <TableCell>
                                <Button variant="contained" color="primary" style={{marginRight: 10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );
}

export default AllUsers;