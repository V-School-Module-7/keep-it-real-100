import React from "react";
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import kpr100 from "./images/001_UPDATE-01.png";

export default function CardItem({ title, content, path, questions, id }) {

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      maxWidth: 345,
      margin: "30px 15px",
    },
    media: {
      height: "350px",
    },
    button: {
      marginTop: "20px",
    },
  });

  const classes = useStyles()
  // const history = useHistory()
  // const params = useParams()

  // function handleClick() {
  //   // e.preventDefault()
  //   console.log(path)
    
  // }

  // const thisCard = GameCatagories.find(question => question.title == params.title)
  // const title= thisCard.title

  return (

    <Card className={classes.root}
    style={{height: '550px', width: '400px'}}
    
    >
      <CardMedia
        className={classes.media}
        image={kpr100}
        alt="Keep It Real 100 Logo"
        // style={{ position: 'relative'}}
      />
      <CardActionArea style={{ backgroundColor: "#757DE8", height: '100%' }}>
        <CardContent style={{height: '100%'}}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {content}
          </Typography>
          <Typography align="center">
            {/* <Button */}
            <Link to={{
                pathname: `/kir-game/${id}`
            }}>PLAY</Link>
              {/* onClick={() => {handleClick()}}
              className={classes.button}
              size="large"
              variant="contained"
              color="primary"
            > */}
              PLAY
            {/* </Button> */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
