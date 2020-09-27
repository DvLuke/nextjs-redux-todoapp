import * as types from '../types';
const INITIAL_STATE = {
  filter: 'reset'
}

export default function TodoFiltersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_TODO_FILTER_REQUEST:
      return Object.assign({}, state, {
        loading: true
      })
    case types.SET_TODO_FILTER_RECEIVE:
      return Object.assign({}, state, {
        filter: action.data,
        loading: false
      })
    default:
      return state
  }
}