import React from 'react'
// import { useHistory } from 'react-router-dom'
// import Header from '../Header'
// import GameQuestions from './QuestionData'
// import GameCatagories from './CatagoryData'
import { makeStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

// const drawerWidth = "240px"

const useStyles= makeStyles({
    root:{
        display: "flex",
        flexDirection: "column"
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
    const { title, content, questions, id } = gameCatagory

    // console.log(history.location.pathname)
    // const specGame = history.location
    // console.log(specGame)

    const questionCompontents = questions.map(q => 
        <ListItem 
            button
            key={q}
            // onClick={() => history.push(props.gameCatagory.id)}
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
                            <Typography variant="h3">
                                {title}
                                <br/>
                                Questions
                            </Typography>
                        </div>
                        
                        {/* list of Questions */}
                        <List>
                            {questionCompontents}
                        </List>
                    {/* </Drawer> */}
            </div>
        </div>
    )
}