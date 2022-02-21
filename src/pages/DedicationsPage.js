import React from 'react'
import { CardMedia, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Social from '../components/Social'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import dedicationImg1 from '../images/kir_100_dedications.jpeg'
import dedicationImg2 from '../images/kir_100_dedications2.jpg'

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
                        justifyContent="center"
                        alignItems="center"
                    >
				<Box
					
					sx={{
                        width: '650px',
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
                        src={dedicationImg1}
                        height='750'
                        title='This Woman'
                    />
                        
				</Box>
				<Box
					
					sx={{
                        width: '650px',
						mt: 15,
						ml: 15,
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
        </div>
    )
}