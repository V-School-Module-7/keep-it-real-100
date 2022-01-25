
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

	root: {
		flexGrow: 1,
		display: 'flex',
		justifyContent: 'center',
		// paddingRight: theme.spacing(11),
		// paddingLeft: theme.spacing(11),
		// paddingBottom: theme.spacing(3),
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
		fontFamily: 'Brolachess',
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
						fontSize: '9rem',
						textAlign: 'center',
						lineHeight: '9rem',
					}}
				>
					{`Welcome to our emotional rescue communication`}
				</Typography>
				<Typography
					className={classes.title}
					style={{
						fontSize: '7rem',
						padding: ' 0 8rem 8rem',
						lineHeight: '9rem',
					}}
				>{`& connection games!!!`}</Typography>
				<Box>
					<Typography
						color="textPrimary"
						style={{
							margin: '0 10vw',
							fontSize: '3rem',
							textAlign: 'left',
							fontFamily: 'Belgietta',
						}}
					>
						{`During this time of social distancing, uncertainty, harsh realities
						and change, we are here to provide you with opportunities for Social
						Solidarity, Connection and `}
						<b style={{fontSize: '3rem'}}>{` Healing Together! `}</b>
						{`Developed by a therapist, these games will help you to process and to express your
						thoughts, experiences and feelings.`}
					</Typography>
				</Box>
				<Typography>
					{`PLEASE CLICK ON ANY GAME OF YOUR CHOICE TO ACCESS THAT GAME. FEEL FREE
					TO MOVE BACK AND FORTH BETWEEN ANY GAMES THAT CAPTURE YOUR ATTENTION
					AND EXPERIENCE.`}
				</Typography>
			</Toolbar>
		</div>
	)

}
