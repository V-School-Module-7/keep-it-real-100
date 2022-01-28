import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		justifyContent: 'center',
	},
	toolbar: {
		flexGrow: 1,
		display: 'flex',
		flexFlow: 'column wrap',
	},
	title: {
		flexGrow: 1,
		fontWeight: '400',
		fontSize: '20px',
	},
}))

export default function Mission() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Toolbar className={classes.toolbar}>
				<Typography
					component="div"
					className={classes.title}
					style={{
						paddingBottom: '1rem',
						fontSize: '5.7rem',
						textAlign: 'center',
						display: 'grid',
						placeItems: 'center',
						gridTemplateRows: '10vw 1vw 10vw',
					}}
				>
					<h1
						style={{
							fontWeight: '800',
							fontSize: '10rem',
							width: '90vw',
							marginTop: '122px',
							color: '#757DE8',
						}}
					>
						{`Welcome`}
					</h1>
					<h3
						style={{
							margin: '0px',
							fontSize: '40px',
							fontWeight: '400',
							paddingTop: '75px'
						}}
					>{`to`}</h3>

					<Typography variant="div" style={{ placeItems: 'baseline' }}>
						<b
							style={{
								fontSize: '2rem',
								lineHeight: '1em',
								fontWeight: '300',
								placeItems: 'self-start',
								placeSelf: 'center',
								alignSelf: 'self-end',
							}}
						>{`Keep It Real 100 for BIPOC Youth, Adults & Allies.`}</b>
					</Typography>
				</Typography>
				<Box>
					<Typography
						color="textPrimary"
						style={{
							margin: '7vh 7vw',
							fontSize: '2rem',
							textAlign: 'left',
							fontWeight: 500,
						}}
					>
						{`
							We are so glad
							you are here! We have created this Restorative Communication game of 16
							Categories, just for 
						`} <b style={{ fontSize: '2rem' }}>{` YOU!! `}</b> 
						{`Due to the racism, oppression and historical trauma
							which has impacted people of color for generations - we are deeply aware of the
							dire need for a Home for 
						`} <b style={{ fontSize: '2rem' }}>{` "emotional dwelling" `}</b>
						{` 
							a place of compassionate and empathetic inquiry, a sacred place of respect and understanding, a place to put
							language to our, at times, unformulated experiences and feelings, and to enjoy
							one another through intimate, transformative and amazing conversations!
						`} 
						<br/>
						<br/>
						{`
							The Keep It Real 100 Communication Game, designed for BIPOC Youth, Adults and
							Allies provides a safe, structured space for the BIPOC community, and allies to
							connect deeply, to have gentle, intentional, bold conversations, and to discover
							authentic truths about issues that have a profound impact on our lives.`
						}
						<br/>
						<br/>
						{`
							Keep It Real 100 provides us with a tangible resource through which to uplift,
							empower and support one another, while liberating ourselves from societally
							imposed narratives and internalized oppression. It empowers a space where we
							unapologetically and unashamedly see ourselves and one another in our totality,
							with unconditional acceptance.
						`}
					</Typography>
				</Box>
				<Typography style={{fontWeight:'700', fontSize:'42px', color:'#3F51B5', paddingBottom:'5rem', margin: '7vh 7vw'}}>
					{`
						Let us engage and enlighten one another with LOVE, heal and replenish our
						spirits, and re-imagine and co-create a new world in which we rise up together,
						with and because of one another!!
					`}
				</Typography>
			</Toolbar>
		</div>
	)
}
