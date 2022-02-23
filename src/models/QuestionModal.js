import { Typography } from '@material-ui/core'
import Box from '@mui/material/Box'

export default function QuestionModal(props) {
	const { currQuestion, questions } = props

	return (
		<Box
			component="div"
			sx={{
				mb: 2,
				mt: 2.5,
				ml: 2.5,
				mr: 2.5,
				p: 4,
				border: '1px solid black',
				borderRadius: '10px',
				// backgroundColor: '#747EE8',
				// backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
				backgroundImage: 'linear-gradient(60deg, #3d3393 0%, #2b76b9 27%, #2cacd1 65%, #35eb93 120%)',
				// backgroundImage: 'linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 120%)',
				contain: 'content',
				height: '100%',
				overflowY: 'auto',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Typography
				variant="h4"
				style={{
					textAlign: 'center',
					lineHeight: '150%',
					fontSize: '2rem',
					fontWeight: '400',
				}}
			>
				{questions[currQuestion]}
			</Typography>
		</Box>
	)
}
