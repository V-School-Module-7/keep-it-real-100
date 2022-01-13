import { ListSubheader, makeStyles } from '@material-ui/core'


const purp = '#54268F'

const useStyles = makeStyles({
	listSubheader: {
		width: 'inherit',
        position: 'relative',
        top: '-17px',
        backgroundColor: purp,
		marginLeft: '-8px',
		marginRight: '-8px',
		borderRadius: '10px 10px 0 0',
		textAlign: 'center',
        color: 'white',
        fontSize: 'large',

	},
})

export default function ListSubHeader()  {
	const classes = useStyles()



	return (
		<ListSubheader
			className={classes.listSubheader}
		>
			Questions
		</ListSubheader>
	)
}
