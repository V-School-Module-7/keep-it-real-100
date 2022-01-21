import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingRight: theme.spacing(11),
        paddingLeft: theme.spacing(11),
        paddingBottom: theme.spacing(3),
    },
    Typogr: {
        flexGrow: 1,
        // borderRadius: 50,
        display: 'flex',
        // backgroundColor: '#3F51B5',
        justifyContent: 'flex-end',
        // borderRadius: 5,
        // minHeight: 120,
        minWidth: '720px',
        // alignItems: 'flex-end',
        // width: 'fit-content',
        alignItems: 'center',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontSize: '20px',
        // display: 'none',
        // marginLeft: 220,
        marginRight: 20,
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        // alignSelf: 'flex-end',
    },
}));

// Create a media condition that targets viewports at least 768px wide
// const mediaQuery = window.matchMedia('(min-width: 720px)')
// // Check if the media query is true
// if (mediaQuery.matches) {
//   // Then trigger an alert
// alert('Media Query Matched!')
// }

export default function Mission() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <AppBar position="static"> */}
                {/* <Typography className={classes.Typogr}> */}
                    <Typography
                        className={classes.title}
                        variant="h4"
                        color="textPrimary"
                        // nowrap
                    >
                        WELCOME to Keep It Real 100 for BIPOC Youth, Adults &amp; Allies. We are so glad
                        you are here! We have created this Restorative Communication game of 16
                        Categories, just for YOU!! Due to the racism, oppression and historical trauma
                        which has impacted people of color for generations - we are deeply aware of the
                        dire need for a Home for “emotional dwelling” a place of compassionate and
                        empathetic inquiry, a sacred place of respect and understanding, a place to put
                        language to our, at times, unformulated experiences and feelings, and to enjoy
                        one another through intimate, transformative and amazing conversations!
                </Typography>
                <br/>
                <Typography
                        className={classes.title}
                        variant="h4"
                        color="textPrimary"
                        // nowrap
                    >
                        The Keep It Real 100 Communication Game, designed for BIPOC Youth, Adults and
                        Allies provides a safe, structured space for the BIPOC community, and allies to
                        connect deeply, to have gentle, intentional, bold conversations, and to discover
                        authentic truths about issues that have a profound impact on our lives.
                </Typography>
                <br/>
                <Typography
                        className={classes.title}
                        variant="h4"
                        color="textPrimary"
                        // nowrap
                    >
                        Keep It Real 100 provides us with a tangible resource through which to uplift,
                        empower and support one another, while liberating ourselves from societally
                        imposed narratives and internalized oppression. It empowers a space where we
                        unapologetically and unashamedly see ourselves and one another in our totality,
                        with unconditional acceptance.
                </Typography>
                <br/>
                <Typography
                        className={classes.title}
                        variant="h4"
                        color="textPrimary"
                        // nowrap
                    >
                        Let us engage and enlighten one another with LOVE, heal and replenish our
                        spirits, and re-imagine and co-create a new world in which we rise up together,
                        with and because of one another!!
                </Typography>
            {/* </AppBar> */}
        </div>
    );
}
