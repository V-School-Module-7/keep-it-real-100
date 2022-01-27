import React from 'react'
import { CssBaseline, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Social from '../components/Social'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const useStyles = makeStyles((theme) => ({
	boldBodyText: {
		fontWeight: 'bolder',
		fontSize: 'large',
		textAlign: 'center',
	},
}))

export default function FaqPage() {
	const classes = useStyles()

	return (
		<div>
			<CssBaseline />

			<Social />
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
			>
				<Box
					sx={{
						mt: 5,
						typography: 'h1',
						fontWeight: 700,
						fontFamily: `'Chicle', cursive`,
					}}
				>
					FAQ
				</Box>
				<Box
					component="span"
					sx={{
						m: 5,
						p: 5,
						border: '1px solid black',
						borderRadius: '10px',
						backgroundColor: '#747EE8',
					}}
				>
					<Typography className={classes.boldBodyText}>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</Typography>
				</Box>
			</Grid>
		</div>
	)
}
