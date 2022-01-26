import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import KIRimg from '../images/001_UPDATE-01.png'
import Social from './Social'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		paddingBottom: theme.spacing(5),
	},
	logo: {
		width: 150,
		height: 150,
		marginLeft: 15,
		marginBottom: 20,
		position: 'absolute',
		left: '0',
		top: '-45px',
	},
	appBarNav: {
		position: 'static',
		boxShadow: '10px 1px -1px #121212',
	},
	toolbar: {
		flexGrow: 1,
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#757DE8',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingTop: theme.spacing(6),
		paddingBottom: theme.spacing(10),
	},
	title: {
		flexGrow: 1,
		fontFamily: `'Chicle', cursive`,
		fontWeight: 700,

		paddingTop: '2vw',
		textAlign: 'center',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	homeLink: {
		textDecoration: 'none',
		color: 'white',
		fontSize: '16px',
		marginTop: theme.spacing(2),
		'&:hover': {
			color: 'yellow',
			borderBottom: '1px solid white',
		},
	},
}))

export default function Header() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Social />
			<AppBar className={classes.appBarNav}>
				<Toolbar className={classes.toolbar}>
					<img
						className={classes.logo}
						src={KIRimg}
						alt="Keep It Real 100 Logo"
					/>
					<Typography
						className={classes.title}
						style={{
							fontWeight: 'Bold 700 ',
							fontSize: '7rem',
							lineHeight: '1.43',
							letterSpacing: '0.01071em',
							fontStretch: 'ultra-condensed', 
							fontFeatureSettings: "liga",
						}}
					>
						Keep It Real 100 Game
					</Typography>
					<Typography
						className={classes.title}
						color="textPrimary"
						style={{ paddingTop: 0, fontWeight: 'bold', fontSize: '3rem' }}
					>
						for BIPOC Youth, Adults, & Allies
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)
}
