import { GET_PROJECTS, PROJECT_SUCCESS, PROJECT_FAIL } from '../actions/projects'

const initState = {
    projects: [],
    fetching: false,
    error: null,
}

export const projectsReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                error: null,
                fetching: true,
            }
        case PROJECT_SUCCESS:
            console.log('success')
            return {
                ...state,
                error: null,
                fetching: false,
                projects: action.payload,
            }
        case PROJECT_FAIL:
            console.log('fail')
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }
        default:
            return state
    }
}