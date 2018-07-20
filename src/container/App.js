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

	componentDidMount() {
		fetch('http://localhost:3000/exercises')
		.then(response => response.json())
		.then(data => {
			let newState = {...this.state}
			newState.exercises = data
			this.setState(newState)
		})
	}

	startWorkoutHandler = () => {
		let newState = {...this.state}
		newState.newWorkout = !this.state.newWorkout
		this.setState(newState)
	}

	deleteExsistingExerciseHandler = (id) => {
		fetch(`http://localhost:3000/exercises/${id}`, {
			method: 'DELETE',
		})
		let newState = {...this.state}
		newState.exercises = newState.exercises.filter(ex => ex.id !== id)
		this.setState(newState)
	}

	submitNewExerciseHandler = (event, Obj) => {
		event.preventDefault()
		fetch('http://localhost:3000/exercises', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({"id": this.state.exercises.length + 1, ...Obj})
		})
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
				<ExistingExercises exercises={this.state.exercises} click={this.deleteExsistingExerciseHandler}/>
				{ShowNewExercise}
			</div>
		)
	}
}

export default App