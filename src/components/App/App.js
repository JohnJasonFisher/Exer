import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from '../Home/Home'
import FiveByFive from '../FiveByFive/FiveByFive'

class App extends Component {
	render() {
		return(
			<div className='App'>
				<Switch>
				<Route exact path='/' component={Home}/>
				<Route path='/w' component={FiveByFive}/>
				</Switch>
			</div>
		)
	}
}

export default App