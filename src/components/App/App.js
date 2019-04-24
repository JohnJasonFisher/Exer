import React, {Component} from 'react'

import NewWorkout from 'components/NewWorkout/NewWorkout'
import PastWorkouts from 'components/PastWorkouts/PastWorkouts'

class App extends Component {
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