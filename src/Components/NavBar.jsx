import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#046307'
    },
    tabs: {
        color: '#FFFFFF',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20,
    }
})

const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to='./' exact>User_Registration</NavLink>
                <NavLink className={classes.tabs} to='/all' exact>User Lists</NavLink>
                <NavLink className={classes.tabs} to='/add' exact>Register</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;