import React from 'react'
import {Panel, ListGroup} from 'react-bootstrap'

import ExistingExercise from '../ExistingExercises/ExistingExercise/ExistingExercise'

const PastWorkout = (props) => {
	console.log(props)
	let list = []
	Object.keys(props.exercises).forEach(key =>
		list.push(<ExistingExercise key={key} {...props.exercises[key]} submitBtn={false}/>)
	)
	return (
		<div className='PastWorkout' style={{display: 'flex', justifyContent: 'center'}}>
			<Panel>
				<Panel.Heading>{props.date}</Panel.Heading>
				<Panel.Body>
					<ListGroup>
						{list}
					</ListGroup>
				</Panel.Body>
			</Panel>
		</div>
	)
}

export default PastWorkout