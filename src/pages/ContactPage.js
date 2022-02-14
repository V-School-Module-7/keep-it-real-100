import React from 'react'
import {
	Container,
	CssBaseline,
	makeStyles,
	Typography,
	Grid,
	Link,
} from '@material-ui/core'
import Box from '@mui/material/Box'
import { grey, indigo } from '@material-ui/core/colors'
import Social from '../components/Social'

const useStyles = makeStyles({
	container: {
		height: '100vh',
		backgroundColor: grey,
	},
	boldBodyText: {
		fontWeight: '500',
		fontSize: '2rem',
		textAlign: 'center',
	},
	boldBodyText: {
		fontWeight: 'bolder',
		fontSize: 'large',
		textAlign: 'center',
	},
	grid: {
		marginTop: '10rem',
	},
	emailLink: {
		color: '#D2282A',
		fontSize: '1.8rem',
		fontWeight: '600',
		"&:hover" : {
			textDecoration: 'none'
		}
	},
	subText: {
		fontWeight: '400',
		fontSize: '1.8rem',
		textAlign: 'center',
	}
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
				<Grid 
					className={classes.grid}
					container 
					spacing={2} 
					direction="column"
					justifyContent="center"
					alignItems="center"
					height="100vh"
				>
				<Typography
					variant="h1"
					style={{
						display: 'flex',
						textAlign: 'center',
						justifyContent: 'center',
						padding: '16px',
						fontSize: '4rem',
						fontWeight: '500'
					}}
				>
					Contact Transformation Games
				</Typography>
				
				<Box
					component="span"
					className={classes.emailLink}
					sx={{
						mb: 0,
						mt: 10,
						mr: 15,
						ml: 15,
						p: 5,
						border: '1px solid black',
						borderRadius: '10px',
						backgroundColor: '#fff',
						"&:hover": {
							backgroundColor: '#FFF9A3',
						}
					}}
				>
					<Link href= 'mailto:RobinsonL3@aol.com' underline="hover" target="_blank" className={classes.emailLink}>Email Us!</Link>
				</Box>

				<Box component="span"
						sx={{
							m: 5,
							p: 5,
						}}>
					<Typography >
						<p className={classes.subText}>Please take the time to reach out for any reason, thank you!</p>
					</Typography>
				</Box>

				</Grid>
			</Container>
		</div>
	)
}
