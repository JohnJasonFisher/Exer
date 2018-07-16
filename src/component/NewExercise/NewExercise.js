import React from 'react'
import './NewExercise.css'
import {Button, Glyphicon} from 'react-bootstrap';

const NewExercise = props => {
	return (
		<form className='NewExercise'>
			<label>
				Exercise Name:
				<input placeholder='push ups'/>
			</label>

			<label>
				Sets:
				<input/>
			</label>

			<label>
				Reps:
				<input/>
			</label>

			<label>
				Weight:
				<input placeholder='optional'/>
			</label>

			<div className='btnGroup'>
				<button className='submitBtn' type="submit">Submit!</button>

				<Button bsSize="small">
					<Glyphicon glyph="plus"/>
				</Button>
			</div>
		</form>
	)
}

export default NewExercise