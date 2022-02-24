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
			maxWidth: 450,
			minWidth: 450,
			maxHeight: 650
		},
		media: {
			height: '350px',
			objectFit: 'contain',
			margin: '1rem 0 1rem 0'
		},
		button: {
			marginTop: '20px',
		},
		playLink: {
			textDecoration: 'none',
			width: 'fit-content',
			backgroundColor: '#ffffff30',
			borderRadius: '10px',
			padding: '1rem',
			color: 'white',
			fontSize: '28px',
			fontWeight: 'bold',
			letterSpacing: '3px',
			'&:hover': {
				color: '#D2282A',
			},
			display: 'grid',
			position: 'relative',
			top: '150px',
		},
		typography: {
			position: 'absolute',
			top: '0',
			align: 'center',
			right: '175px'
		},
	})

	const classes = useStyles()

	return (
		<Card className={classes.root} style={{ height: '650px' }}>
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
						variant="h5"
						component="h2"
						style={{
							color: '#fff',
							fontWeight: '600',
							fontSize: '2rem',
							lineHeight: '1.334',
							letterSpacing: '-1px',
							textAlign: 'center',
							marginTop: '2rem'
						}}
					>
						{title}
					</Typography>
					<Typography className={classes.typography} >
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
