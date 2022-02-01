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
		width: 175,
		height: 175,
		marginLeft: 15,
		marginBottom: 20,
		position: 'absolute',
		left: '0',
		top: '-45px',
		[theme.breakpoints.down('sm')]: {
			left: '40%',
			top: '5px',
			marginBottom: 0,
			marginLeft: 0,
			marginTop: '1rem'
		},
		[theme.breakpoints.up('md')]: {
			top: '-75px'
		},
		[theme.breakpoints.up('lg')]: {
			width: 250,
			height: 250,
		},
		// [theme.breakpoints.up('xl')]: {
		// 	width: 250,
		// 	height: 250,
		// },
	},
	appBarNav: {
		position: 'static',
		display: 'flex',
		boxShadow: '10px 1px -1px #121212',
	},
	toolbar: {
		flexGrow: 1,
		position: 'relative',
		flexDirection: 'column',
		backgroundColor: '#757DE8',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingTop: theme.spacing(6),
		paddingBottom: theme.spacing(10),
	},
	title: {
		flexGrow: 1,
		fontWeight: 700,
		paddingTop: '2vw',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			display: 'block',
			marginTop: '8rem'
		},
	},
	homeLink: {
		textDecoration: 'none',
		color: 'white',
		fontSize: '16px',
		marginTop: theme.spacing(2),
		'&:hover': {
			color: '#FFF9A3',
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
							fontSize: '6rem',
							lineHeight: '1.43',
							letterSpacing: '0.01041em',
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
