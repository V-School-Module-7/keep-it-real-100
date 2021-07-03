import React from 'react'
import Header from '../Header'
import GameQuestions from './QuestionData'
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

export default function TopicList(){
    // console.log(GameCatagories)
    const classes = useStyles()
    
    return (
        <div>
                <Header /> 
            <div className={classes.root}>
                {/* <Drawer
                    className={classes.drawer}
                    varient="permanent"
                    anchor="left"
                    classes={{paper: classes.drawerPaper}}
                > */}
                        <div>
                            <Typography variant="h3">
                                Game Page
                            </Typography>
                        </div>
                        
                        {/* list of Catagories */}
                        
                        <List>
                            {GameQuestions.map(item => (
                                <ListItem key={item.title}>
                                    <Typography variant="h5">
                                        <ListItemText primary={item.title}  className={classes.root} />
                                        <Divider />
                                    </Typography>                                
                                </ListItem>
                            ))}
                        </List>
                        
                    {/* </Drawer> */}
            </div>
        </div>
    )
}