import React, { Component } from 'react'
import './App.css'
import NewWorkout from '../component/NewWorkout/NewWorkout'
import NewExercise from '../component/NewExercise/NewExercise.js'
import ExistingExercise from '../component/ExistingExercise/ExistingExercise.js'

class App extends Component {

	constructor() {
		super()
		this.state = {
			Exercises: [],
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
		let ShowExistingExercises = null
		if (this.state.NewWorkout === true) {
			ShowExistingExercises = this.state.Exercises.map((ex) => <ExistingExercise name={ex.name} sets={ex.sets} reps={ex.reps} weight={ex.weight}/>)
			ShowNewExercise = <NewExercise/>
		}

		return (
			<div className="App">
				<NewWorkout
					buttonMsg={buttonMsgText}
					NewWorkout={this.state.NewWorkout}
					click={this.startWorkoutHandler}
				/>
				{ShowExistingExercises}
				{ShowNewExercise}
			</div>
		)
	}
}

export default App