import axios from 'axios'

const api = 'https://whatsup-heroku.herokuapp.com/api/projects'
// const api = 'localhost:8008/api/projects'

export const GET_PROJECT = 'GET_PROJECT'
export const GET_PROJECTS = 'GET_PROJECTS'
export const ADD_PROJECT = 'ADD_PROJECT'
export const REMOVE_PROJECT = 'REMOVE_PROJECT'
export const EDIT_PROJECT = 'EDIT_PROJECT'
export const PROJECT_SUCCESS = 'PROJECT_SUCCESS'
export const PROJECT_FAIL = 'PROJECT_FAIL'

export const add_project = project => dispatch => {
    console.log('adding project')
    dispatch({type: ADD_PROJECT})
    return axios
        .post(api, project)
        .then(res => {
            console.log(res)
            dispatch({type: PROJECT_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: PROJECT_FAIL, payload: err})
        })
}
export const get_projects = () => dispatch => {
    dispatch({type: GET_PROJECTS})
    return axios
        .get(api)
        .then(res => dispatch({type: PROJECT_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: PROJECT_FAIL, payload: err}))
}