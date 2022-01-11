import React from 'react'
import Header from '../components/Header'
import TheQuestions from '../game/TheQuestions'
import GameCatagories from '../game/GameCatagories'
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Social from '../components/Social';


// const useStyles = makeStyles((theme) => ({
//     link: {
//         textDecoration: "none",
//         color: "white",
//         fontSize: "16px",
//         marginLeft: theme.spacing(3),
//         "&:hover": {
//           color: "yellow",
//           borderBottom: "1px solid white",
//         }
//     },      
//     navlinks: {
//         margin: theme.spacing(1),
//         display: "flex",
//         flexDirection: 'column'
//       },
// }))

export default function QuestionsPage() {
    // const classes = useStyles();

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
            {/* <Header /> */}

           <TheQuestions gameCatagory={gameCatagory[0]} />

        </div>
    )
}