import React from 'react'
import Header from '../components/Header'
import TheQuestions from '../game/TheQuestions'
import GameCatagories from '../game/GameCatagories'
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Social from '../components/Social';
import { CardMedia, Typography } from '@material-ui/core';
import Footer from '../components/Footer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    media: {
        height: "300px",
        objectFit: 'contain'
    },
    // link: {
    //     textDecoration: "none",
    //     color: "white",
    //     fontSize: "16px",
    //     marginLeft: theme.spacing(3),
    //     "&:hover": {
    //       color: "yellow",
    //       borderBottom: "1px solid white",
    //     }
    // },      
    // navlinks: {
    //     margin: theme.spacing(1),
    //     display: "flex",
    //     flexDirection: 'column'
    //   },
}))


export default function QuestionsPage(props) {
    const classes = useStyles();
    // const history = useHistory()
    // console.log(history)
    let { gameId } = useParams()

    const gameCatagory = GameCatagories.filter(game => {
        gameId = parseInt(gameId)
        return game.id === gameId
    }
    )
    
    console.log(gameCatagory[0])
    console.log(gameId)
    
    return (
        <div>
            <Social />
            <CssBaseline />
            <div>
                <CardMedia 
                    className={classes.media}
                    component='img'
                    image={gameCatagory[0].logo}
                    alt="Game Logo"
                />
                <Typography variant="h2">
                    {gameCatagory[0].title}
                </Typography>
                <Typography variant="h4">
                    {gameCatagory[0].editor}
                </Typography>
            </div>

            <TheQuestions gameCatagory={gameCatagory[0]} />
            <Footer />
        </div>
    )
}