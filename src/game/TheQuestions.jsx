import React, { useState } from 'react'
import {  Fab, makeStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import QuestionModal from '../models/QuestionModal'
import { Grid } from '@material-ui/core'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import ListSubHeader from '../components/ListSubheader'


const useStyles = makeStyles((theme) => ({
	root: {
		color: 'white',
	}, 
	gridContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignSelf: 'center',
	},
	rightModal: {
		height: '750px',
		marginLeft: '1rem',
		borderRadius: '10px',
		backgroundColor: '#3F51B5',
	},
	leftList: {
		height: '750px',
		overflowY: 'scroll',
		marginRight: '1rem',
		borderRadius: '10px',
		backgroundColor: '#3F51B5',
	},
	leftArrow: {
		backgroundColor: 'white'
	},
	rightArrow: {
		backgroundColor: 'white'
	}
}))

export default function TheQuestions({ gameCatagory }) {
	const classes = useStyles()
	const { questions } = gameCatagory
	const [openQ, setOpenQ] = useState(false)
	const [currQuestion, setCurrQuestion] = useState(0)

	const questionCompontents = questions.map((q, index) => (
		<ListItem
			button
			key={index}
			onClick={() => ((setCurrQuestion(index), setOpenQ(true)))}
			style={{backgroundColor: index === currQuestion ? '#ffffff30' : '', borderBottom:'.5px solid #4f4f4f'}} 
		>
			<Typography>
				<ListItemText primary={q} className={classes.root} />
			</Typography>
			<Divider />
		</ListItem>
	))

	const handleIncClick = () => {
		if(currQuestion < questions.length -1) {
			setCurrQuestion((prevState) => (prevState += 1))
		}
	}

	const handleDecClick = () => {
		if(currQuestion > 0) {
			setCurrQuestion((prevState) => (prevState -= 1))
		}
	}

	return (
		<div>
			<div className={classes.root}>
				<Grid
					container
					spacing={2}
					className={classes.gridContainer}
					style={{ margin: '1rem' }}
				>
					<Grid
						item
						xs={4}
						className={classes.leftList}
						style={{ border: '1px solid black' }}
					>
						<List>
							<ListSubHeader/>
							{questionCompontents}
						</List>
					</Grid>
					<Grid
						item
						xs={6}
						className={classes.rightModal}
						style={{ border:'1px solid black', paddingBottom:'125px'}}
					>
						{openQ ? (
							<QuestionModal
								currQuestion={currQuestion}
								questions={questions}
							/>
						) : (
							<Typography variant="h4" style={{textAlign:'center'}}>Please select a question</Typography>
						)}
					<div style={{display:'flex', justifyContent:'space-between', alignSelf:'flex-end'}}>
						<Fab className={classes.leftArrow} onClick={handleDecClick}>
							<ArrowBackIosRoundedIcon />
						</Fab>
						<Fab className={classes.rightArrow} onClick={handleIncClick}>
							<ArrowForwardIosRoundedIcon />
						</Fab>
					</div>
					
					</Grid>
				</Grid>
			</div>
		</div>
	)
}