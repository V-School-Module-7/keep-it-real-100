import React from 'react';
// import donateButtonPic from '../images/donate-button-pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useLocation, Link } from 'react-router-dom';
import KIRimg from '../images/001_UPDATE-01.png'
// import { Link } from '@material-ui/core';
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
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// const donateBtnImg = donateButtonPic;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // paddingRight: theme.spacing(11),
        // paddingLeft: theme.spacing(11),
        // paddingBottom: theme.spacing(5),
        // display: 'flex',
        // position: 'relative'
    },
    appBarSocial: {
        flexDirection: 'row',
        padding: '20px 40px 20px 40px',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'none',
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "14px",
        marginRight: theme.spacing(2),
        "&:hover": {
          color: "yellow",
          borderBottom: "1px solid white",
        }
    },      
    navlinks: {
        // marginRight: theme.spacing(8),
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        // fontWeight: '400',
        fontFamily: 'sans-serif',
        fontWeight: 'lighter',
      },
    toolbar: {
        position: 'absolute',
        right: 0,
        fontSize: "12px"
    },
    logo: {
        // marginRight: theme.spacing(15),
        width: 150,
        height: 150,
        marginLeft: 15,
        // marginRight: 20,
        // marginTop: 20,
        marginBottom: 20,
        position: 'absolute',
        left: '0',
        top: '5px',
        // justifySelf: 'right'
    },
}));

export default function Social() {
    const classes = useStyles()
    const location = useLocation()


    return (
        <div className={classes.root}>
            <AppBar className={classes.appBarSocial} position="static">
                {/* <img
                    src={donateBtnImg}
                    alt="Donate Button"
                    width="200px"
                    height="100px"
                /> */}
                {location.pathname !== '/' && 
                    <img
                        className={classes.logo}
                        src={KIRimg}
                        alt="Keep It Real 100 Logo"
                    />
                }
                <div className={classes.navlinks}>
                    <Link to="/aboutUs" className={classes.link}>
                        ABOUT US
                    </Link>
                    <Link to="/howToPlay" className={classes.link}>
                        HOW TO PLAY
                    </Link>
                    <Link to="/creators" className={classes.link}>
                        CREATORS
                    </Link>
                    <Link to="/faqPage" className={classes.link}>
                        FAQ
                    </Link>
                    {location.pathname !== '/' && 
                        <Link to="/" className={classes.link}>
                            HOME
                        </Link>
                    }
                </div>
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
