import React from 'react'
import {
	Box,
	Container,
	CssBaseline,
	makeStyles,
	Paper,
	Typography,
	Grid,
	Link,
} from '@material-ui/core'
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
					variant="h1"
					style={{
						display: 'flex',
						justifyContent: 'center',
						padding: '16px',
						margin: '16 0 16 0',
						fontSize: '4rem',
						fontWeight: '500'
					}}
				>
					Contact Page
				</Typography>
				
				<Grid container spacing={2} container
					direction="column"
					justifyContent="center"
					alignItems="center"
					height="100vh">
						<Grid item xs={4}>
							<Link href="#" underline="hover" target="_blank">
								{'LINK ONE'}
							</Link>
						</Grid>
						<Grid item xs={4}>
							<Link href="#" underline="hover" target="_blank">
								{'LINK TWO'}
							</Link>
						</Grid>
						<Grid item xs={4}>
							<Link href="#" underline="hover" target="_blank">
								{'LINK THREE'}
							</Link>
						</Grid>
				</Grid>
			</Container>
		</div>
	)
}
