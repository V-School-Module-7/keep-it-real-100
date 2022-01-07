import React from 'react';
// import donateButtonPic from '../images/donate-button-pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
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
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "16px",
        marginLeft: theme.spacing(3),
        "&:hover": {
          color: "yellow",
          borderBottom: "1px solid white",
        }
    },      
    navlinks: {
        margin: theme.spacing(1),
        display: "flex",
        flexDirection: 'column'
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
            <AppBar className={classes.appBar} position="static">
                {/* <img
                    src={donateBtnImg}
                    alt="Donate Button"
                    width="200px"
                    height="100px"
                /> */}
                {/* <Button variant="outlined" href="#outlined-buttons">
                    How to Play
                </Button> */}
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
                </div>
                {/* to={{
                pathname: `/kir-game/${id}`
            }} */}
                
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
