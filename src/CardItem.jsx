import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import kpr100 from "./images/001_UPDATE-01.png";

export default function CardItem({ title, content }) {

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      maxWidth: 345,
      margin: "30px 15px",
      // marginBottom: '15px'
    },
    media: {
      height: "350px",
    },
    button: {
      marginTop: "20px",
    },
  });

  const classes = useStyles()

  return (

    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={kpr100}
        alt="Keep It Real 100 Logo"
      />
      <CardActionArea style={{ backgroundColor: "#757DE8" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {content}
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
  );
}
