import React from 'react'
import {ListGroup, Panel} from 'react-bootstrap'
import Moment from 'moment'

import './ExistingExercises.css'
import './ExistingExercise/ExistingExercise'
import ExistingExercise from './ExistingExercise/ExistingExercise'

const ExistingExercises = props => {

	let ShowExistingExercises = null
	if (props.exercises.length > 0) {
		ShowExistingExercises = props.exercises.map((ex, index) =>
			<ExistingExercise
				key={'ex' + index}
				id={index}
				{...ex}
				click={props.click}
				submitBtn={props.submitBtn}
			/>
		)
		return (
			<ListGroup className='ExistingExercises'>
				<Panel>
					<Panel.Heading>
						<Panel.Title toggle>{Moment(props.date).format('MMMM Do YYYY')}</Panel.Title>
					</Panel.Heading>
						<Panel.Body collapsible>
							{ShowExistingExercises}
						</Panel.Body>
				</Panel>
			</ListGroup>
		)
	} else {
		return (null)
	}

	
}

export default ExistingExercises