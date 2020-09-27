import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import PlusIcon from '@material-ui/icons/Add'
import Pinned from '@material-ui/icons/TurnedIn'
import Unpinned from '@material-ui/icons/TurnedInNot'
import Paper from '@material-ui/core/Paper'
import useStyles from './styles'

export default function TodoAdd({ createTodo }) {
  const classes = useStyles();
  const [title, setTitle] = React.useState('');
  const [pinned, setPinned] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo({
      title,
      pinned,
      completed: false
    })
    setTitle('')
    setPinned(false)
  }

  const onChangeInput = ({ target: { value } }) => setTitle(value)
  const onChangePinned = () => setPinned(!pinned)

  return (
    <Paper
      component="form"
      variant="outlined"
      className={classes.paper}
      onSubmit={handleSubmit}
    >
      <InputBase
        placeholder="Todo item title"
        inputProps={{ 'aria-label': 'todo item title' }}
        className={classes.input}
        value={title}
        onChange={onChangeInput}
      />
      <Tooltip title={pinned ? 'unpin' : 'pin'} placement="top">
        <IconButton
          type="button"
          aria-label="add"
          className={classes.iconButton}
          onClick={onChangePinned}
        >
          {pinned ? <Pinned /> : <Unpinned />}
        </IconButton>
      </Tooltip>
      <Tooltip title="add todo" placement="top">
        <IconButton
          type="submit"
          aria-label="add"
          className={classes.iconButton}
        >
          <PlusIcon />
        </IconButton>
      </Tooltip>
    </Paper>
  )
}