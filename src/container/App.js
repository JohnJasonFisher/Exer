import React, { Component } from 'react'
import './App.css'
import NewWorkout from '../component/NewWorkout/NewWorkout'
import NewExercise from '../component/NewExercise/NewExercise'
import ExistingExercises from '../component/ExistingExercises/ExistingExercises'

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

	submitNewExerciseHandler = (event, Obj) => {
		event.preventDefault()
		let newState = {...this.state}
		newState.exercises.push(Obj)
		this.setState(newState)
	}

	render() {
		let ShowNewExercise = null
		if (this.state.newWorkout === true) {
			ShowNewExercise = <NewExercise submit={this.submitNewExerciseHandler}/>
		}

		return (
			<div className='App'>
				<NewWorkout
					newWorkout={this.state.newWorkout}
					click={this.startWorkoutHandler}
				/>
				<ExistingExercises exercises={this.state.exercises}/>
				{ShowNewExercise}
			</div>
		)
	}
}

export default App