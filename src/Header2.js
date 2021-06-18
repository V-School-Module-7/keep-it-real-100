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
    },
    logo: {
        // marginRight: theme.spacing(15),
        width: 150,
        height: 150,
        marginLeft: 30,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    toolbar: {
        flexGrow: 1,
        // borderRadius: 50,
        backgroundColor: '#757DE8',
        // borderRadius: 5,
        // minHeight: 120,
        // minWidth: 120,
        // alignItems: 'flex-end',
        alignItems: 'center',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        // display: 'none',
        marginLeft: 220,
        marginRight: 20,
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        // alignSelf: 'flex-end',
    },
}));

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
                        // noWrap
                    >
                        EMOTIONAL RESCUE COMMUNICATION & CONNECTION GAMES
                    </Typography>
                    <img
                        className={classes.logo}
                        src={'./001_UPDATE-01.png'}
                        alt="Keep It Real 100 Logo"
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
}
