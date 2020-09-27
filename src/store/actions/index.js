import * as actions from './actionCreators'
const apiUrl = 'http://localhost:3001'
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const getTodoList = () => async dispatch => {
  dispatch(actions.getTodoListRequest())
  try {
    const res = await fetch(`${apiUrl}/todos`, {
      method: 'GET',
      headers,
    })
    const jsonData = await res.json()
    return dispatch(actions.getTodoListReceive(jsonData))
  } catch (error) {
    return dispatch(actions.errorCatcher(error.message))
  }
}

export const updateTodo = (id, changes) => async dispatch => {
  dispatch(actions.updateTodoRequest())
  try {
    const res = await fetch(`${apiUrl}/todos/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(changes)
    })
    const jsonData = await res.json()
    return dispatch(actions.updateTodoReceive(jsonData))
  } catch (error) {
    return dispatch(actions.errorCatcher(error.message))
  }
}

export const createTodo = values => async dispatch => {
  dispatch(actions.createTodoRequest())
  try {
    const res = await fetch(`${apiUrl}/todos`, {
      method: 'POST',
      headers,
      body: JSON.stringify(values)
    })
    const jsonData = await res.json()
    return dispatch(actions.createTodoReceive(jsonData))
  } catch (error) {
    return dispatch(actions.errorCatcher(error.message))
  }
}

export const deleteTodo = id => async dispatch => {
  try {
    dispatch(actions.deleteTodoRequest())
    fetch(`${apiUrl}/todos/${id}`, {
      method: 'DELETE',
      headers,
    })
    return dispatch(actions.deleteTodoReceive(id))
  } catch (error) {
    return dispatch(actions.errorCatcher(error.message))
  }
}

export const setFilters = name => async dispatch => {
  dispatch(actions.setTodoFilterRequest())
  try {
    return dispatch(actions.setTodoFilterReceive(name))
  } catch (error) {
    return dispatch(actions.errorCatcher(error.message))
  }
}
