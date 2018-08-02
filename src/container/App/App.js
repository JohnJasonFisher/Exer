import React, {Component} from 'react'

import NewWorkout from '../NewWorkout/NewWorkout'
import PastWorkouts from '../PastWorkouts/PastWorkouts'

class App extends Component {
	state = {}
	render() {
		return(
			<div className='App'>
				<NewWorkout/>
				<PastWorkouts/>
			</div>
		)
	}
}

export default App