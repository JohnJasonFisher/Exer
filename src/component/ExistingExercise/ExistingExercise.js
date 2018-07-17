import React from 'react'
import './ExistingExercise.css'

const ExistingExercise = props => {
	return (
		<div className='ExistingExercise'>
			<li>Exercise Name: {props.name}</li>

			<li>Sets: {props.sets}</li>

			<li>Reps: {props.reps}</li>

			<li>Weight: {props.weight}</li>
		</div>
	)
}

export default ExistingExercise