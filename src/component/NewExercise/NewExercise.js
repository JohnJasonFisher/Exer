import React, {Component} from 'react'
import './NewExercise.css'
import * as RB from 'react-bootstrap'

class NewExercise extends Component {

	constructor() {
		super()
		this.state = {
			name: '',
			reps: '',
			sets: '',
			weight: ''
		}
	}

	inputOnChangeHandler(event, attr) {
		let newState = {...this.state}
		newState[attr] = event.target.value
		this.setState(newState)
	}

	clearState() {
		this.setState({
			name: '',
			reps: '',
			sets: '',
			weight: ''
		})
	}

	render () {
		return (
			<form className='NewExercise' onSubmit={event => {this.props.submit(event, this.state); this.clearState()}} >
				<label>Exercise Name:</label>
				<input placeholder='ex: push ups' value={this.state.name} onChange={event => this.inputOnChangeHandler(event, 'name')}/>
				
				<label>Sets:</label>
					<input value={this.state.sets} onChange={event => this.inputOnChangeHandler(event, 'sets')}/>

				<label>Reps:</label>
					<input value={this.state.reps} onChange={event => this.inputOnChangeHandler(event, 'reps')}/>
	
				<label>Weight:</label>
				<input placeholder='(optional)' value={this.state.weight} onChange={event => this.inputOnChangeHandler(event, 'weight')}/>

				<RB.ButtonToolbar>
					<RB.Button
						bsStyle="primary"
						className='submitBtn'
						type='submit'
					>
						Submit!
					</RB.Button>
				</RB.ButtonToolbar>
			</form>
		)
	}
}

export default NewExercise