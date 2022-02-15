import React from 'react'
import { CssBaseline, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Social from '../components/Social'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const useStyles = makeStyles((theme) => ({
	boldBodyText: {
		fontWeight: '500',
		fontSize: '2rem',
		textAlign: 'left',
	},
	title: {
		fontWeight: '700',
		fontSize: '2.4rem',
		textAlign: 'left',
		marginBottom: '2rem'
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
						typography: 'h2',
						fontWeight: 700,
					}}
				>{`FAQ`}</Box>
				<Box
					component="span"
					sx={{
						mb: 0,
						mt: 15,
						mr: 15,
						ml: 15,
						p: 5,
						border: '1px solid black',
						borderRadius: '10px',
						backgroundColor: '#fff',
					}}
				>
					<Typography className={classes.title}>Why play Keep It Real 100?</Typography>
					<Typography className={classes.boldBodyText}>
						Keep It Real 100 provides us with a tangible resource to uplift, empower and support one
						another while liberating ourselves from societally imposed narratives and internalized
						oppression. It enables a space where we unapologetically and unashamedly see ourselves and
						one another in our totality, with unconditional acceptance.
					</Typography>
				</Box>

				<Box
					component="span"
					sx={{
						mb: 0,
						mt: 5,
						mr: 15,
						ml: 15,
						p: 5,
						border: '1px solid black',
						borderRadius: '10px',
						backgroundColor: '#fff',
					}}
				>
					<Typography className={classes.title}>Why BIPOC?</Typography>
					<Typography className={classes.boldBodyText}>
						BIPOC (Black/Indigenous People of Color) are the largest and fastest-growing marginalized
						minority group in the United States. Now, more than ever, members of the BIPOC community
						are enrolling in universities or entering spaces that were traditionally not welcoming to them.
						Systemic racism coupled with historical trauma exacerbates the centuries of setbacks BIPOC in
						America still face today.
					</Typography>
				</Box>
				<Box
					component="span"
					sx={{
						mb: 0,
						mt: 5,
						mr: 15,
						ml: 15,
						p: 5,
						border: '1px solid black',
						borderRadius: '10px',
						backgroundColor: '#fff',
					}}
				>
					<Typography className={classes.title}>How will playing Keep It Real 100 benefit me?</Typography>
					<Typography className={classes.boldBodyText}>
						Many people are not as open as they should be when it comes to discussing heavy topics like
						mental health, racial injustice, or other social issues that plague our society. Keep It Real 100
						provides a rare and unique opportunity to speak, connect deeply with one another, and to
						discover our authentic truths about issues that really matter.
					</Typography>
				</Box>
				<Box
					component="span"
					sx={{
						mb: 0,
						mt: 5,
						mr: 15,
						ml: 15,
						p: 5,
						border: '1px solid black',
						borderRadius: '10px',
						backgroundColor: '#fff',
					}}
				>
					<Typography className={classes.title}>Why was the Keep It Real 100 game created?</Typography>
					<Typography className={classes.boldBodyText}>
						We all need a place to be real and to process and make sense of our feelings and experiences.
						Most people feel alone in their heads, many feeling they have no one, or no way to talk about
						important matters. Due to the racism, oppression, and historical trauma which has impacted
						people of color for generations - we are deeply aware of the dire need for a Home for
						“emotional dwelling,” a place of compassionate and empathetic inquiry, a sacred place of
						respect and understanding, a place to put language to our, at times, unformulated experiences
						and feelings, and to enjoy one another through intimate, transformative and unforgettable
						conversations!
					</Typography>
				</Box>
				<Box
					component="span"
					sx={{
						mb: 0,
						mt: 5,
						mr: 15,
						ml: 15,
						p: 5,
						border: '1px solid black',
						borderRadius: '10px',
						backgroundColor: '#fff',
					}}
				>
					<Typography className={classes.title}>Does Keep It Real 100 need a licensed Facilitator or trained Counselor?</Typography>
					<Typography className={classes.boldBodyText}>
					<span style={{color: '#D2282A'}} className={classes.title}>NO... Keep It Real 100 was designed so that anyone can be the Facilitator! </span>The
						game is the “therapist” asking all of the “right” questions. Just grab a friend, or two or three or
						more, play with family, in school, in your Organization or Corporation, across the Continent,
						across the Sea - let us ALL come together in our deepest Humanity!
					</Typography>	
				</Box>
				<Box
					component="span"
					sx={{
						mb: 20,
						mt: 5,
						mr: 15,
						ml: 15,
						p: 5,
						border: '1px solid black',
						borderRadius: '10px',
						backgroundColor: '#fff',
					}}
				>
					<Typography className={classes.title}>Our ask of YOU</Typography>
					<Typography className={classes.boldBodyText}>
						We ask you to join us in this historic effort to bring us all together in loving connection with one
						another, so that we all may have a brighter future together. We ask you to share Keep It Real
						100 widely, as well as to form your own “play therapy” groups, have game nights, invite people
						who might feel alone to come join you, reach across color and culture lines, play
						intergenerationally, help us spread this resource created to assist us to all grow together in
						empathy, compassion and LOVE. Thank you!!
					</Typography>
				</Box>

			</Grid>
		</div>
	)
}
