import React, { Component } from 'react'
import './App.css'
import NewWorkout from '../component/NewWorkout/NewWorkout'

class App extends Component {

	constructor() {
		super()
		this.state = {
			NewWorkout: false
		}
	}

	startWorkoutHandler = () => {
		let newState = {...this.state}
		newState.NewWorkout = !this.state.NewWorkout
		this.setState(newState)
	}

	render() {
		let buttonMsgText = 'Start a new Workout!'
		if (this.state.NewWorkout === true) {
			buttonMsgText = 'Finish a new Workout'
		}

		return (
			<div className="App">
				<NewWorkout
					buttonMsg={buttonMsgText}
					NewWorkout={this.state.NewWorkout}
					click={this.startWorkoutHandler}
				/>
			</div>
		)
	}
}

export default App
