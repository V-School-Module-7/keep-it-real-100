import React, { useEffect } from 'react'
import { Fab, makeStyles, Typography } from '@material-ui/core'
import Box from "@mui/material/Box";

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'


export default function QuestionModal(props) {
    const { 
        currQuestion,
        questions, 
    } = props

    const useStyles = makeStyles({
        // root: {
        //   flexGrow: 1,
        // //   maxWidth: 345,
        //   maxHeight: 750,
        //   padding: '3rem',
        // //   margin: "30px 15px",
        // },
      });

      const classes = useStyles()

    return (

        // <div className={classes.root} style={{backgroundColor:'yellow', height:'600px' }}>
            <Box
                 component="div"
                 sx={{
                   mb: 2,
                   mt:2.5,
                   ml:2.5,
                   mr:2.5,
                   p: 2,
                   border: "1px solid black",
                   borderRadius: "10px",
                   backgroundColor: "#747EE8",
                   contain: 'content',
                   height:'100%', 
                //    width:'auto'
                //    maxHeight:'fit-content',
                //    display: 'flex',
                   overflowY: 'auto',
                //    overflow: 'hidden',
                }}>
                <Typography variant='h4'>{ questions[currQuestion] }</Typography>
            </Box>

    //     </div>
    )
}