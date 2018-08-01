import React from 'react'
import {ListGroup} from 'react-bootstrap'
import './ExistingExercises.css'
import ExistingExercise from './ExistingExercise/ExistingExercise'
import './ExistingExercise/ExistingExercise'

const ExistingExercises = (props) => {

	let ShowExistingExercises = null
	if (props.exercises.length > 0) {
		ShowExistingExercises = props.exercises.map((ex, index) =>
			<ExistingExercise
				key={'ex' + index}
				{...ex}
				click={props.click}
			/>
		)
		return (
			<ListGroup className={['ExistingExercises']}>
				{ShowExistingExercises}
			</ListGroup>
		)
	} else {
		return (null)
	}

	
}

export default ExistingExercises