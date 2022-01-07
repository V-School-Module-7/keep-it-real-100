import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import KIRimg from '../images/001_UPDATE-01.png'
import { useLocation, Link } from 'react-router-dom'
import { Button } from '@material-ui/core';

// import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingRight: theme.spacing(11),
        paddingLeft: theme.spacing(11),
        paddingBottom: theme.spacing(5),
    },
    logo: {
        // marginRight: theme.spacing(15),
        width: 150,
        height: 150,
        marginLeft: 30,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
        // justifySelf: 'right'
    },
    toolbar: {
        flexGrow: 1,
        // borderRadius: 50,
        display: 'flex',
        backgroundColor: '#757DE8',
        justifyContent: 'flex-end',
        // borderRadius: 5,
        // minHeight: 120,
        minWidth: '720px',
        // Width: '100%px',
        // alignItems: 'flex-end',
        // width: 'fit-content',
        alignItems: 'center',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        // display: 'none',
        // marginLeft: 220,
        marginRight: 20,
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        
        // alignSelf: 'flex-end',
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "16px",
        marginLeft: theme.spacing(3),
        "&:hover": {
          color: "yellow",
          borderBottom: "1px solid white",
        }
    },      
    navlinks: {
        margin: theme.spacing(1),
        display: "flex",
        flexDirection: 'column'
      }
}));

// Create a media condition that targets viewports at least 768px wide
// const mediaQuery = window.matchMedia('(min-width: 720px)')
// // Check if the media query is true
// if (mediaQuery.matches) {
//   // Then trigger an alert
// alert('Media Query Matched!')
// }

export default function Header() {
    const classes = useStyles();
    const location = useLocation()




    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    {location.pathname !== '/' && 
                        <Link to="/" className={classes.link}>
                            <Button variant="outlined" href="#outlined-buttons" >
                                HOME
                            </Button>
                        </Link>}
                    <Typography
                        className={classes.title}
                        variant="h4"
                        color="textPrimary"
                        // nowrap
                    >
                        EMOTIONAL RESCUE COMMUNICATION & CONNECTION GAMES
                    </Typography>
                    <img
                        className={classes.logo}
                        src={KIRimg}
                        alt="Keep It Real 100 Logo"
                    />
                    {/* <Typography>View More Games!</Typography>
                    <Link href="#">Visit trance4mationagames.com!</Link> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}
