import React from 'react'
import NewWorkoutStyle from './NewWorkout.css'

const NewWorkout = props => {

	let buttonMsg = 'Start a new Workout!'
	let NewWorkoutBtnStyle = {...NewWorkoutStyle}

	if (props.newWorkout === true) {
		NewWorkoutBtnStyle.backgroundColor = 'red'
		buttonMsg = 'Finish a new Workout'
	}

	return (
		<div className='NewWorkout'>
			<button onClick={props.click} style={NewWorkoutBtnStyle}>{buttonMsg}!</button>
		</div>
	)
}

export default NewWorkout