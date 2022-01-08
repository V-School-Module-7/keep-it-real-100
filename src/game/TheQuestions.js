import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import Header from '../Header'
// import GameQuestions from './QuestionData'
import GameCatagories from './GameCatagories'
import { makeStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import QuestionModal from '../models/QuestionModal'
import { Grid } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { Box } from '@material-ui/core'
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
// console.log(GameCatagories)


export default function TheQuestions(props){
    const classes = useStyles()
    // const history = useHistory()
    const {gameCatagory} = props
    const { logo, title, content, questions, id } = gameCatagory
    // console.log(id)
    // console.log(gameCatagory)
    // console.log(history.location.pathname)
    // const specGame = history.location
    const [ openQ, setOpenQ ] = useState(false)
    const [ currQuestion, setCurrQuestion ] = useState('')
    
    // const handleQClick = () => {
    //     console.log('clicked')
    //     setOpenQ(true)
    // }

    const questionCompontents = questions.map((q, index) => 
        <ListItem 
            button
            key={index}
            // onClick={handleQClick}
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
                            <Typography variant="h3">
                                {title}
                                <br/>
                                Questions
                            </Typography>
                        </div>
                        <Grid container spacing={4} style={{margin:'1rem',}}>
                            <Grid item xs={4} style={{border:'1px solid black'}}>
                                <List>
                                    {questionCompontents}
                                </List>
                            </Grid>
                            <Grid item xs={6} style={{border:'1px solid black'}}>
                                {openQ && <QuestionModal currQuestion={currQuestion} id={id}/>}
                            </Grid>
                        </Grid>
                    {/* </Drawer> */}
            </div>
        </div>
    )
}