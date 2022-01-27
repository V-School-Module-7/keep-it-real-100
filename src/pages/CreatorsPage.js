import { CssBaseline } from '@material-ui/core'
import React from 'react'
import Social from '../components/Social'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Bio from '../components/Bio'

export default function CreatorsPage() {
	return (
		<div>
			<CssBaseline />
			<Social />
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
			>
				<Box
					component="span"
					sx={{
						mt: 5,
						typography: 'h2',
						fontWeight: 700,
						textAlign: 'center',
						fontFamily: `'Poppins', sans-serif`,
					}}
				>
					{`CREATORS`}
				</Box>
				<Bio />
			</Grid>
		</div>
	)
}
