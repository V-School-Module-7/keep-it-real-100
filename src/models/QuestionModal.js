import React from 'react'



export default function QuestionModal(props) {
    const { currQuestion } = props

console.log(currQuestion)


    return (
        <div>
            <h1>{ currQuestion }</h1>
        </div>
    )
}