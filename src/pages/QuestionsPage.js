import React from 'react'
import Header from '../Header'
import TheQuestions from '../game/TheQuestions'
import GameCatagories from '../game/GameCatagories'
import { Button } from '@material-ui/core'
import { useParams } from 'react-router-dom'



export default function QuestionsPage() {
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
            <Button variant="outlined" href="#outlined-buttons">
                HOME
            </Button>
            <Header />

           <TheQuestions gameCatagory={gameCatagory[0]} />

        </div>
    )
}