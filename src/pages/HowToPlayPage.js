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
		fontWeight: '600',
	},
	titleRed: {
		color: '#D2282A',
		fontWeight: '600',
		fontSize: '2.4rem',
		textAlign: 'center',
	},
	textPurple: {
		color:'#7030a0',
		fontSize: '2.4rem',
		fontWeight: '600'
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
						mt: 16,
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
						backgroundColor: '#fff',
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
							p: 10,
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
									<strong>RESPECT </strong> - When people do not feel respected, they shut down. This is the opposite of the
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
						
					</List><strong></strong>
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
								<strong>1.</strong> Please <strong>ENTER Keep It Real 100!</strong>
							</ListItemText>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemText className={classes.numListText}>
								<strong>2.</strong>  The FACILITATOR manages the game for all players.
							</ListItemText>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemText className={classes.numListText}>
								<strong>3.</strong> Each player, in turn, is to choose ONE of the Categories they wish to engage in. The FACILITATOR
								will then click on the chosen Category, and a question or interaction will pop up.
							</ListItemText>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemText className={classes.numListText}>
								<strong>4.</strong> When it is your turn to go first, you are the Leader for that round. Choose a player to go
								first. Choose your Category. Once in that CATEGORY, you will see a large box on the right
								containing one question or interaction. If you like this question or interaction, read it out loud,
								answer it first, and then all other players, in turn, will answer the SAME question or engage in
								the SAME interaction. All discuss and speak on this question or interaction, until you all feel
								complete.
							</ListItemText>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemText className={classes.numListText}>
								<strong>5.</strong> Then, each player, in turn, choose the CATEGORY you would like to engage in, and have the
								FACILITATOR click on that CATEGORY and follow the same instructions above.
							</ListItemText>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemText className={classes.numListText}>
								<strong>6.</strong> When you are the Leader of your turn, and you do not like the question or interaction in the
								large box on the right, you will see a previous and next button - designed so you can go
								backwards and forwards, to choose the question or interaction you wish to engage in. If you do
								not like your question, ask the FACILITATOR to go to the next question, or to scroll through the
								questions or interactions list on the left, and choose a question or interaction to your liking from
								there.
							</ListItemText>
						</ListItem>	
					</List>
				</Box>

				<Box component="span"
						sx={{
							m: 5,
							p: 10,
							pb: 0,
							mb: 0
						}}>
					<Typography className={classes.boldBodyText}>
					<Typography className={classes.titleRed}>INTERACTIVE / DISCUSSION CATEGORY INSTRUCTIONS</Typography>
						<p>There are <strong>FOUR</strong> Interactive / Discussion CATEGORIES in Keep It Real 100.</p>
					</Typography>
					<List>
						<ListItem className={classes.listItem}>
							<ListItemText className={classes.numListText}>
								<strong>1.</strong> <span className={classes.boldTitleText}>Group Interactions</span> - As the Leader, you will read the Interaction you have chosen
								out loud, and then all players will engage together in this Interaction.
							</ListItemText>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemText className={classes.numListText}>
								<strong>2.</strong>  <span className={classes.boldTitleText}>Love Explorations</span> - As the Leader, you will read the Quote you have chosen about
								Love out loud, share your thoughts and / or feelings on this Quote, and then all other
								players will share their thoughts on the SAME Quote.
							</ListItemText>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemText className={classes.numListText}>
								<strong>3.</strong> <span className={classes.boldTitleText}>Musical Encounters</span> - As the Leader, you will read the verse or rap you have chosen
								out loud, share your thoughts and / or feelings on this verse or rap, and then all other
								players will share their thoughts on the SAME verse or rap.
							</ListItemText>
						</ListItem>
						<ListItem className={classes.listItem}>
							<ListItemText className={classes.numListText}>
								<strong>4.</strong> <span className={classes.boldTitleText}>Soul Expressions</span> - Most of these are drawing. You do NOT need to be an artist! Just
								allow yourself to draw anything that comes up for you according to the prompt. As the
								Leader, you will read the Soul Expression you have chosen out loud, give everyone time
								to complete their drawing, and then share yours first. After sharing your drawing, please
								have the other players all share theirs, in turn.
							</ListItemText>
						</ListItem>
					</List>
				</Box>

				<Box component="span"
						sx={{
							m: 5,
							p: 5,
							// pb: 0,
							// mt: 0,
							// mb: 0
						}}>
					<Typography className={classes.boldBodyText}>
						<p><span className={classes.textRed}>I APPRECIATE YOU MOMENTS:</span> If at any time you strongly relate to, or appreciate
						something someone has said or shared, please clap your hands, or some other agreed
						upon expression, to shower this person with <span className={classes.textRed}>APPRECIATION!!!!!</span> </p>
					</Typography>
				</Box>

				<Box component="span"
					sx={{
						m: 5,
						p: 5,
						// pb: 0,
						// mt: 0,
						// mb: 0
					}}>
					<Typography className={classes.boldBodyText}>
					<span className={classes.textRed}>Determining the WINNER</span> - The win is within! When we come together to play Keep It Real 100, we are all WINNERS!!!
					</Typography>

				</Box>
				
				<Box component="span"
					sx={{
						m: 5,
						p: 5,
						// pb: 0,
						// mt: 0,
						// mb: 0
					}}>
					<Typography className={classes.boldBodyText}>
					<span className={classes.titleRed}>THE END</span>: When you have all agreed to end the game, everyone clap for one another for taking
					an active part in this healing experience. You may want to say a Group Prayer. Any player may
					choose their own Prayer to end with, or any player may begin with their own first sentence, and
					have each person in the group add a sentence until the prayer feels complete.
					</Typography>
				</Box>
					
				<Box component="span"
					sx={{
						m: 5,
						p: 5,
						// pb: 0,
					}}>
					<Typography className={classes.titleRed}>BEFORE WE START - A FEW IMPORTANT MEMOS:</Typography>

					<Typography className={classes.boldBodyText}>
						<p>If a question or interaction does not appeal to you, feel free to pass on it, but please remain
						actively engaged.</p>
						<p>This is designed to be a conflict-free zone. If a question becomes stressful, please feel free to
						immediately move on to another question, or Interaction.</p>
						<p>Keep It Real 100 game play can last for as short or as long, as you would like to play.</p>
					</Typography>
				</Box>

				<Box component="span"
					sx={{
						m: 5,
						p: 5,
						// pb: 0,
					}}>
					<Typography className={classes.boldBodyText}>
					<Typography className={classes.titleRed}>THERE ARE NO RIGHT OR WRONG ANSWERS</Typography>
						<p>Everyone will be sharing their own unique experiences. We are here to open our hearts and
						minds to one another, as we uplift our spirits. No judgments allowed. Please speak only to your
						comfort level, and express as much, or as little as you are comfortable with. Again, it is
						important that everyone agrees there will be no repercussions when one speaks their truth.</p>
					</Typography>
					</Box>
				<Box component="span"
					sx={{
						m: 5,
						p: 5,
						// pb: 0,
					}}>
					<Typography className={classes.boldBodyText}>
					<Typography className={classes.textPurple}>BLESSINGS AND HEALING TO ALL</Typography>
						<h1 style={{color:'#D2282A'}}>ENJOY!!</h1>
					</Typography>
					</Box>

				<Footer />
			</Grid>
		</div>
	)
}
					
