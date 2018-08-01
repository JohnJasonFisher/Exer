import React, { Component } from 'react'
import './App.css'
import NewWorkout from '../component/NewWorkout/NewWorkout'
import NewExercise from '../component/NewExercise/NewExercise'
import ExistingExercises from '../component/ExistingExercises/ExistingExercises'
import axios from 'axios'

class App extends Component {

	constructor() {
		super()
		this.state = {
			exercises: [],
			newWorkout: false
		}
	}

	// componentDidMount() {
	// 	axios.get('https://excer-a8329.firebaseio.com/exercises')
	// 	.then(response => response)
	// 	.then(data => {
	// 		let newState = {...this.state}
	// 		newState.exercises = data
	// 		this.setState(newState)
	// 	})
	// 	.catch(err => console.log(err))
	// }

	startWorkoutHandler = () => {
		let newState = {...this.state}
		newState.newWorkout = !this.state.newWorkout
		this.setState(newState)
	}

	// deleteExsistingExerciseHandler = (id) => {
	// 	axios.delete(`https://excer-a8329.firebaseio.com/exercises/${id}.json`)
	// 	let newState = {...this.state}
	// 	newState.exercises = newState.exercises.filter(ex => ex.id !== id)
	// 	this.setState(newState)
	// }

	submitNewExerciseHandler = (event, Obj) => {
		event.preventDefault()
		console.log(Obj)
		let subObj = {...Obj}
		console.log(subObj)
		axios.post('https://excer-a8329.firebaseio.com/exercises.json', subObj)
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