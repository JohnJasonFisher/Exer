import React, {Component} from 'react'
import Axios from '../../../node_modules/axios'

import PastWorkout from '../../component/PastWorkout/PastWorkout'

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
		let listOfWorkouts = this.state.workouts.map((workout, index) =>
			<PastWorkout key={index} {...workout}/>
		)
		return(
			<div className='ExistingWorkouts'>
				{listOfWorkouts}
			</div>
		)
	}
}

export default ExistingWorkouts