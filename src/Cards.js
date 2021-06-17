import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import kpr100 from './001_UPDATE-01.png';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: '350px',
    },
    button: {
        marginTop: '20px',
    },
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
        >
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={kpr100}
                    alt="Keep It Real 100 Logo"
                />
                <CardActionArea style={{ backgroundColor: '#757DE8' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Corona Virus Emotional Rescue Game
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                        >
                            The CPR game has 100 questions. Please ENTER the
                            game, and begin!
                        </Typography>
                        <Typography align="center">
                            <Button
                                className={classes.button}
                                size="large"
                                variant="contained"
                                color="primary"
                            >
                                PLAY
                            </Button>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={kpr100}
                    title="Keep It Real 100 Logo"
                />
                <CardActionArea style={{ backgroundColor: '#757DE8' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            For The Love of Justice
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                        >
                            For the Love of Justice is dedicated to George
                            Floyd, Ahmaud Arbery, Breonna Taylor and Sandra
                            Bland.
                        </Typography>
                        <Typography align="center">
                            <Button
                                className={classes.button}
                                size="large"
                                variant="contained"
                                color="primary"
                            >
                                PLAY
                            </Button>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={kpr100}
                    title="Keep It Real 100 Logo"
                />
                <CardActionArea style={{ backgroundColor: '#757DE8' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Couple's Love Game
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                        >
                            The CPR Couple's Love Game is designed to help
                            couples navigate and reflect on their unique
                            journey.
                        </Typography>
                        <Typography align="center">
                            <Button
                                className={classes.button}
                                size="large"
                                variant="contained"
                                color="primary"
                            >
                                PLAY
                            </Button>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}
