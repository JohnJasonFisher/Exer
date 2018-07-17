import React, { Component } from 'react'
import './App.css'
import NewWorkout from '../component/NewWorkout/NewWorkout'
import NewExercise from '../component/NewExercise/NewExercise.js'
import ExistingExercise from '../component/ExistingExercise/ExistingExercise.js'
import {ListGroup} from 'react-bootstrap'

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

		let ShowExistingExercises = null
		if (this.state.exercises.length > 0) {
			ShowExistingExercises = this.state.exercises.map((ex, index) =>
				<ExistingExercise
					key={'ee' + index}
					{...ex}
				/>
			)
		}

		return (
			<div className='App'>
				<NewWorkout
					newWorkout={this.state.newWorkout}
					click={this.startWorkoutHandler}
				/>
				<ListGroup>
					{ShowExistingExercises}
				</ListGroup>
				{ShowNewExercise}
			</div>
		)
	}
}

export default App