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
        flexGrow: 1,
        maxWidth: 345,
        margin: '30px 15px',
        // marginBottom: '15px'
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
            spacing={3}
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
                            FOR THE LOVE OF JUSTICE 
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
                            SOUL EXPRESSIONS
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aenean commodo tempus nisi, eu commodo justo faucibus eu.
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
                            RELATIONSHIPS (Self & Others)
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
                    alt="Keep It Real 100 Logo"
                />
                <CardActionArea style={{ backgroundColor: '#757DE8' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            RACE & CULTURE 
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aenean commodo tempus nisi, eu commodo justo faucibus eu.
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
                    alt="Keep It Real 100 Logo"
                />
                <CardActionArea style={{ backgroundColor: '#757DE8' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            OUR MENTAL HEALTH
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aenean commodo tempus nisi, eu commodo justo faucibus eu.
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
                    alt="Keep It Real 100 Logo"
                />
                <CardActionArea style={{ backgroundColor: '#757DE8' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            RELIGION & SPIRITUALITY
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aenean commodo tempus nisi, eu commodo justo faucibus eu.
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
                    alt="Keep It Real 100 Logo"
                />
                <CardActionArea style={{ backgroundColor: '#757DE8' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            FUN GROUP INTERACTIONS 
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
                    alt="Keep It Real 100 Logo"
                />
                <CardActionArea style={{ backgroundColor: '#757DE8' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            SEXUALITY & GENDER ROLES 
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
                    alt="Keep It Real 100 Logo"
                />
                <CardActionArea style={{ backgroundColor: '#757DE8' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            ALL IN THE FAMILY 
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aenean commodo tempus nisi, eu commodo justo faucibus eu.
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
                    alt="Keep It Real 100 Logo"
                />
                <CardActionArea style={{ backgroundColor: '#757DE8' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            LOVE EXPLORATIONS
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aenean commodo tempus nisi, eu commodo justo faucibus eu.
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
                    alt="Keep It Real 100 Logo"
                />
                <CardActionArea style={{ backgroundColor: '#757DE8' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            ADDICTION ZONE
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aenean commodo tempus nisi, eu commodo justo faucibus eu.
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
                    alt="Keep It Real 100 Logo"
                />
                <CardActionArea style={{ backgroundColor: '#757DE8' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            MUSICAL ENCOUNTERS
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aenean commodo tempus nisi, eu commodo justo faucibus eu.
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
                    alt="Keep It Real 100 Logo"
                />
                <CardActionArea style={{ backgroundColor: '#757DE8' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            WORDS FROM OUR ANCESTORS 
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
                    alt="Keep It Real 100 Logo"
                />
                <CardActionArea style={{ backgroundColor: '#757DE8' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            AFFIRMATIONS  
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aenean commodo tempus nisi, eu commodo justo faucibus eu.
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
