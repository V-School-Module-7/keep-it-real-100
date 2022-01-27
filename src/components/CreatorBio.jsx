import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	boldBodyText: {
		fontWeight: 'bold',
		fontSize: 'large',
		textAlign: 'center',
	},
}))

// export default function CreatorBio({profileImg, bio, proTitle, personName}) {
export default function CreatorBio({
	profileImg,
	personName,
	proTitle,
	bio,
	id,
}) {
	const classes = useStyles()

	return (
		<div>
			<Grid container direction="row">
				<Box
					component="span"
					sx={{
						mb: 2,
						mt: 5,
						ml: 5,
						mr: 5,
						p: 5,
						border: '1px solid black',
						borderRadius: '10px',
						backgroundColor: '#747EE8',
					}}
				>
					<Grid container columnSpacing={2}>
						<Grid item xs={12} md={4} lg={3} textAlign={'center'}>
							<Avatar
								alt={personName}
								src={profileImg}
								sx={{
									m: 'auto',
									mb: 2,
									width: 150,
									height: 150,
								}}
							/>
							<Typography className={classes.boldBodyText}>
								{personName}
							</Typography>
							<Typography variant="subtitle2">{proTitle}</Typography>
						</Grid>
						<Grid item xs={12} md={8} mt={2}>
							<Typography variant="h6">{bio}</Typography>
						</Grid>
					</Grid>
				</Box>
			</Grid>
		</div>
	)
}
