import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faYoutube, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingRight: theme.spacing(11),
        paddingLeft: theme.spacing(11),
        // display: 'flex',
        // justifyContent: "flexEnd"
    },
    logo: {
        width: 150,
        height: 150,
        marginLeft: 30,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
        // display: "flex",
        // justifyContent: "flexEnd"
    },
}));

export default function Social() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <FontAwesomeIcon icon={ faInstagram } size="lg" />
                    <FontAwesomeIcon icon={ faTwitter} size="lg" />
                    <FontAwesomeIcon icon={ faYoutube } size="lg" />
                    <FontAwesomeIcon icon={ faTiktok } size="lg" />
                    <FontAwesomeIcon icon={ faFacebook } size="lg" />
                </Toolbar>
            </AppBar>
        </div>
    )
}