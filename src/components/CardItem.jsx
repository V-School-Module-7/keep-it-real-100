import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default function CardItem({ title, logo, id }) {
	const useStyles = makeStyles({
		root: {
			flexGrow: 1,
			maxWidth: 345,
			margin: '30px 15px',
		},
		media: {
			height: '350px',
		},
		button: {
			marginTop: '20px',
		},
		playLink: {
			textDecoration: 'none',
			color: 'white',
		},
		typography: {
			position: 'absolute',
			top: 0,
			marginTop: '10rem',
			width: '90%',
		},
	})

	const classes = useStyles()

	return (
		<Card className={classes.root} style={{ height: '550px', width: '400px' }}>
			<CardMedia
				className={classes.media}
				component="img"
				image={logo}
				alt="Game Logo"
			/>
			<CardActionArea style={{ backgroundColor: '#757DE8', height: '100%' }}>
				<CardContent style={{ height: '100%' }}>
					<Typography
						gutterBottom
						variant="h3"
						// component="h2"
						style={{
							fontFamily: `'Chicle', cursive`,
							lineHeight: '1.334',
							letterSpacing: '-1px',
							textAlign: 'center',
						}}
					>
						{title}
					</Typography>
					<Typography className={classes.typography} align="center">
						<Link
							className={classes.playLink}
							to={{
								pathname: `/kir-game/${id}`,
							}}
						>
							PLAY
						</Link>
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}
