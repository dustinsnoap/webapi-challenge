import React, {Component} from 'react'

class Project extends Component {
    constructor({project}) {
        super()
        this.state = {
            active: false,
        }
    }
    h_toggle_active = () =>
        this.setState(prevState => { return {active: !prevState.active}})
    render = () =>
        <div className='project'>
            <div className='summary'>
                <pre>ID: {project.id}</pre>
                <pre>Name: {project.name}</pre>
                <pre>Description: {project.description}</pre>
                <pre>Completed: {project.completed}</pre>
                <pre>Actions: {project.actions.length}</pre>
            </div>
            <div className='actions'>
                {project.actions.map(action =>
                    <>
                    <pre>ID: {action.id}</pre>
                    <pre>Description: {action.description}</pre>
                    <pre>Notes: {action.notes}</pre>
                    <pre>Completed: {action.completed}</pre>
                    </>
                )}
            </div>
        </div>
}

export default Project