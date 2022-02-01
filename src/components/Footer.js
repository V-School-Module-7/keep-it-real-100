import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:'5rem',
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
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bolder',
        padding: '0 0 1rem 0',
        marginRight: 20,
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        display: 'block',

    },
    text: {
        flexGrow: 1,
        color: 'white',
        fontSize: '2rem',
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
                        Although this game has therapeutic qualities, 
                        it is not meant to be a substitute for professional therapy. 
                        Keep It Real 100 is meant to be a vehicle through which you can have enjoyable, transformative and healing conversations and dialogue. 
                        If you are feeling overwhelmed by any life situation, please seek immediate professional assistance.
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}