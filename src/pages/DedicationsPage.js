import React from 'react'
import { CardMedia, CssBaseline, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Social from '../components/Social'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import dedicationImg1 from '../images/kir_100_dedications.jpeg'
import dedicationImg2 from '../images/kir_100_dedications2.jpg'

const useStyles = makeStyles((theme) => ({
	boldBodyText: {
		fontWeight: '500',
		fontSize: '1.8rem',
		textAlign: 'left',
        lineHeight: '150%',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            lineHeight: 'normal',
            paddingLeft: '4rem'
		},
        [theme.breakpoints.up('md')]: {
            lineHeight:'normal',
            paddingLeft: '4rem'
		},
	},
}))

export default function DedicationsPage() {
    const classes = useStyles()

    return (
        <div>
            <CssBaseline />
			<Social />
				<Box
					sx={{
                            mt: 5,
                            typography: 'h2',
                            fontWeight: 700,
                            textAlign: 'center'
                    }}
				    >{`A DEDICATION`}
                </Box>
                <Grid
                        container
                        direction="row"
                        width="auto"
                        justifyContent="center"
                        marginBottom="200px"
                    >
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        width="700px"
                    >
                        <Box 
                            sx={{
                                width: '550px',
                                mt: 15,
                                p: 5,
                                border: '1px solid black',
                                borderRadius: '10px',
                                backgroundColor: '#fff',
                            }}
                        >
                            <CardMedia
                                component='img'
                                alt='A photo of a woman'
                                src={dedicationImg1}
                                height='750'
                                title='This Woman'
                            />
                                
                        </Box>
                        <Box
                            sx={{
                                width: '550px',
                                mt: 15,
                                // ml: 15,
                                p: 5,
                                border: '1px solid black',
                                borderRadius: '10px',
                                backgroundColor: '#fff',
                            }}
                        >
                            <CardMedia
                                component='img'
                                alt='A photo of a woman'
                                src={dedicationImg2}
                                height='750'
                                title='This Woman'
                            />
                                
                        </Box>
                    </Grid>
                    <Box
                        sx={{
                            display:'flex',
                            justifyContent:'center',
                            flexDirection:'column',
                            height: 'auto',
                            width: '850px',
                            mt: 15,
                            mr: 10,
                        }}
                    >
                        <Typography className={classes.boldBodyText}>
                            &emsp; The Keep it Real 100 game is dedicated to Gloria Wise for her self-less devotion to children. 
                            This includes her contributions to positive youth programs in the community in the North East Bronx; 
                            her tireless work with troubled youth at a former Juvenile Detention Center, and her limitless affection 
                            for the young members of her loving family. Gloria, bore footprints along her path. Her passion for spreading 
                            joy and bringing out the best in others was often by her own design. Along the way there were teachable moments, 
                            words of encouragement, and acknowledgements of good deeds; trips to places of unknown cultures, and countless activities 
                            to showcase young talent. Her family relished in those intimate moments like singing Christmas carols around the piano,  
                            storytelling about past events; or simply playing board games. She was the center of attention and left us all with words to 
                            live by, memories to pass on and a solid foundation to hand down to the next generation. 
                        </Typography>
                        <br/>
                        <Typography className={classes.boldBodyText}>
                            &emsp; The world knows Aunt Gloria for her notable journey which began in the backdrop of South
                            Carolina back in 1960, as one of the first black women to demonstrate. At the time, she was the
                            student government president at Bennett College, and made strides to make a difference in the
                            midst of the Civil Rights Movement. She joined forces with four male students to protest the
                            whites-only rule at a lunch counter of a local Woolworth. When she relayed a piece of her past
                            to my siblings and cousins sitting on the carpet in my Grandmother's living room her “Wise”
                            tale hinged on her courage and sense of black pride. Through her lens, we learned that we were
                            not the only children she influenced. She worked as a city social worker for 31 years and
                            became the director of case management resources at the Spofford Juvenile Detention Center
                            in the Bronx. After retiring from Spofford, she enthusiastically ran the Gloria Wise Boys and
                            Girls Club in Co-op City with her own money. Here she served more than 20,000 young people
                            with programs which spanned from education, recreation, culture to career programs. Her
                            efforts did not go unnoticed, she's been recognized for promoting racial harmony and social
                            equity. Gloria Wise was awarded $5000, the John Lindsay prize from the Citizens' Committee of
                            New York City. Gloria Wise led by example, teaching us the importance of giving back to the
                            community by donating the full prize to the Youth Activities Committee (formerly the active
                            board of the Gloria Wise Boys and Girls Club) which sponsors after-school and summer
                            programs for the youth.
                            Gloria Wise transitioned on June 7 th 1993 at the age of 56 years old. She touched the lives of her
                            family, friends and community and a street sign on Donzetti Place in Co-op City adorns her
                            name.
                            This dedication bestowed to Gloria Wise in lieu of her memory for The Keep it Real 100 game
                            comes with distinction of Gloria Wise's commitment to socio-emotional learning which is at
                            the heart of restoring a part of ourselves especially our youth that bridges self-esteem, core
                            values, joy and mental stability. Her life's work is her unmeasurable legacy and will live on
                            through the game.
                        </Typography>    
                    </Box>
            </Grid>
        </div>
    )
}