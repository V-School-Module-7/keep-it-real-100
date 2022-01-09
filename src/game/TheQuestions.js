import React, { useEffect, useRef, useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import Header from '../Header'
// import GameQuestions from './QuestionData'
import GameCatagories from './GameCatagories'
import { Fab, makeStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import QuestionModal from '../models/QuestionModal'
import { Grid } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { Box } from '@material-ui/core'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'

// import { Drawer } from '@material-ui/core'
// const drawerWidth = "240px"

const useStyles= makeStyles({
    root:{
        display: "flex",
        flexDirection: "column"
    },
    media: {
        height: "300px",
        objectFit: 'contain'
    },
    // drawer:{
    //     width: drawerWidth,
    //     // flexShrink: 0
    // },
    // drawerPaper: {
    //     width: drawerWidth
    // },
    // page: {
    //     width: "100%"
    // }

})


export default function TheQuestions(props){
    const classes = useStyles()
    // const history = useHistory()
    const {gameCatagory} = props
    const { logo, title, editor, content, questions, id } = gameCatagory
    
    // console.log(gameCatagory)
    // console.log(history.location.pathname)
    // const specGame = history.location
    const [ openQ, setOpenQ ] = useState(false)
    const [ currQuestion, setCurrQuestion ] = useState('')
    const [ questionState, setQuestionState ] = useState(questions)
    const [ questionIndex, setQuestionIndex ] = useState(0)
    
    // console.log(' Questions:', questions[4])
    
    let count = useRef(questions.indexOf(questionIndex));
        
        const handleIncClick = (prev) => {
            count.current = count.current+1
            console.log("clicked")
            console.log('count:', count)
            setQuestionState(count)
            setQuestionIndex(count)
            console.log('QS: ', questionState)
            console.log('QIndex: ', questionIndex)
        }
        const handleDecClick = (prev) => {
            count.current = count.current-1
            console.log("clicked")
            console.log('count:', count)
            setQuestionState(count)
            setQuestionIndex(count)
            console.log('QS: ', questionState)
            console.log('QIndex: ', questionIndex)
        }
        


    const questionCompontents = questions.map((q, index) => 
        <ListItem 
            button
            key={index}
            onClick={() => ((setCurrQuestion(q), setOpenQ(true) ))}
            // onClick={() => history.push(id)}
        >
            <Typography variant="h5">
                <ListItemText 
                    primary={q}  
                    className={classes.root} 
            />
            <Divider />
            </Typography>                                
        </ListItem>
    )

    console.log(currQuestion)
    
    return (
        <div>
            <div className={classes.root}>
                {/* <Drawer
                    className={classes.drawer}
                    varient="permanent"
                    anchor="left"
                    classes={{paper: classes.drawerPaper}}
                > */}
                        <div>
                            <CardMedia
                                className={classes.media}
                                component='img'
                                image={logo}
                                alt="Game Logo"
                            />
                            <Typography variant="h2">
                                {title}
                            </Typography>
                            <Typography variant="h4">
                                {editor}
                            </Typography>
                        </div>
                        <Grid container spacing={4} className={classes.gridContainer} style={{margin:'1rem',}}>
                            <Grid item xs={4} className={classes.leftList} style={{border:'1px solid black'}}>
                                <List>
                                    {questionCompontents}
                                </List>
                            </Grid>
                            <Grid item xs={6} className={classes.rightModal} style={{border:'1px solid black'}}>
                                {openQ && <QuestionModal 
                                currQuestion={currQuestion} 
                                id={id} 
                                questionState={questionState} 
                                setQuestionState={setQuestionState
                                }/>}
                            <Fab onClick={handleDecClick}><ArrowBackIosRoundedIcon/></Fab>
                            <Fab onClick={handleIncClick}><ArrowForwardIosRoundedIcon/></Fab>
                            </Grid>
                        </Grid>
                    {/* </Drawer> */}
            </div>
        </div>
    )
}