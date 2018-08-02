import React, { Component } from 'react'
import './NewWorkout.css'
import NewWorkoutBtn from '../../component/NewWorkoutBtn/NewWorkoutBtn'
import NewExercise from '../../component/NewExercise/NewExercise'
import ExistingExercises from '../../component/ExistingExercises/ExistingExercises'
import Axios from 'axios'

class NewWorkout extends Component {

	state = {
		newWorkout: false,
		date: null,
		exercises: []
	}

	startWorkoutHandler = () => {
		let newState = {...this.state}
		newState.newWorkout = true
		this.setState(newState)
	}

	finishWorkoutHandler = () => {
		let newState = {...this.state}
		let exObj = {date: new Date(Date.now()).toJSON(), exercises: newState.exercises}
		if (exObj.exercises.length > 0) {
			Axios.post('https://excer-a8329.firebaseio.com/workouts.json', exObj)
		}
		newState = {
			newWorkout: false,
			date: null,
			exercises: []
		}
		this.setState(newState)
	}

	submitNewExerciseHandler = (event, Obj) => {
		event.preventDefault()
		let newState = {...this.state}
		newState.exercises.push(Obj)
		this.setState(newState)
	}

	deleteExsistingExerciseHandler = (id) => {
		let newState = {...this.state}
		newState.exercises.splice(id, 1)
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
			<div className='NewWorkout'>
				<NewWorkoutBtn
					newWorkout={this.state.newWorkout}
					click={workoutHandler}
				/>
				<ExistingExercises
					exercises={this.state.exercises}
					click={this.deleteExsistingExerciseHandler}
					submitBtn={true}
				/>
				{ShowNewExercise}
			</div>
		)
	}
}

export default NewWorkout