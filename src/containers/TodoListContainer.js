import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoList from '../components/TodoList'
import { getTodoList } from '../store/actions'

const mapStateToProps = state => ({
  loading: state.todos.loading,
  todos: state.todos.data
    .sort((a, b) => a.pinned < b.pinned)
    .filter(x => x[state.filters.filter] === undefined ? true : x[state.filters.filter])
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getTodoList: () => getTodoList()
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)