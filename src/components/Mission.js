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
		fontFamily: `'Poppins', sans-serif`,
	},
	toolbar: {
		flexGrow: 1,
		display: 'flex',
		flexFlow: 'column wrap',
	},
	title: {
		flexGrow: 1,
		fontFamily: `'Poppins', sans-serif`,
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
						gridTemplateRows: '20vw 1vw 10vw',
					}}
				>
					<h1
						style={{
							fontFamily: `'Poppins', sans-serif`,
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
							fontFamily: `'Poppins', sans-serif`,
							margin: '0px',
							fontSize: '40px',
							fontWeight: '400',
						}}
					>{`to our`}</h3>

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
						>{`emotional rescue communication & connection games!!!`}</b>
					</Typography>
				</Typography>
				<Box>
					<Typography
						color="textPrimary"
						style={{
							margin: '10vh 7vw',
							fontSize: '2rem',
							textAlign: 'left',
							fontFamily: `'Poppins', sans-serif`,
							fontWeight: 500,
						}}
					>
						{`During this time of social distancing, uncertainty, harsh realities
						and change, we are here to provide you with opportunities for Social
						Solidarity, Connection and `}
						<b style={{ fontSize: '3rem' }}>{` Healing Together! `}</b>
						{`Developed by a therapist, these games will help you to process and to express your
						thoughts, experiences and feelings.`}
					</Typography>
				</Box>
				<Typography style={{ fontFamily: `'Poppins', sans-serif` }}>
					{`PLEASE CLICK ON ANY GAME OF YOUR CHOICE TO ACCESS THAT GAME. FEEL FREE
					TO MOVE BACK AND FORTH BETWEEN ANY GAMES THAT CAPTURE YOUR ATTENTION
					AND EXPERIENCE.`.toLowerCase()}
				</Typography>
			</Toolbar>
		</div>
	)
}
