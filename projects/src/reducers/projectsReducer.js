import { GET_PROJECTS, PROJECT_SUCCESS, PROJECT_FAIL, ADD_PROJECT } from '../actions/projects'

const initState = {
    projects: [],
    fetching: false,
    error: null,
}

export const projectsReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_PROJECTS:
        case ADD_PROJECT:
            return {
                ...state,
                error: null,
                fetching: true,
            }
        case PROJECT_SUCCESS:
            console.log('project added')
            console.log(action.payload)
            return {
                ...state,
                error: null,
                fetching: false,
                projects: action.payload,
            }
        case PROJECT_FAIL:
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }
        default:
            return state
    }
}