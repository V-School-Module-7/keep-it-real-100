import React, { useState } from 'react'
// // import { useHistory } from 'react-router-dom'
// // import Header from '../Header'
// // import GameQuestions from './QuestionData'
// import GameCatagories from './GameCatagories'
import { Box, Fab, makeStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import QuestionModal from '../models/QuestionModal'
import { Grid } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
// import { Box } from '@material-ui/core'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'

// import { Drawer } from '@material-ui/core'
// const drawerWidth = "240px"

const useStyles= makeStyles({
    root:{
        display: "flex",
        flexDirection: "column",
        color: 'white'
    },
    // media: {
    //     height: "300px",
    //     objectFit: 'contain'
    // },
    rightModal: {
        marginLeft: '1rem',
        borderRadius: '10px',
        backgroundColor: '#3F51B5'
    },
    leftList: {
        marginRight: '1rem',
        borderRadius: '10px',
        backgroundColor: '#3F51B5'
    },
    qTitleBox: {
        backgroundColor: '#54268F',
        width: '100%',
        textAlign: 'center'
    },
    qTitle: {

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


export default function TheQuestions({gameCatagory} ){
    const classes = useStyles()
    const { questions } = gameCatagory
    const [ openQ, setOpenQ ] = useState(false)
    const [ currQuestion, setCurrQuestion ] = useState(0)

  
    const questionCompontents = questions.map((q, index) => 
        <ListItem 
            button
            key={index}
            onClick={() => ((setCurrQuestion(index), setOpenQ(true) ))}
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

    const handleIncClick = () => {
        // count.current = count.current + 1/
        setCurrQuestion(prevState => prevState += 1)
    }

    const handleDecClick = () => {
        setCurrQuestion(prevState => prevState -= 1)
    }
    
    console.log('CurrQuestion:', currQuestion)
    
    return (
        <div>
            <div className={classes.root}>
                        <Grid container spacing={4} className={classes.gridContainer} style={{margin:'1rem',}}>
                            <Grid container spacing={0} item xs={4} className={classes.leftList} style={{border:'1px solid black'}}>
                                <Box className={classes.qTitleBox}>
                                    <Typography variant="h4" className={classes.qTitle}>
                                        Questions
                                    </Typography>
                                </Box>
                                
                                <List>
                                    {questionCompontents}
                                </List>
                            </Grid>
                            <Grid container spacing={0} item xs={6} className={classes.rightModal} style={{border:'1px solid black'}}>
                           
                                {openQ ? 
                                    (
                                        <QuestionModal 
                                            currQuestion={currQuestion} 
                                            // id={id} 
                                            questions={questions}
                                        />
                                    )
                                    :
                                    ( 
                                        <Typography variant="h4">
                                            Select a question.
                                        </Typography>
                                    )
                                }
                            <Fab onClick={handleDecClick}><ArrowBackIosRoundedIcon/></Fab>
                            <Fab onClick={handleIncClick}><ArrowForwardIosRoundedIcon/></Fab>
                            </Grid>
                        </Grid>
                    {/* </Drawer> */}
            </div>
        </div>
    )
}