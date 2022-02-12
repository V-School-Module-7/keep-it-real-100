import { CssBaseline } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import ListItemIcon from '@mui/material/ListItemIcon'
import CircleIcon from '@mui/icons-material/Circle';
import React from 'react'
import Footer from '../components/Footer'
import Social from '../components/Social'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	boldBodyText: {
		fontWeight: '500',
		fontSize: '2rem',
		textAlign: 'center',
	},
	textRed: {
		color: '#D2282A',
		fontSize: '2.4rem',
		fontWeight: '600'
	},
	textPurple: {
		color:'#7030a0',
		fontSize: '2.4rem',
		fontWeight: '600'
	},
	titleRed: {
		color: '#D2282A',
		fontWeight: '600',
		fontSize: '2.4rem',
		textAlign: 'center',
	},
	iconWrap: {
		position: 'relative'
	},
	icon: {
		position:'absolute', 
		fontSize:'small',  
		color:'black', 
		top: '-50px'
	},
	boldTitleText: {
		color: '#D2282A',
		fontWeight: '600',
		fontSize: '2rem',
		textAlign: 'center',
	},
	listItem: {
		
	},
	listText: {
		listStyleType: 'bullet',
		fontSize: '1.8rem',
	},
	numListText: {
		fontSize: '1.8rem',
	},
}))

export default function HowToPlay() {
	const classes = useStyles()

	return (
		<div>
			<CssBaseline />
			<Social />
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				height="100vh"
			>
				<Box
					sx={{
						mt: 5,
						typography: 'h2',
						fontWeight: 700,
					}}
				>
					HOW TO PLAY
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
					<Typography variant="body1" className={classes.boldBodyText}>
						<p>
							It is our hope that the conversations encouraged by <strong>Keep It Real 100</strong> will provide a <span className={classes.textRed}>Safe</span> and <span className={classes.textRed}>Sacred </span> 
							Space for healing old and new wounds, as well as to bring us together across divides. Please feel free to
							“play” in multicultural groups, as well as in identified race specific groups, as this is a place for Healing,
							and how you Heal is up to you. Please feel free to Lead your own group, on an ongoing basis.
						</p>

						<p>
							This is a place to listen with <span className={classes.textPurple}>LOVE</span>. With <span className={classes.textPurple}>LOVE</span> we all win. When we play <strong>Keep It Real 100</strong> we are all
							<span className={classes.textRed}> EQUAL</span>. We hope your participation will provide you with Peace, Understanding, Love and Hope.
						</p>

						<p>As these conversations have the potential of becoming intense, we would like to offer some basic…</p>
					</Typography>
				</Box >
				<Box component="div"
						sx={{
							m: 5,
							p: 5,
							pb: 0,
							mt: 0,
							mb: 0
						}}>
					<Typography className={classes.titleRed}>GROUND RULES / SET A SAFE SPACE</Typography>
					<List>

						<ListItem className={classes.listItem}>
							<ListItemIcon sx={{position:'relative', }}>
								<CircleIcon sx={{ position:'absolute', fontSize:'small',  color:'black'}} />
							</ListItemIcon>
								<ListItemText className={classes.listText}>
									<strong>CONFIDENTIALITY - </strong>People might share very personal things. Please all agree that whatever is
									said during game play, will remain confidential. Also, please have everyone agree to allow
									each person to speak their own truth without interference.
								</ListItemText>
						</ListItem>

						<ListItem className={classes.listItem}>
							<ListItemIcon sx={{position:'relative'}}>
								<CircleIcon sx={{ position:'absolute', fontSize:'small',  color:'black'}}/>
							</ListItemIcon>
								<ListItemText className={classes.listText}>
									<strong>RESPECT </strong>- When people do not feel respected, they shut down. This is the opposite of the
									mission of Keep It Real 100. It is important that everyone listens to one another with Respect
									(with a Capital R).  
								</ListItemText>
						</ListItem>

						<ListItem className={classes.listItem}>
							<ListItemIcon sx={{position:'relative'}}>
								<CircleIcon sx={{ position:'absolute', fontSize:'small',  color:'black'}}/>
							</ListItemIcon>
								<ListItemText className={classes.listText}>
									<strong>ACTIVE ENGAGEMENT - </strong> Please remain focused and listening and participating actively. This will
									help to fortify and to enhance the healing energy of the group.
								</ListItemText>
						</ListItem>

						<ListItem className={classes.listItem}>
							<ListItemIcon sx={{position:'relative'}}> 
								<CircleIcon sx={{ position:'absolute', fontSize:'small',  color:'black'}}/>
							</ListItemIcon>
								<ListItemText className={classes.listText}>
									<strong>AGREE TO DISAGREE - </strong>You might vehemently disagree with what someone is sharing. This is a
									safe space where everyone is invited to simply speak their own truth. We never know how our
									words, upon reflection will help others to shift their thinking and beliefs.
								</ListItemText>
						</ListItem>

						<ListItem className={classes.listItem}>
							<ListItemIcon sx={{position:'relative'}}>
								<CircleIcon sx={{ position:'absolute', fontSize:'small',  color:'black'}}/>
							</ListItemIcon>
								<ListItemText className={classes.listText}>
									<strong>BE AWARE OF ONE ANOTHER AND TIME SPEAKING - </strong> Please make sure that you do not
									dominate the conversation, so that others will have time to process their own feelings and
									experiences, and to share and be part of the conversation.
								</ListItemText>
						</ListItem>

						<ListItem className={classes.listItem}>
							<ListItemIcon sx={{position:'relative'}}>
								<CircleIcon sx={{ position:'absolute', fontSize:'small',  color:'black'}}/>
							</ListItemIcon>
								<ListItemText className={classes.listText}>
									<strong>NO ATTACKS PERMITTED - </strong> Enough said!
								</ListItemText>
						</ListItem>
						
					</List>
				</Box>
				<Box component="span"
						sx={{
							m: 5,
							p: 5,
							pb: 0,
							mt: 0,
							mb: 0
						}}>
					<Typography className={classes.titleRed}>INSTRUCTIONS</Typography>
					<Typography className={classes.boldBodyText}>
						<p>Before engaging in <strong>Keep It Real 100</strong> let each of us take a deep breath, and <span className={classes.textPurple}>EXHALE</span>.</p>
					</Typography>
				</Box>
				<Box component="span"
						sx={{
							m: 5,
							p: 5,
							pb: 0,
							mb: 0
						}}>
					<Typography className={classes.boldTitleText}>QUESTION CATEGORY INSTRUCTIONS</Typography>
					<Typography className={classes.boldBodyText}>
						<p>There are <strong>TWELVE</strong> Question Categories. For the Love of <strong>Justice / Race & Culture / Our Mental
							Health / Religion & Spirituality All in the Family / Addiction Zone / The Finer Things /
							LGBTQIA+ / Being BIPOC / Loss & Remembrance </strong>
						</p>
					</Typography>
				</Box>
				<Box component="div"
						sx={{
							mr: 5,
							ml: 5,
							pt: 5,
							pr: 20,
							pl: 20,
						}}>
					<List>
						<ListItem className={classes.listItem}>
							<ListItemText className={classes.numListText}>
								1. Please <strong>ENTER Keep It Real 100!</strong>
							</ListItemText>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemText className={classes.numListText}>
								2.  The FACILITATOR manages the game for all players.
							</ListItemText>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemText className={classes.numListText}>
								3. Each player, in turn, is to choose ONE of the Categories they wish to engage in. The FACILITATOR
								will then click on the chosen Category, and a question or interaction will pop up.
							</ListItemText>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemText className={classes.numListText}>
								4. When it is your turn to go first, you are the Leader for that round. Choose a player to go
								first. Choose your Category. Once in that CATEGORY, you will see a large box on the right
								containing one question or interaction. If you like this question or interaction, read it out loud,
								answer it first, and then all other players, in turn, will answer the SAME question or engage in
								the SAME interaction. All discuss and speak on this question or interaction, until you all feel
								complete.
							</ListItemText>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemText className={classes.numListText}>
								5. Then, each player, in turn, choose the CATEGORY you would like to engage in, and have the
								FACILITATOR click on that CATEGORY and follow the same instructions above.
							</ListItemText>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemText className={classes.numListText}>
								6. When you are the Leader of your turn, and you do not like the question or interaction in the
								large box on the right, you will see a previous and next button - designed so you can go
								backwards and forwards, to choose the question or interaction you wish to engage in. If you do
								not like your question, ask the FACILITATOR to go to the next question, or to scroll through the
								questions or interactions list on the left, and choose a question or interaction to your liking from
								there.
							</ListItemText>
						</ListItem>
						
					</List>
				</Box>

				<Footer />
			</Grid>
		</div>
	)
}
					
