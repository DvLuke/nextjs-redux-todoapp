import { connect } from 'react-redux'
import TodoAdd from '../components/TodoAdd'
import { createTodo } from '../store/actions'

const mapDispatchToProps = dispatch => ({
  createTodo: values => dispatch(createTodo(values))
})

export default connect(null, mapDispatchToProps)(TodoAdd)