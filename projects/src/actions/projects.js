import axios from 'axios'

const api = 'localhost:8008/api/projects/'

export const GET_PROJECT = 'GET_PROJECT'
export const GET_PROJECTS = 'GET_PROJECTS'
export const ADD_PROJECT = 'ADD_PROJECT'
export const REMOVE_PROJECT = 'REMOVE_PROJECT'
export const EDIT_PROJECT = 'EDIT_PROJECT'
export const PROJECT_SUCCESS = 'PROJECT_SUCCESS'
export const PROJECT_FAIL = 'PROJECT_FAIL'

export const get_projects = () => dispatch => {
    console.log('in get projects')
    dispatch({type: GET_PROJECTS})
    return axios
        .get(api)
        .then(res => {
            dispatch({type: PROJECT_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: PROJECT_FAIL, payload: err})
        })
}