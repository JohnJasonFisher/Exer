import React, { Component } from 'react'
import './App.css'
import NewWorkout from '../component/NewWorkout/NewWorkout'
import NewExercise from '../component/NewExercise/NewExercise.js'
import ExistingExercise from '../component/ExistingExercise/ExistingExercise.js'

class App extends Component {

	constructor() {
		super()
		this.state = {
			exercises: [],
			newWorkout: false
		}
	}

	startWorkoutHandler = () => {
		let newState = {...this.state}
		newState.newWorkout = !this.state.newWorkout
		this.setState(newState)
	}

	addNewExerciseHandler = (exObj) => {
		let newState = {...this.state}
		newState.exercises = exObj
		this.setState(newState)
	}

	render() {
		let ShowNewExercise = null
		if (this.state.newWorkout === true) {
			ShowNewExercise = <NewExercise click={this.addNewExerciseHandler}/>
		}

		let ShowExistingExercises = null
		let existingExercises = null
		if (this.state.exercises.length !== 0) {
			existingExercises = [...this.state.exercises]
			ShowExistingExercises = existingExercises.map(ex => <ExistingExercise name={ex.name} sets={ex.sets} reps={ex.reps} weight={ex.weight}/>)
		}

		return (
			<div className="App">
				<NewWorkout
					newWorkout={this.state.newWorkout}
					click={this.startWorkoutHandler}
				/>
				{ShowExistingExercises}
				{ShowNewExercise}
			</div>
		)
	}
}

export default App