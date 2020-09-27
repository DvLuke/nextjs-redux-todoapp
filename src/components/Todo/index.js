import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import useStyles from './styles'
import TodoAdd from '../../containers/TodoAddContainer'
import TodoList from '../../containers/TodoListContainer'
import TodoFilters from '../../containers/TodoFiltersContainer'


export default function Todo() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography
        variant="h5"
        component="h1"
        className={classes.title}
      >
        Todo List
      </Typography>
      <Typography variant="caption" component="p" className={classes.subtitle}>
        A list of errands and other tasks – often written on a
        piece of paper as a memory aid – that one needsor intends to accomplish.
        Mowing the lawn and chopping the weeds topped his to-do list of chores.
      </Typography>
      <TodoAdd />
      <TodoList />
      <TodoFilters />
    </Paper>
  )
}