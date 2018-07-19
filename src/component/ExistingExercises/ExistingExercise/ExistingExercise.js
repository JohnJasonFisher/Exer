import React from 'react'
import './ExistingExercise.css'
import {ListGroupItem} from 'react-bootstrap'

const classNames = ['ExistingExercise', 'list-group-item']
const ExistingExercise = props => {
	return (
		<div className={classNames}>
			<ListGroupItem>
				<p>Exercise Name: <span className="badge">{props.name}</span></p>

				<p>Sets: <span className="badge">{props.sets}</span></p>

				<p>Reps: <span className="badge">{props.reps}</span></p>

				<p>Weight: <span className="badge">{props.weight}</span></p>
			</ListGroupItem>
		</div>
	)
}

export default ExistingExercise