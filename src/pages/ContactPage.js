import {
	Box,
	Container,
	CssBaseline,
	makeStyles,
	Paper,
	Typography,
	Avatar,
} from '@material-ui/core'
import { grey, indigo } from '@material-ui/core/colors'
import React from 'react'
import Social from '../components/Social'

const useStyles = makeStyles({
	container: {
		height: '100vh',
		backgroundColor: grey,
	},

	paper: {
		height: 'auto',
		width: '60vw',
		display: 'grid',
		gridAutoFlow: 'column',
		gap: '16px',
		placeItems: 'center',
		backgroundColor: indigo[500],
		color: indigo[50],
		padding: '10px',
	},

	box: {
		display: 'grid',
		placeItems: 'center',
		gap: '24px',
	},
	avatar: {
		// fontSize: '80px',
		height: '60px',
		width: '60px',
	},
	boldBodyText: {
		fontWeight: 'bolder',
		fontSize: 'large',
		textAlign: 'center',
	},
})

export default function ContactPage() {
	const classes = useStyles()
	return (
		<div>
			<CssBaseline />
			<Container
				maxWidth="xl"
				disableGutters="true"
				className={classes.container}
			>
				<Social />
				<Typography
					variant="h2"
					style={{
						display: 'flex',
						justifyContent: 'center',
						padding: '16px',
						margin: '16 0 16 0',
					}}
				>
					Contact Page
				</Typography>
				<Box className={classes.box}>
					<Paper elevation24 className={classes.paper} variant="outlined">
						<div style={{ display: 'grid', placeItems: 'center' }}>
							<Avatar variant="circular" className={classes.avatar} />
							<Typography>this is under</Typography>
						</div>
						<Typography className={classes.boldBodyText}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
						</Typography>
					</Paper>
				</Box>
			</Container>
		</div>
	)
}
