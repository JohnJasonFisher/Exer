import React from 'react'

const NewWorkout = props => {
	return (
		<div className='NewWorkout'>
			<button onClick={props.click}>{props.buttonMsg}!</button>
		</div>
	)
}

export default NewWorkout