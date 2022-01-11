import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import KIRimg from '../images/001_UPDATE-01.png'
import { useLocation, Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import Social from './Social';

// import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // paddingRight: theme.spacing(11),
        // paddingLeft: theme.spacing(11),
        paddingBottom: theme.spacing(5),
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
        top: '-45px',
        // justifySelf: 'right'
    },
    appBarNav: {
        position: 'static' ,
        boxShadow: '10px 1px -1px #121212',
        //box shadow Ypx Xpx BLURRpx SPREADpx COLOR
        // boxShadow: 'none',
    },
    toolbar: {
        flexGrow: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#757DE8',
        justifyContent: 'flex-end',
        // borderRadius: 5,
        // minHeight: 120,
        // minWidth: '720px',
        // Width: '100%px',
        // alignItems: 'flex-end',
        // width: 'fit-content',
        alignItems: 'center',
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(10),

    },
    title: {
        flexGrow: 1,
        // fontWeight: 'bold',
        // display: 'none',
        fontSize: '26px',
        // marginLeft: 220,
        // marginRight: 20,
        paddingLeft: '40px',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        
        // alignSelf: 'flex-end',
    },
    homeLink: {
        textDecoration: "none",
        color: "white",
        fontSize: "16px",
        marginTop: theme.spacing(2),
        "&:hover": {
          color: "yellow",
          borderBottom: "1px solid white",
        }
    },      
    // navlinks: {
    //     margin: theme.spacing(1),
    //     display: "flex",
    //     flexDirection: 'column'
    //   }
}));

// Create a media condition that targets viewports at least 768px wide
// const mediaQuery = window.matchMedia('(min-width: 720px)')
// // Check if the media query is true
// if (mediaQuery.matches) {
//   // Then trigger an alert
// alert('Media Query Matched!')
// }

export default function Header() {
    const classes = useStyles();
    const location = useLocation()




    return (
        <div className={classes.root}>
            <Social />
            <AppBar className={classes.appBarNav}>
                <Toolbar className={classes.toolbar}>
                    <img
                        className={classes.logo}
                        src={KIRimg}
                        alt="Keep It Real 100 Logo"
                    />
                    <Typography
                        className={classes.title}
                        variant="h4"
                        color="textPrimary"
                        // nowrap
                    >
                        EMOTIONAL RESCUE COMMUNICATION & CONNECTION GAMES
                    </Typography>
                    
                    {/* <Typography>View More Games!</Typography>
                    <Link href="#">Visit trance4mationagames.com!</Link> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}
