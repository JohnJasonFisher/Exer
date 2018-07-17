import React, {Component} from 'react'
import './NewExercise.css'

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

	render () {
		return (
			<form className='NewExercise' onSubmit={event => this.props.submit(event, this.state)}>
				<label>
					Exercise Name:
					<input placeholder='push ups' value={this.state.name} onChange={event => this.inputOnChangeHandler(event, 'name')}/>
				</label>
	
				<label>
					Sets:
					<input value={this.state.sets} onChange={event => this.inputOnChangeHandler(event, 'sets')}/>
				</label>
	
				<label>
					Reps:
					<input value={this.state.reps} onChange={event => this.inputOnChangeHandler(event, 'reps')}/>
				</label>
	
				<label>
					Weight:
					<input placeholder='optional' value={this.state.weight} onChange={event => this.inputOnChangeHandler(event, 'weight')}/>
				</label>
	
				<div className='btnGroup'>
					<button
						className='submitBtn'
						type='submit'
					>
						Submit!
					</button>
				</div>
			</form>
		)
	}
}

export default NewExercise