import React from 'react'
import TheQuestions from '../game/TheQuestions'
import GameCatagories from '../game/GameCatagories'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Social from '../components/Social'
import { CardMedia, Typography } from '@material-ui/core'
import Footer from '../components/Footer'



const useStyles = makeStyles((theme) => ({
    media: {
        height: "300px",
        objectFit: 'contain',
        marginTop: '4rem'
    },
    outerDiv: {
       textAlign: 'center'
    },
    titleContainer: {
        margin: '4rem'
    },
    // qContainer: {
    //     maxHeight: '70rem'

    // },
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
        <div className={classes.outerDiv}>
            <CardMedia 
                className={classes.media}
                component='img'
                image={gameCatagory[0].logo}
                alt="Game Logo"
            />
            <div className={classes.titleContainer}>
                <Typography variant="h2">
                    {gameCatagory[0].title}
                </Typography>
                <Typography variant="h4">
                    {gameCatagory[0].editor}
                </Typography>
            </div>
        </div>
        {/* <div className={classes.qContainer}>  */}
            <TheQuestions gameCatagory={gameCatagory[0]} />
        {/* </div> */}
            <Footer/>
        </div>
    )
}

