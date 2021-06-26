import React from 'react';
import donateButtonPic from './images/donate-button-pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
    faInstagram,
    faTwitter,
    faYoutube,
    faTiktok,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const donateBtnImg = donateButtonPic;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingRight: theme.spacing(11),
        paddingLeft: theme.spacing(11),
        paddingBottom: theme.spacing(5),
        display: 'flex',
        // display: 'flex',
        // justifyContent: "flexEnd"
    },
    appBar: {
        flexDirection: 'row',
        padding: '15px 40px 15px 40px',
        justifyContent: 'space-between',
    },
    // toolbar: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between'
    // }
}));

export default function Social() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <img
                    src={donateBtnImg}
                    alt="Donate Button"
                    width="200px"
                    height="100px"
                />
                <Toolbar className={classes.toolbar}>
                    <FontAwesomeIcon icon={faInstagram} size="2x" fixedWidth />
                    <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
                    <FontAwesomeIcon icon={faYoutube} size="2x" fixedWidth />
                    <FontAwesomeIcon icon={faTiktok} size="2x" fixedWidth />
                    <FontAwesomeIcon icon={faFacebook} size="2x" fixedWidth />
                </Toolbar>
            </AppBar>
        </div>
    );
}

// Might add to icons: https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
