import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  blink: {
    margin: `auto ${theme.spacing(2)}px`,
    animation: 'blinker .5s linear infinite'
  }
}));