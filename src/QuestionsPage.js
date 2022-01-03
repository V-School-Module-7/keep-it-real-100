import React from 'react'
import Header from './Header'
import TheQuestions from './game/TheQuestions'
import GameCatagories from './game/CatagoryData'
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

    console.log(gameCatagory)
    return (
        <div>
            <Header />
             {/* {console.log(gameCatagory)} */}
            <TheQuestions 
                gameCatagory={gameCatagory[0]}
            />
        </div>
    )
}