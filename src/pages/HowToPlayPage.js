import { ClassNames } from '@emotion/react'
import { CssBaseline } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import React from 'react'
import Footer from '../components/Footer'
import Social from '../components/Social'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    boldBodyText: {
        fontWeight: "bolder",
        fontSize: "large",
        textAlign: "center"
      }
   }));

export default function HowToPlay() {

       const classes = useStyles();

    return (
        <div>
            <CssBaseline />

            <Social />
            <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>           <Box sx={{ mt:5,typography: 'h4', fontWeight: 700}}>
           HOW TO PLAY
            </Box>
            <Box component="span" sx={{ m:5, p: 5, border: "1px solid black", borderRadius:"10px", backgroundColor:"#747EE8" }} >
            <Typography variant="body1" className={classes.boldBodyText}><p>Game Instructions
               Choose someone to go first. Whoever chooses the question is the Leader for that round. The Leader reads the question out loud, then each participant will answer the same question, until every participant has answered. Then, the next person is to choose the next question, and so on. You will see a previous and next button – designed so you can go backwards and forwards, to choose the question you wish to reflect on and discuss. If you would like to see all of the questions at once, and choose from the full list, please click on LIST of Questions, and choose your question from there.</p>

                <p>You will see a button for INTERACTIONS. These are enjoyable and fun group activities for all participants to participate in together when you wish to refresh, recharge and take a break from the conversation. When it is your turn to be the Leader, and you wish to switch to an Interaction, click on the list of Interactions to choose the interaction you wish for your group to interact with. Read aloud to all participants, and have fun!

                There are No Right or Wrong Answers
                Everyone will be sharing their own unique experiences. We are here to open our hearts and minds to one another, as we uplift our spirits. No judgments allowed! Please speak to your comfort level and express as much or as little as you are comfortable with.

                Please Set a Safe Space:
                Before starting game play, please have everyone agree that whatever is said during game play will be kept confidential. People might share personal things, so this is important!</p>
                </Typography>
            </Box>
            </Grid>
            <Footer/>
        </div>
    )
}