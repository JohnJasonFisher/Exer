import React, {Component} from 'react'
import Axios from '../../../node_modules/axios'
import Moment from 'moment'

import ExistingExercises from '../../component/ExistingExercises/ExistingExercises'
import './PastWorkouts.css'

class ExistingWorkouts extends Component {
	state = {
		workouts: []
	}

	componentDidMount() {
		let newState = {...this.state}
		Axios.get('https://excer-a8329.firebaseio.com/workouts.json')
		.then(res => {
			Object.keys(res.data).forEach(key => newState.workouts.push(res.data[key]))
			this.setState(newState)
		})
	}

	render() {
		let listOfWorkouts = this.state.workouts.map((workout, index) => (
			<React.Fragment key={'frag' + index}>
				<h4 key={workout.date}>{Moment(workout.date).format('MMMM Do YYYY')}</h4>
				<ExistingExercises key={index} exercises={Object.values(workout.exercises)}/>
			</React.Fragment>
		))
		return(
			<div className='ExistingWorkouts'>
				{listOfWorkouts}
			</div>
		)
	}
}

export default ExistingWorkouts