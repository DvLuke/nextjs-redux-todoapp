import { combineReducers } from 'redux'
import TodoFiltersReducer from './TodoFiltersReducer'
import TodoReducer from './TodoReducer'

export default combineReducers({
  todos: TodoReducer,
  filters: TodoFiltersReducer,
})