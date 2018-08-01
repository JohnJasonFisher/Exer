import React, {Component} from 'react'
import './App.css'
import NewWorkout from '../NewWorkout/NewWorkout'

class App extends Component {
	state = {}
	render() {
		return(
			<div className='App'>
				<NewWorkout/>
			</div>
		)
	}
}

export default App