import { connect } from 'react-redux'
import TodoListItem from '../components/TodoListItem'
import { updateTodo, deleteTodo } from '../store/actions'

const mapDispatchToProps = dispatch => ({
  updateTodo: (id, changes) => dispatch(updateTodo(id, changes)),
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(null, mapDispatchToProps)(TodoListItem)