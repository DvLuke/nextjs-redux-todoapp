import React from 'react'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Pinned from '@material-ui/icons/TurnedIn'
import ClearAll from '@material-ui/icons/ClearAll'
import Typography from '@material-ui/core/Typography'
import CheckedIcon from '@material-ui/icons/CheckBox'

import useStyles from './styles'


export default function TodoFilters({ setFilters, name, error, errorCatcher }) {
  const classes = useStyles();
  const onSelectFilter = name => () => {
    setFilters(name)
  }

  React.useEffect(() => {
    let timer = null
    let seconds = 2;
    if (error) {
      timer = setInterval(() => {
        seconds -= 1
        if (seconds < 0) {
          clearInterval(timer)
          errorCatcher('')
        }
      }, 1000);
    }
    return () => {
      clearInterval(timer)
    }
  }, [error])

  return (
    <Box>
      <Divider />
      <Box display="flex" justifyContent="space-between">
        <Typography
          color="secondary"
          className={classes.blink}
        >
          {error}
        </Typography>
        <Box display="flex" justifyContent="flex-start">
          <Tooltip title="Show all" placement="top">
            <IconButton
              type="button"
              aria-label="show all"
              onClick={onSelectFilter('reset')}
              color={name === 'reset' ? 'secondary' : 'default'}
            >
              <ClearAll />
            </IconButton>
          </Tooltip>
          <Tooltip title="Show completed" placement="top">
            <IconButton
              type="button"
              aria-label="show completed"
              onClick={onSelectFilter('completed')}
              color={name === 'completed' ? 'secondary' : 'default'}
            >
              <CheckedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Show pinned" placement="top">
            <IconButton
              type="button"
              aria-label="show pinned"
              onClick={onSelectFilter('pinned')}
              color={name === 'pinned' ? 'secondary' : 'default'}
            >
              <Pinned />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}