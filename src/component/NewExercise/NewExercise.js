import React from 'react'
import './NewExercise.css'

const NewExercise = props => {
	return (
		<form className='NewExercise'>
			<label>
				Exercise Name:
				<input placeholder='push ups'/>
			</label>

			<label>
				Sets:
				<input/>
			</label>

			<label>
				Reps:
				<input/>
			</label>

			<label>
				Weight:
				<input placeholder='optional'/>
			</label>
			<button type="submit">Submit!</button>
		</form>
	)
}

export default NewExercise