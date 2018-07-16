import React from 'react'
import './ExistingExercise.css'

const ExistingExercise = props => {
	return (
		<form className='ExistingExercise'>
			<label>
				Exercise Name:
				<input placeholder='push ups' value={props.name} readonly/>
			</label>

			<label>
				Sets:
				<input readonly value={props.sets}/>
			</label>

			<label>
				Reps:
				<input readonly value={props.reps}/>
			</label>

			<label>
				Weight:
				<input placeholder='optional' value={props.weight} readonly/>
			</label>
		</form>
	)
}

export default ExistingExercise