import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        marginRight: theme.spacing(15),
        width: 135,
        height: 135,
    },
    toolbar: {
        backgroundColor: '#757DE8',
        minHeight: 120,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        alignSelf: 'flex-end',
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
                        noWrap
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
