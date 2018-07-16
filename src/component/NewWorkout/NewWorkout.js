import React from 'react'
import NewWorkoutStyle from './NewWorkout.css'

const NewWorkout = props => {

	let NewWorkoutBtnStyle = {...NewWorkoutStyle}
	if (props.NewWorkout === true) {
		NewWorkoutBtnStyle.backgroundColor = 'red'
	}

	return (
		<div className='NewWorkout'>
			<button onClick={props.click} style={NewWorkoutBtnStyle}>{props.buttonMsg}!</button>
		</div>
	)
}

export default NewWorkout