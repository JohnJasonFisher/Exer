import React from 'react'
import './ExistingExercise.css'
import {ListGroupItem, Panel} from 'react-bootstrap'

const ExistingExercise = props => {

	let submitBtn = (
		<button type='button' className='close' aria-label='Close'>
			<span onClick={() => props.click(props.id)} aria-hidden='true'>&times;</span>
		</button>
	)

	return (
		<ListGroupItem className='ExistingExercise'>
			<Panel>
				<Panel.Heading>
					<p>Exercise Name: {props.name}</p>
					{props.submitBtn ? submitBtn : null}
				</Panel.Heading>
				<Panel.Body>
					<p>Sets: <span className='badge'>{props.sets}</span></p>

					<p>Reps: <span className='badge'>{props.reps}</span></p>

					<p>Weight: <span className='badge'>{props.weight}</span></p>
				</Panel.Body>
			</Panel>
			

		</ListGroupItem>
	)
}

export default ExistingExercise