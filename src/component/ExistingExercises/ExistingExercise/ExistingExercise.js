import React from 'react'
import './ExistingExercise.css'
import {ListGroupItem} from 'react-bootstrap'

const ExistingExercise = props => {
	return (
		<ListGroupItem className='ExistingExercise'>
			<p>Exercise Name: <span className='badge'>{props.name}</span></p>

			<p>Sets: <span className='badge'>{props.sets}</span></p>

			<p>Reps: <span className='badge'>{props.reps}</span></p>

			<p>Weight: <span className='badge'>{props.weight}</span></p>

			<button type='button' className='close' aria-label='Close'>
				<span onClick={() => props.click(props.id)} aria-hidden='true'>&times;</span>
			</button>
		</ListGroupItem>
	)
}

export default ExistingExercise