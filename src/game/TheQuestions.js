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

// const purp = '#54268F'

const useStyles = makeStyles((theme) => ({
	root: {
		color: 'white',
	}, 
	gridContainer: {
		// flexGrow: 1,
		display: 'flex',
		justifyContent: 'center',
		alignSelf: 'center',
		// maxHeight: '100vh',
		// height: '300px',
	},
	rightModal: {
		height: '750px',
		overflowY: 'hidden',
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
	Arrow: {
		// color: 'red',
		backgroundColor: 'white'
	}
	// qTitleBox: {
	// 	backgroundColor: purp,
	// 	textAlign: 'center',
	// },
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
		>
			<Typography variant="h5">
				<ListItemText primary={q} className={classes.root} />
				<Divider />
			</Typography>
		</ListItem>
	))

	const handleIncClick = () => {
		// count.current = count.current + 1/
		setCurrQuestion((prevState) => (prevState += 1))
	}

	const handleDecClick = () => {
		setCurrQuestion((prevState) => (prevState -= 1))
	}

	console.log('CurrQuestion:', currQuestion)

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
						style={{ border:'1px solid black', paddingBottom:'100px' }}
					>
						{openQ ? (
							<QuestionModal
								currQuestion={currQuestion}
								questions={questions}
							/>
						) : (
							<Typography variant="h4">Select a question.</Typography>
						)}
						<Fab className={classes.Arrow} onClick={handleDecClick}>
							<ArrowBackIosRoundedIcon />
						</Fab>
						<Fab className={classes.Arrow} onClick={handleIncClick}>
							<ArrowForwardIosRoundedIcon />
						</Fab>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}
