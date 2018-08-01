import React, { Component } from 'react'
import './App.css'
import NewWorkout from '../component/NewWorkout/NewWorkout'
import NewExercise from '../component/NewExercise/NewExercise'
import ExistingExercises from '../component/ExistingExercises/ExistingExercises'
import Axios from 'axios'

class App extends Component {

	state = {
		id: null,
		newWorkout: false,
		exercises: []
	}

	startWorkoutHandler = () => {
		let newState = {...this.state}
		let date = new Date(Date.now())
		let exObj = {date: date.toJSON()}
		Axios.post('https://excer-a8329.firebaseio.com/workouts.json', exObj)
		.then(res => {
			newState.newWorkout = true
			newState.id = res.data.name
			this.setState(newState)
		})
	}

	finishWorkoutHandler = () => {
		let newState = {
			id: null,
			newWorkout: false,
			exercises: []
		}
		this.setState(newState)
	}

	submitNewExerciseHandler = (event, Obj) => {
		event.preventDefault()
		Axios.post(`https://excer-a8329.firebaseio.com/workouts/${this.state.id}/exercises.json`, Obj)
		.then(res => Obj.id = res.data.name)
		let newState = {...this.state}
		newState.exercises.push(Obj)
		this.setState(newState)
	}

	render() {
		let ShowNewExercise = null
		let workoutHandler = this.startWorkoutHandler
		if (this.state.newWorkout === true) {
			ShowNewExercise = <NewExercise submit={this.submitNewExerciseHandler}/>
			workoutHandler = this.finishWorkoutHandler
		}

		return (
			<div className='App'>
				<NewWorkout
					newWorkout={this.state.newWorkout}
					click={workoutHandler}
				/>
				<ExistingExercises exercises={this.state.exercises} click={this.deleteExsistingExerciseHandler}/>
				{ShowNewExercise}
			</div>
		)
	}
}

export default App