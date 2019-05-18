import React, {Component} from 'react'
import {connect} from 'react-redux'
// import Wrapper from './style'

import {get_projects} from '../../actions/projects'

class Projects extends Component {
    componentDidMount = () => {
        this.props.get_projects()
    }
    render = () =>
        <div className='projects'>
            Some list
        </div>
}

const mapStateToProps = state => {
    console.log(state)
    return {
        projects: state.projects.projects,
    }
}

export default connect(
    mapStateToProps,
    {   get_projects,
    })(Projects)