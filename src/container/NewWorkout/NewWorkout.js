import React, { Component } from 'react'
import Axios from 'axios'

import NewWorkoutBtn from '../../component/NewWorkoutBtn/NewWorkoutBtn'
import NewExercise from '../../component/NewExercise/NewExercise'
import ExistingExercises from '../../component/ExistingExercises/ExistingExercises'


class NewWorkout extends Component {

	state = {
		newWorkout: false,
		date: null,
		exercises: [],
		fetchedExercises: []
	}

	startWorkoutHandler = () => {
		let newState = {...this.state}
		newState.newWorkout = true
		this.setState(newState)
	}

	finishWorkoutHandler = () => {
		const newState = {...this.state}
		const workouts = {date: new Date(Date.now()).toJSON(), exercises: newState.exercises}
		const exercises = newState.exercises.map(ex => ex.name)

		if (workouts.exercises.length > 0) {
			Axios.post('https://excer-a8329.firebaseio.com/workouts.json', workouts)
		}

		Axios.get('https://excer-a8329.firebaseio.com/pastExercises.json')
		.then(res => {
			const fetchedExercises = res.data
			exercises.forEach(ex => {
				if (!fetchedExercises.includes(ex)) {
					fetchedExercises.push(ex)
				}
			})
			Axios.put('https://excer-a8329.firebaseio.com/pastExercises.json', fetchedExercises)
		})

		this.setState({
			newWorkout: false,
			date: null,
			exercises: []
		})
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
				<ExistingExercises
					exercises={this.state.exercises}
					click={this.deleteExsistingExerciseHandler}
					submitBtn={true}
				/>
				{ShowNewExercise}
				<NewWorkoutBtn
					newWorkout={this.state.newWorkout}
					click={workoutHandler}
				/>
			</div>
		)
	}
}

export default NewWorkout