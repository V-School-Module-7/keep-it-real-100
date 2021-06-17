import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { Typography } from '@material-ui/core';
// import kpr100 from './001_UPDATE-01.png';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        minWidth: 1280,
        maxWidth: 1000,
        flexDirection: 'column',
        // flexGrow: 1,
        padding: '20px',
        // width: '1250px',
    },
    logo: {
        display: 'flex',
        // justifyContent: 'flex-end',
        // alignSelf: 'flex-end',
        width: 135,
        height: 135,
    },
    header: {
        display: 'block',
        // display: 'flex',
        // flexWrap: 'wrap',
        fontSize: '30px',
    },
});

const Header = () => {
    const classes = useStyles();

    return (
        <nav className={classes.root}>
            <AppBar
                position="static"
                color="inherit"
                style={{
                    backgroundColor: '#757DE8',
                    borderRadius: '3px',
                    fontSize: '15px',
                }}
            >
                <Toolbar
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Grid justify={'center'} alignItems={'center'} container>
                        <Grid item>
                            <Grid container justify={'center'}>
                                <Typography
                                    className={classes.header}
                                    // variant="body3"
                                    // color="textPrimary"
                                    // component="h1"
                                >
                                    EMOTIONAL RESCUE COMMUNICATION & CONNECTION
                                    GAMES
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid style={{ justifySelf: 'center' }} item>
                            <img
                                className={classes.logo}
                                src={'./001_UPDATE-01.png'}
                                alt="Keep It Real 100 Logo"
                            />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </nav>
    );
};

export default Header;
