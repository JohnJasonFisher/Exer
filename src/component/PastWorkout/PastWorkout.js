import React from 'react'
import {Panel} from 'react-bootstrap'

const PastWorkout = (props) => {
	let list = []
	Object.keys(props.exercises).forEach(key =>
		list.push(<li><p>{props.exercises[key].name}</p></li>)
	)
	return (
		<div className='PastWorkout'>
			<Panel>
				<Panel.Heading>{props.date}</Panel.Heading>
				<Panel.Body>
					<ul>
						{list}
					</ul>
				</Panel.Body>
			</Panel>
		</div>
	)
}

export default PastWorkout