import React from 'react'
import { Link } from 'react-router-dom'
import TheQuestions from '../game/TheQuestions'
import gameCatagories from '../game/GameCatagories'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Social from '../components/Social'
import { CardMedia, Typography } from '@material-ui/core'
import { faBlackberry } from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles((theme) => ({
	media: {
		height: '300px',
		objectFit: 'contain',
		marginTop: '4rem',
	},
	outerDiv: {
		textAlign: 'center',
	},
	titleContainer: {
		margin: '4rem',
	},
	link: {
		textDecoration: 'none',
		color: 'black',
		fontWeight: 'bold',
		padding: '1rem',
		border: '1px solid black',
		fontSize: '1.3rem',
		"&:hover": {
			color: '#D2282A',
		  },
	}
}))

export default function QuestionsPage(props) {
	const classes = useStyles()
	let { gameId } = useParams()

	const gameCatagory = gameCatagories.filter((game) => {
		gameId = parseInt(gameId)
		return game.id === gameId
	})

	console.log(gameCatagory[0])
	console.log(gameId)

	return (
		<div>
			<Social />
			<CssBaseline />
			<div className={classes.outerDiv}>
				<CardMedia
					className={classes.media}
					component="img"
					image={gameCatagory[0].logo}
					alt="Game Logo"
				/>
				<div className={classes.titleContainer}>
					<Typography
						variant="h1"
						style={{fontSize: '4rem', fontWeight: '700', marginBottom: '4rem'}}
					>
						{gameCatagory[0].title}
					</Typography>
					<Link to="/" className={classes.link}>
                            BACK TO CATEGORIES
					</Link>
				</div>
			</div>
			<TheQuestions gameCatagory={gameCatagory[0]} />
		</div>
	)
}
