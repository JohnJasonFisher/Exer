import React from 'react'
import {Panel} from 'react-bootstrap'

import './ExistingExercise.css'

const ExistingExercise = props => {

	let submitBtn = (
		<button type='button' className='close' aria-label='Close'>
			<span onClick={() => props.click(props.id)} aria-hidden='true'>&times;</span>
		</button>
	)

	return (
		<div className='ExistingExercise'>
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
		</div>
	)
}

export default ExistingExercise