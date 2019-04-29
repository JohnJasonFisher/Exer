import React from 'react'

import NewWorkoutBtnStyle from './NewWorkoutBtn.css'

const NewWorkoutBtn = props => {

	let buttonMsg = 'Start a new Workout!'
	let NewWorkoutBtnStyleObj = {...NewWorkoutBtnStyle}
	if (props.newWorkout === true) {
		NewWorkoutBtnStyleObj.backgroundColor = 'red'
		buttonMsg = 'Finish a new Workout'
	}

	return (
		<div className='NewWorkoutBtn'>
			<button onClick={props.click} style={NewWorkoutBtnStyleObj}>{buttonMsg}!</button>
		</div>
	)
}

export default NewWorkoutBtn