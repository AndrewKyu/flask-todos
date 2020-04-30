import { GET_TASK, TASK_LOADING, CLEAR_CURRENT_TASK, GET_TASKS } from '../actions/type';

const initialState = {
  task: null,
  tasks: null,
  loading: false
}

export default function(state = initialState, action){
  switch(action.type){
    case TASK_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_TASK:
      return {
        ...state,
        task: action.payload,
        loading: false
      };
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false
      }
    case CLEAR_CURRENT_TASK:
      return {
        ...state,
        task: null
      }
    default: return state;
  }
}
