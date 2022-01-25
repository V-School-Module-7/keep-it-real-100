export default function QuestionModal(props) {
	const { currQuestion, questions } = props

	return (
		<div>
			<h1>{questions[currQuestion]}</h1>
		</div>
	)
}
