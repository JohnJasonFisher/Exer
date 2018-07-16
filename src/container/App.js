import React, { Component } from 'react'
import './App.css'
import NewWorkout from '../component/NewWorkout/NewWorkout'
import NewExercise from '../component/NewExercise/NewExercise.js'

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

		let ShowNewExercise = null
		if (this.state.NewWorkout === true) {
			ShowNewExercise = <NewExercise/>
		}

		return (
			<div className="App">
				<NewWorkout
					buttonMsg={buttonMsgText}
					NewWorkout={this.state.NewWorkout}
					click={this.startWorkoutHandler}
				/>
				{ShowNewExercise}
			</div>
		)
	}
}

export default App