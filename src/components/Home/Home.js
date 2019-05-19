import NewWorkout from 'components/NewWorkout/NewWorkout'
import PastWorkouts from 'components/PastWorkouts/PastWorkouts'

import React, {Component} from 'react'

export default class Home extends Component {
    render() {
		return(
            <>
                <NewWorkout/>
                <PastWorkouts/>
            </>
        )
    }

}
