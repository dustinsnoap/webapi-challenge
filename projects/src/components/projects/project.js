import React, {Component} from 'react'

class Project extends Component {
    constructor() {
        super()
        this.state = {
            active: false,
        }
    }
    h_toggle_active = () =>
        this.setState(prevState => { return {active: !prevState.active}})
    render = () =>
        <div className='project' onClick={this.h_toggle_active}>
            <div className='summary'>
                <p className='title'>Project id:</p>
                <p className='value'>{this.props.project.id}</p>
                <p className='title'>Name:</p>
                <p className='value'>{this.props.project.name}</p>
                <p className='title'>Description:</p>
                <p className='value'>{this.props.project.description}</p>
                <p className='title'>Completed:</p>
                <p className='value'>{this.props.project.completed ? 'True' : 'False'}</p>
                <p className='title'>Actions:</p>
                <p className='value'>{this.props.project.actions.length}</p>
            </div>
            <div className={this.state.active ? 'actions active' : 'actions'}>
                {this.props.project.actions.map(action =>
                    <div className='action' key={action.id}>
                        <p className='title'>id:</p>
                        <p className='value'>{action.id}</p>
                        <p className='title'>description:</p>
                        <p className='value'>{action.description}</p>
                        <p className='title'>notes:</p>
                        <p className='value'>{action.notes}</p>
                        <p className='title'>completed: </p>
                        <p className='value'>{action.completed ? 'True' : 'False'}</p>
                    </div>
                )}
            </div>
        </div>
}

export default Project