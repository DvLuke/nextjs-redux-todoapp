import * as types from '../types'

// create todo action creators
export function createTodoRequest(data) {
  return {
    type: types.CREATE_TODO_REQUEST,
    data
  }
}

export function createTodoReceive(payload) {
  return {
    type: types.CREATE_TODO_RECEIVE,
    data: payload
  }
}

// update todo action creators
export function updateTodoRequest() {
  return {
    type: types.UPDATE_TODO_REQUEST,
    data: {
      loading: true
    }
  }
}

export function updateTodoReceive(payload) {
  return {
    type: types.UPDATE_TODO_RECEIVE,
    data: payload
  }
}

// delete todo action creators
export function deleteTodoRequest(data) {
  return {
    type: types.DELETE_TODO_REQUEST,
    data
  }
}

export function deleteTodoReceive(id) {
  return {
    type: types.DELETE_TODO_RECEIVE,
    data: {
      id
    }
  }
}

// get todo list action creators
export function getTodoListRequest() {
  return {
    type: types.GET_TODO_LIST_REQUEST,
    data: {
      loading: true
    }
  }
}

export function getTodoListReceive(payload) {
  return {
    type: types.GET_TODO_LIST_RECEIVE,
    data: {
      payload,
      loading: false
    }
  }
}

// set todo filters action creators
export function setTodoFilterRequest(data) {
  return {
    type: types.SET_TODO_FILTER_REQUEST,
    data
  }
}

export function setTodoFilterReceive(payload) {
  return {
    type: types.SET_TODO_FILTER_RECEIVE,
    data: payload
  }
}

// error todo action creators
export function errorCatcher(error) {
  return {
    type: types.ERROR,
    data: error
  }
}