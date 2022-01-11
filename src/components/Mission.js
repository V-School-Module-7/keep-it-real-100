import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingRight: theme.spacing(11),
        paddingLeft: theme.spacing(11),
        paddingBottom: theme.spacing(3),
    },
    toolbar: {
        flexGrow: 1,
        // borderRadius: 50,
        display: 'flex',
        // backgroundColor: '#3F51B5',
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
        fontSize: '20px',
        // display: 'none',
        // marginLeft: 220,
        marginRight: 20,
        textAlign: 'center',
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

export default function Mission() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <AppBar position="static"> */}
                <Toolbar className={classes.toolbar}>
                    <Typography
                        className={classes.title}
                        variant="h4"
                        color="textPrimary"
                        // nowrap
                    >
                        WELCOME TO OUR EMOTIONAL RESCUE COMMUNICATION &
                        CONNECTION GAMES!!! <br/> During this time of social
                        distancing, uncertainty, harsh realities and change, we
                        are here to provide you with opportunities for Social
                        Solidarity, Connection and HEALING TOGETHER! Developed
                        by a therapist, these games will help you to process and
                        to express your thoughts, experiences and feelings. <br/>
                        PLEASE CLICK ON ANY GAME OF YOUR CHOICE TO ACCESS THAT
                        GAME. FEEL FREE TO MOVE BACK AND FORTH BETWEEN ANY GAMES
                        THAT CAPTURE YOUR ATTENTION AND EXPERIENCE.
                    </Typography>
                </Toolbar>
            {/* </AppBar> */}
        </div>
    );
}
