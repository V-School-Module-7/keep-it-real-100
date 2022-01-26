import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		justifyContent: 'center',
	},
	toolbar: {
		flexGrow: 1,
		display: 'flex',
		flexFlow: 'column wrap',
		justifyContent: 'flex-end',
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		fontFamily: `'Source Code Pro', monospace`,
		fontWeight: '422',
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
						lineHeight: '5rem',
					}}
				>
					<h1
						style={{
							fontFamily: `'Chicle', cursive`,
							fontSize: '26.7rem',
							paddingTop: '0px',
							width: '90vw',
							marginBottom: '0px',
							marginTop: '122px',
							height: '37vh',
							color: red[800],
						}}
					>
						{`Welcome`}
					</h1>
					<Typography variant="div">
						<h3
							style={{
								fontFamily: `'Chicle', cursive`,
								marginBottom: '0px',
								marginTop: '0px',
								lineHeight: '63px',
								fontSize: '40px',
							}}
						>{`to our`}</h3>
						<b
							style={{ fontSize: '8vw', fontFamily: `'Chicle', cursive` }}
						>{`emotional rescue communication & connection games!!!`}</b>
					</Typography>
				</Typography>
				<Box>
					<Typography
						color="textPrimary"
						style={{
							margin: '0 10vw',
							fontSize: '3rem',
							textAlign: 'left',
							fontFamily: `'Space Mono', monospace`,
							fontWeight: 700,
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
				<Typography>
					{`PLEASE CLICK ON ANY GAME OF YOUR CHOICE TO ACCESS THAT GAME. FEEL FREE
					TO MOVE BACK AND FORTH BETWEEN ANY GAMES THAT CAPTURE YOUR ATTENTION
					AND EXPERIENCE.`.toLowerCase()}
				</Typography>
			</Toolbar>
		</div>
	)
}
