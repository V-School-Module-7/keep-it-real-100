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
				backgroundColor: '#747EE8',
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
