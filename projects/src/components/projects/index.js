import React, {Component} from 'react'
import {connect} from 'react-redux'
import Wrapper from './style'

import Project from './project'

import {get_projects, add_project} from '../../actions/projects'

class Projects extends Component {
    constructor() {
        super()
        this.state = {
            new_project: false,
            project_name: '',
            project_desc: '',
            option_name: '',
            option_desc: '',
            option_notes: '',
        }
    }
    componentDidMount = () => this.props.get_projects()
    add_project = () => this.props.add_project({name: this.state.project_name, description: this.state.project_desc})
    update_field = e => this.setState({[e.target.name]: e.target.value})
    toggle_new_project = () => this.setState(prev => {return{new_project: !prev.new_project}})
    render = () =>
        <Wrapper className='projects'>
            <div className='options'>
                <pre className={this.state.new_project ? 'option' : 'option active'} onClick={this.toggle_new_project}>New Project</pre>
                {/* <pre className='option'>New Action</pre> */}
            </div>
            <div className={this.state.new_project ? 'add active' : 'add'}>
                <h3 className='header'>New Project</h3>
                <div className='fields'>
                    <p className='title'>Name:</p>
                    <input type='text' name='project_name' onChange={this.update_field} value={this.state.preject_name}></input>
                    <p className='title'>Description:</p>
                    <input type='text' name='project_desc' onChange={this.update_field} value={this.state.project_desc}></input>
                </div>
                <div className='options'>
                    <button className='option' onClick={this.toggle_new_project}>Cancel</button>
                    <button className='option' onClick={this.add_project}>Add</button>
                </div>
            </div>
            {this.props.projects.map(project =>
                <Project project={project} key={project.id} /> 
            )}
        </Wrapper>
}

const mapStateToProps = state => {
    return {projects: state.projects.projects}
}

export default connect(
    mapStateToProps,
    {   get_projects,
        add_project,
    })(Projects)