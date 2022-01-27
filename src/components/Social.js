import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, Link } from 'react-router-dom';
import KIRimg from '../images/001_UPDATE-01.png'
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


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
        fontSize: "2em",
        marginRight: theme.spacing(2),
        "&:hover": {
          color: "yellow",
          borderBottom: "1px solid white",
        }
    },      
    navlinks: {
        display: "grid",
        gridAutoFlow: 'column',
        gridColumnGap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: `'Poppins', sans-serif`,
        fontWeight: '700',
      },
    toolbar: {
        position: 'absolute',
        right: 0,
        fontSize: "12px"
    },
    logo: {
        width: 150,
        height: 150,
        marginLeft: 15,
        marginBottom: 20,
        position: 'absolute',
        left: '0',
        top: '5px',
    },
}));

export default function Social() {
    const classes = useStyles()
    const location = useLocation()


    return (
        <div className={classes.root}>
            <AppBar className={classes.appBarSocial} position="static">
                {location.pathname !== '/' && 
                    <img
                        className={classes.logo}
                        src={KIRimg}
                        alt="Keep It Real 100 Logo"
                    />
                }
                <div className={classes.navlinks}>
                    <Link to="/howToPlay" className={classes.link}>
                        HOW TO PLAY
                    </Link>
                    <Link to="/creators" className={classes.link}>
                        CREATORS
                    </Link>
                    <Link to="/faqPage" className={classes.link}>
                        FAQ
                    </Link>
                    <Link to="/contactPage" className={classes.link}>
                        CONTACT US
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
