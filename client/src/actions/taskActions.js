import axios from 'axios';
import {
  TASK_LOADING,
  CLEAR_CURRENT_TASK,
  GET_TASKS,
  GET_TASK,
  GET_ERRORS,
  ADD_TASK,
  DELETE_TASK
} from './type.js'
const localhost = 'http://localhost:5000'

export const createTask = (taskData, history) => dispatch => {
  console.log(taskData);
  axios
    .post(`${localhost}/api/task`, taskData)
    .then(res => {
      console.log('add post response');
      console.log(res);
      dispatch({
        type: ADD_TASK,
        payload: res.data
      });
      dispatch(getTasks());
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    });
}

export const getTasks = () => dispatch => {
  dispatch(setTaskLoading());
  axios
    .get('http://localhost:5000/api/task')
    .then(res =>{
      dispatch({
        type: GET_TASKS,
        payload: res.data
      })
    }
    )
    .catch(err => {
      dispatch({
        type: GET_TASKS,
        payload: null
      })
    })
}

export const updateTask = taskID => dispatch => {
  console.log(taskID);
}

export const getCurrentTask = taskID => dispatch => {
  dispatch(setTaskLoading());
  axios
    .get(`/api/task/${taskID}`)
    .then(res =>
      dispatch({
        type: GET_TASK,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TASK,
        payload: null
      })
    )
}

export const deleteTask = (id) => dispatch => {
  axios
    .delete(`${localhost}/api/task/${id}`)
    .then(res =>{
      dispatch({
        type: DELETE_TASK,
        payload: id
      });
      dispatch(getTasks());
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: null
      })
    )
}
export const setTaskLoading = () => {
  return {
    type: TASK_LOADING
  }
}

export const clearCurrentTask = () => {
  return {
    type: CLEAR_CURRENT_TASK
  }
}
