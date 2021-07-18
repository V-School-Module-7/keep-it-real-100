import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
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
        // backgroundColor: '#757DE8',
        backgroundColor: 'primary',
        // backgroundColor: 'primary',
        justifyContent: 'flex-end',
        // borderRadius: 5,
        // minHeight: 120,
        minWidth: '720px',
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
        // color: 'textPrimary',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        // alignSelf: 'flex-end',
    },
}));

// Create a media condition that targets viewports at least 768px wide
// const mediaQuery = window.matchMedia('(min-width: 720px)')
// // Check if the media query is true
// if (mediaQuery.matches) {
//   // Then trigger an alert
// alert('Media Query Matched!')
// }

export default function SearchAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
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
                        src={'./001_UPDATE-01.png'}
                        alt="Keep It Real 100 Logo"
                    />
                    {/* <Typography>View More Games!</Typography>
                    <Link href="#">Visit trance4mationagames.com!</Link> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}
