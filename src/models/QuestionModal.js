import React, { useEffect } from 'react'
import { Fab, makeStyles } from '@material-ui/core'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'


export default function QuestionModal(props) {
    const { 
        currQuestion,
        questions, 
    } = props


    return (
        <div>
            <h1>{ questions[currQuestion] }</h1>

        </div>
    )
}