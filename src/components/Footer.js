import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        // paddingRight: theme.spacing(11),
        // paddingLeft: theme.spacing(11),
        // paddingBottom: theme.spacing(0),
    },
    toolbar: {
        flexGrow: 1,
        display: 'flex',
        backgroundColor: '#3F51B5',
        flexDirection:'column',
        minWidth: '720px',
        alignItems: 'center',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontSize: '28px',
        fontWeight: 'bolder',
        padding: '0 0 1rem 0',
        marginRight: 20,
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    text: {
        flexGrow: 1,
        fontSize: '20px',
        // display: 'none',
        // marginLeft: 220,
        padding: '0 1rem 1rem 1rem',
        marginRight: 20,
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

export default function Footer() {
    const classes = useStyles();
    const location = useLocation()
    console.log(location)


    return (
            <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar className={classes.toolbar}>
                    <Typography
                        className={classes.title}
                        variant="h2"
                        color="textPrimary"
                        // nowrap
                    >
                       DISCLAIMER
                    </Typography>
                    <Typography 
                        className={classes.text}
                        varient="p"
                        color="textPrimary"
                    >
                        Although these games have therapeutic qualities, 
                        they are not meant to be a substitute for professional therapy. 
                        They are meant to be a vehicle through which you can have enjoyable healing conversations and dialogue. 
                        If you are feeling overwhelmed by the ongoing pandemic or any life situation, please seek immediate professional assistance.
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}