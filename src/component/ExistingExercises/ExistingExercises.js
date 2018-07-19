import React from 'react'
import {ListGroup} from 'react-bootstrap'
import ExistingExercise from './ExistingExercise/ExistingExercise'

const ExistingExercises = (props) => {

	let ShowExistingExercises = null
	if (props.exercises.length > 0) {
		ShowExistingExercises = props.exercises.map((ex, index) =>
			<ExistingExercise
				key={'ex' + index}
				{...ex}
			/>
		)
	}

	return (
	<ListGroup>
		{ShowExistingExercises}
	</ListGroup>
	)
}

export default ExistingExercises