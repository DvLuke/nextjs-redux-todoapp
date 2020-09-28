import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoAdd from '../components/TodoAdd'
import { createTodo } from '../store/actions'

const mapDispatchToProps = dispatch => bindActionCreators({
  createTodo: values => createTodo(values)
}, dispatch)

export default connect(null, mapDispatchToProps)(TodoAdd)